import { useEffect, useState, useRef } from "react";
import { ArticleTileButton } from "../Buttons/ArticleTileButton";
import styled from '@emotion/styled'
import './index.scss';

type ArticleTileProps = {
    title: string,
    description: string,
    date: string,
    url: string,
    key: string,
    className: string,
    colorScheme: {
        title: string,
        description: string,
        date: string,
        button: string,
        dropshadow: string
    }
};

export const ArticleTile = ({ title, description, url, colorScheme, key, className }: ArticleTileProps) => {
  
  const ArticleTileContainer = styled.div(props => ({
    transform: 'scale(1)',
    '&:hover': {
      transform: 'scale(1.05)',
      transition: 'transform .25s ease-in-out',
    },
    '&:not(:hover)': {
      transform: 'scale(1)',
      transition: 'transform .25s ease-in-out',
    },
    ...props.style
  }));
  
  const TitleDiv = styled.div(props => ({
    color: colorScheme.title,
    textShadow: `2px 3px 1px ${colorScheme.dropshadow}`,
    '&:hover': {
      textShadow: `0 0 24px ${colorScheme.title}`,
      transition: 'text-shadow 1s ease-in-out',
    },
    ...props.style,
  }));

  const DescriptionDiv = styled.div(props => ({
    color: `${colorScheme?.description || "#707070"}`,
    '&:hover': {
      textShadow: `0 0 24px ${colorScheme.description}`,
      transition: 'text-shadow 1s ease-in-out',
    },
    ...props.style,
  }));
    
  const [scrollOpacity, setScrollOpacity] = useState(.333);
  const articleTileRef = useRef<HTMLDivElement>(null);
  const fadeToOpacity = (element: HTMLDivElement, targetOpacity: number, duration: number) => {
    if (!element) return;
    const startOpacity = parseFloat(window.getComputedStyle(element).opacity);
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentOpacity = startOpacity + (targetOpacity - startOpacity) * progress;
      element.style.opacity = currentOpacity.toString();
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  const onMouseEnterHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    fadeToOpacity(event.currentTarget, 1, 1000);
  };

  const onMouseLeaveHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    fadeToOpacity(event.currentTarget, scrollOpacity, 1000);
  }
  
  useEffect(() => {
    const handleScroll = (): void => {
      if (articleTileRef.current) {
        const rect = articleTileRef.current.getBoundingClientRect();
        const topOffset = rect.top;
        const windowHeight = window.innerHeight;
        const bottomOffset = windowHeight - rect.bottom;
        const maxScrollDistance = window.innerHeight / 3;
        const minOpacity = 0.5;
        
        let newOpacity;
      
        if (topOffset < maxScrollDistance) {
          newOpacity = 1 - (maxScrollDistance - topOffset) / maxScrollDistance;
        } else if (bottomOffset > maxScrollDistance) {
          newOpacity = 1;
        } else {
          newOpacity = minOpacity + (1 - minOpacity) * (bottomOffset / maxScrollDistance);
        }
        if(articleTileRef.current.classList.contains('full-opacity')) {
          console.log('full opacity');
          newOpacity = 1;
        }
        setScrollOpacity(Math.max(minOpacity, newOpacity));
        fadeToOpacity(articleTileRef.current, newOpacity, 2000);
      }
    };
    if (articleTileRef.current) {
      fadeToOpacity(articleTileRef.current, 1, 2000);
    }
    window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <ArticleTileContainer
      id={key}
      onMouseLeave={(event) => onMouseLeaveHandler(event)}
      onMouseEnter={(event) => onMouseEnterHandler(event)}
      ref={articleTileRef}
      style={{ opacity: scrollOpacity }}
      className={`pb-12 article__tile ${className}`}
    >
      <TitleDiv className="article__title">{title}</TitleDiv>
      <DescriptionDiv className="article__description">{description}</DescriptionDiv>
      
      <ArticleTileButton baseColor={colorScheme?.button} url={url} />
    </ArticleTileContainer>
  );
}
