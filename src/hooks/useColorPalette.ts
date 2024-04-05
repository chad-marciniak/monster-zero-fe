import { useState, useEffect, useCallback } from 'react';

function useColorPalette() {
    const [palette, setPalette] = useState([]);

    const generatePalette = useCallback(() => {
        const initialHue = Math.floor(Math.random() * 360); // Random starting hue
        const steps = 4; // Number of colors in each array
        const colorSet = [];

        // Generate colors transitioning smoothly through the spectrum
        for (let i = 0; i < 7; i++) { // We generate 7 arrays of colors
            const hue = (initialHue + (i * 50)) % 360; // Increasing hue for each array
            const hueStep = 40 / steps; // Step size to transition smoothly

            const subPalette = [];
            for (let j = 0; j < steps; j++) {
                const currentHue = (hue + j * hueStep) % 360;
                const lightness = 60 - j * 10; // Adjust lightness for each color
                const color = `hsl(${currentHue}, 100%, ${lightness}%)`; // Convert HSL to CSS color
                subPalette.push(color);
            }
            colorSet.push(subPalette);
        }

        setPalette(colorSet);
    }, []);

    useEffect(() => {
        generatePalette();
    }, []);

    return palette;
}

export default useColorPalette;
