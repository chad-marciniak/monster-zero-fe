import { Button } from "@mui/base";
import styled from "@emotion/styled";
import './index.scss';

type ArticleTileButtonProps = {
    url: string;
    baseColor: string;
}

const ArticleTileButtonStyled = styled(Button)(prop => ({
    backgroundColor: '#202124',
    border: `2px solid ${prop.baseColor}`,
    color: prop.baseColor,
    transition: 'background-color 1s ease, border 1s ease, color 1s ease',
    '&:hover': {
        backgroundColor: prop.baseColor,
        border: `2px solid "#202124"`,
        color: '#202124',
        boxShadow: `0 0 4px ${prop.baseColor}`,
        transition: 'background-color 1s ease, border 1s ease, color 1s ease, box-shadow 1s ease',
    }
}   
));


export const ArticleTileButton = ({ url, baseColor }: ArticleTileButtonProps) => {
    return (
        <ArticleTileButtonStyled
            baseColor={baseColor} 
            className="flex grow text-center justify-center p-2 mt-6 article__button" 
            href={url}>
            Read More
        </ArticleTileButtonStyled>
    )
};
