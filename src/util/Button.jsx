import React from "react";
import styled from "styled-components";

const Btn =styled.button`
background-color: #050E3D;
color : white;
border: none;
border-radius : 5px;
width: 100%;
height: 100%;
cursor: pointer;
`;
const Button =  ({onClick, children}) => {

    return(
        <>
        <Btn onClick={onClick}>{children}</Btn>
        </>
    ); 

}


export default Button;