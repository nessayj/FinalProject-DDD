import React from "react";
import styled from "styled-components";
import MainBody from "../components/main/MainBody";
import Slider from "../components/main/MainBanner";
import Header from "../components/Header/Header";


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