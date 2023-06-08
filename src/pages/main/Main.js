import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Title = styled.div `
    .title {
        font-family: 'Pretendard';
    }

`


const Main = () => {


    return (
        <Title>
            <Header/>

        </Title>

    );
}

export default Main;