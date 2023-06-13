import React from "react";
import styled from "styled-components";

const InputBox = styled.div`

    display: flex;
    flex-direction: row;
    margin : 10px;
    justify-content: center;
    align-items: center;
    input{
        height: 30px;
        width: 200px;
    }
    label{
        height: 30px;
        margin:10px;
    }
`;
const Input= ({name,onChange}) => {

    return(


        <InputBox>
        <label htmlFor="">{name}</label>
        <input type="text" onChange={()=>console.log("체인지")} />
        </InputBox>
    );

}

export default Input;