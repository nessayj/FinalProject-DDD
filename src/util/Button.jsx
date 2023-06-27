import React from "react";
import styled from "styled-components";

const Btn =styled.button`
background-color: ${props => (!props.disabled ? '#050E3D' : '#b0abab')};
color :${props => (!props.disabled ? '#ffffff' : '#050E3D')};
border: none;
border-radius : 5px;
width: 100%;
height: 100%;
cursor: pointer;
`;
const Button =  ({onClick, children, disabled}) => {

    return(
        <>
        <Btn onClick={onClick} disabled={disabled}>{children}</Btn>
        </>
    ); 

}


export default Button;