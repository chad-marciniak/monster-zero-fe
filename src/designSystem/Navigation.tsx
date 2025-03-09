// import React, { useState, useEffect } from 'react';
// import { Button } from "@mui/base";
import styled from "@emotion/styled";

const NavContainer = styled.div(props => ({
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '1rem 0',
    backgroundColor: '#f5f5f5',
    overflow: 'hidden',
    ...props.style
}));


const NavButton = styled.button(props => ({ 
    position: 'relative',
    background: 'none',
    border: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    color: '#333',
    fontWeight: 500,
    textTransform: 'uppercase',
    '&:hover': {
        color: '#1976d2',
    },
    ...props.style
}));

type NavItem = {
    label: string;
    id: string;
};

const navItems: NavItem[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
];

export const Navigation = () => {

   

    // // set state
    // const [selected, setSelected] = useState<string>(navItems[0].id);
    // const [hoverPos, setHoverPos] = useState<{ left: number; width: number }>({
    //     left: 0,
    //     width: 0,
    // });

    // const handleMouseLeave = () => {
    //     const selectedElement = document.getElementById(selected);
    //     if (selectedElement) {
    //         const rect = selectedElement.getBoundingClientRect();
    //         setHoverPos({ left: rect.left - selectedElement.parentElement!.offsetLeft, width: rect.width });
    //     }
    // };

    // const handleClick = (id: string) => {
    //     setSelected(id);
    //     const selectedElement = document.getElementById(id);
    //     if (selectedElement) {
    //         const rect = selectedElement.getBoundingClientRect();
    //         setHoverPos({ left: rect.left - selectedElement.parentElement!.offsetLeft, width: rect.width });
    //     }
    // };

    // const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    //     const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    //     setHoverPos({ left: rect.left - e.currentTarget.offsetLeft, width: rect.width });
    // };

    // useEffect(() => {
    //     // Set initial position to the selected tab
    //     const selectedElement = document.getElementById(selected);
    //     if (selectedElement) {
    //         const rect = selectedElement.getBoundingClientRect();
    //         setHoverPos({ left: rect.left - selectedElement.parentElement!.offsetLeft, width: rect.width });
    //     }
    //   }, [selected]);

    return (
    <NavContainer>
        {navItems.map((item) => (
            <NavButton
                key={item.id}
                // onClick={() => handleClick(item.id)}
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
                // style={{
                //     borderBottom: selected === item.id ? '2px solid #1976d2' : 'none',
                // }}
            >
                {item.label}
            </NavButton>
        ))}
        <div
            className="hover-bar"
            style={{
                position: 'absolute',
                bottom: 0,
                left: hoverPos.left,
                width: hoverPos.width,
                height: '2px',
                backgroundColor: '#1976d2',
                transition: 'left 0.3s ease, width 0.3s ease',
            }}
        />   
    </NavContainer>
    );
}
