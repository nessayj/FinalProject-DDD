import React from "react";
import styled from "styled-components";
import MainBody from "../components/main/MainBody";
import Slider from "../components/main/MainBanner";
import Header from "../components/header/Header";
import Footer from "../components/main/Footer";
import BgImg from "../resources/BGimg1.jpg";


const MainContainer = styled.div `
    margin: 0 auto;
    font-family: 'Pretendard';
`
const MainBodyContainer = styled.div`
    margin: 0 auto;
    color: #050E3D;
`;
const HeaderStyle = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
`;
const SliderContainer = styled.div`
    position: relative;
    /* margin-top: 200px; */
    z-index: 1;
`;


const Main = () => {


    return (
        <MainContainer>
            <HeaderStyle>
                <Header/>
            </HeaderStyle>
            <SliderContainer>
                <img src={BgImg} alt="bgImg" style={{marginTop: "0", width: "100vw", height: "100vh"}}/>
                <Slider/>
            </SliderContainer>
            <MainBodyContainer>
                <MainBody/>
            </MainBodyContainer>
            <Footer/>
        </MainContainer>

    );
}

export default Main;