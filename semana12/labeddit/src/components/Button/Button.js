import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
    padding: 8px 12px;
    cursor: pointer;
    border: ${(border)=>border};
    border-radius: 5px;
    background-color: ${({bgcolor})=>bgcolor};
    font-size: 1.125em;
    color: ${(color)=>color};
    width: ${(width)=>width};
    transition: 0.2s;

    :hover{
        background-color: ${({bgcolorHover})=>bgcolorHover};
        box-shadow: ${({shadow})=>shadow};
    }
`

const Button = ({title, bgcolor, color, width, border, bgcolorHover, shadow, onClick}) => {
    return (
        <Btn 
        bgcolor={bgcolor} 
        color={color} 
        width={width} 
        border={border} 
        bgcolorHover={bgcolorHover}
        shadow={shadow}
        onClick={onClick}>{title}</Btn>
    )
}

export default Button
