import React from "react";
import styled,{css} from "styled-components";
import exImg from "../../resources/exImg.png"
const Container = styled.div`
    width: 250px;
    height: 300px;
    background-color: beige;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    .imgBox{
        width: 90%;
    }

    ${({ selectedOption }) =>
    selectedOption === "리스트" &&
    css`
     width: 60%;
    height: 300px;
    background-color: beige;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 20px;
    .imgBox{
        width: 200px;
        height: 90%;
    }
    .textBox{
        width:70%;
    }

    &>*{
        margin: 20px;
    }
    `}
    

`

const InfoBox = ({name,date,lotation,selectedOption}) => {


    return(

        <Container selectedOption={selectedOption}>
        <img className="imgBox" src={exImg} alt="전시이미지" />
        <div className="textBox">
            <div>{name}</div>
            <div>{date}</div>
            <div>{lotation}</div>
        </div>
        </Container>
    );
}

export default InfoBox;