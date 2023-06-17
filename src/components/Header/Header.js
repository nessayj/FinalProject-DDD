import React from "react";
import Logo from "./Logo";
import Icons from "./IconsBox";
import styled from "styled-components";
import WeatherInfo from "./WeatherInfo";
import LanguagesSelect from "./LanguagesSelect";

const HeaderStyle = styled.div`
    margin: 0;
    color: #050E3D;
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: column;
    /* background: linear-gradient(180deg, 
    rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 65%, rgba(255, 255, 255, 0.7) 75%,  rgba(255, 255, 255, 0.6) 80%, rgba(255, 255, 255, 0.5) 85%, rgba(255, 255, 255, 0.3) 90%, rgba(255, 255, 255, 0.1) 95%, rgba(255, 255, 255, 0) 100%); */
    background: linear-gradient(
  180deg,
  rgba(255, 255, 255, 1) 0%,
  rgba(255, 255, 255, 0.9) 50%,
  rgba(255, 255, 255, 0.6) 70%,
  rgba(255, 255, 255, 0.3) 80%,
  rgba(255, 255, 255, 0) 100%
);

`; 
const FirstLayer = styled.div`
    margin-bottom: 0.6rem;
    display: flex;
    align-items: center;
    float: right;
    margin-left: 80rem;
    width: 15vw;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    .icons{
        float: right;
        margin-right: 2rem;
    }
    .logo {
        float: left;
        margin-left: 1rem;
    }

`;







const Header = () => {
    return(
        <HeaderStyle>
            <FirstLayer>
                <WeatherInfo/>
                <LanguagesSelect/>
            </FirstLayer>
        <LogoContainer>
            <div className="logo"><Logo/></div>
            <div className="icons"><Icons/></div>
        </LogoContainer>
        </HeaderStyle>
    );
}

export default Header;