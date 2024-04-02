import { Button } from "@mui/base";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

type ArticleTileButtonProps = {
    url: string;
    baseColor: string;
}

export const ArticleTileButton = ({ url, baseColor }: ArticleTileButtonProps) => {

const upBackground = keyframes`
    from { background-color: #202124; color: ${baseColor}; }
    to { background-color: ${baseColor}; color: #202124; }
`;

const fadeBackground = keyframes`
    from { background-color: ${baseColor}; color: #202124; }
    to { background-color: #202124; color: ${baseColor}; }
`;

const StyledButton = styled(Button)(({ baseColor }) => ({
    border: `1px solid ${baseColor}`,
    width: '100%',
    color: `${baseColor}`,
    textTransform: 'uppercase',
    fontSize: '18px',
    fontWeight: 'bold',
    backgroundColor: '#202124',
    animation: `${fadeBackground} 0.5s forwards`,
    animationPlayState: 'paused',
    '&:hover': {
        animation: `${upBackground} .5s forwards`,
        animationPlayState: 'running',
    },
    '&:focus': {
        animation: `${upBackground} .5s forwards`,
        animationPlayState: 'running',
    },
    '&:active': {
        backgroundColor: `${baseColor}`,
        color: '#202124',
    },
    '&:not(:hover):not(:focus)': {
        animation: `${fadeBackground} 0.5s forwards`,
        animationPlayState: 'running', // Activate animation on blur or mouse off
    },
}));

    return (
        <StyledButton baseColor={baseColor} style={{'backgroundColor': baseColor}} className="flex grow text-center justify-center p-2 mt-6" href={url}>
            Read More
        </StyledButton>
    );
};
