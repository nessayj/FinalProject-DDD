import React from "react";
import styled from "styled-components";
import Header from "./Header";
import MainBody from "../../components/MainBody/MainBody";

const MainContainer = styled.div `
    margin: 0 auto;
    font-family: 'Pretendard';
`
const MainBodyContainer = styled.div`
    margin: 0 auto;
    width: 1200px;
`;


const Main = () => {


    return (
        <MainContainer>
            <Header/>
            <MainBodyContainer>
                <MainBody/>
            </MainBodyContainer>
        </MainContainer>

    );
}

export default Main;