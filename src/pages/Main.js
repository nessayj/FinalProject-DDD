import React from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import MainBody from "../components/mainBody/MainBody";
import Slider from "../components/mainBody/MainBanner";


const MainContainer = styled.div `
    margin: 0 auto;
    font-family: 'Pretendard';
`
const MainBodyContainer = styled.div`
    margin: 0 auto;
    color: #050E3D;
`;


const Main = () => {


    return (
        <MainContainer>
            <Header/>
            <Slider/>
            <MainBodyContainer>
                <MainBody/>
            </MainBodyContainer>
        </MainContainer>

    );
}

export default Main;