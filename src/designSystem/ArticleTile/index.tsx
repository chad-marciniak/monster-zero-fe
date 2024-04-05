import { useEffect, useState, useRef, useCallback } from "react";
import { ArticleTileButton } from "../Buttons/ArticleTileButton";
import './index.scss';

type ArticleTileProps = {
    title: string,
    description: string,
    date: string,
    url: string,
    key: string,
    colorScheme: {
        title: string,
        description: string,
        date: string,
        button: string,
        dropshadow: string
    }
};

export const ArticleTile = ({ title, description, date, url, colorScheme, key }: ArticleTileProps) => {
  const [scrollOpacity, setScrollOpacity] = useState(1);
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
        const topOffset = rect.top + 60;
        const windowHeight = window.innerHeight;
        const bottomOffset = windowHeight - rect.bottom;
        const maxScrollDistance = 300;
        const minOpacity = 0.333;
        
        let newOpacity;
  
        if (topOffset < maxScrollDistance) {
          newOpacity = 1 - (maxScrollDistance - topOffset) / maxScrollDistance;
        } else if (bottomOffset > maxScrollDistance) {
          newOpacity = 1;
        } else {
          newOpacity = minOpacity + (1 - minOpacity) * (bottomOffset / maxScrollDistance);
        }
        
        setScrollOpacity(Math.max(minOpacity, newOpacity));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id={key}
      onMouseLeave={(event) => onMouseLeaveHandler(event)}
      onMouseEnter={(event) => onMouseEnterHandler(event)}
      ref={articleTileRef}
      style={{ opacity: scrollOpacity }}
      className='pb-12 article__tile'
    >
      <div style={{'color': `${colorScheme?.date || "#707070"}`}} className="article__date">{date}</div>
      <div className="article__title" style={{color: colorScheme.title, textShadow: `2px 3px 1px ${colorScheme.dropshadow}` || "2px 3px 1px #282A33"}}>{title}</div>
      <div style={{'color': `${colorScheme?.description || "#707070"}`}} className="article__description">{description}</div>
      <ArticleTileButton baseColor={colorScheme?.button} url={url} />
    </div>
  );
}
