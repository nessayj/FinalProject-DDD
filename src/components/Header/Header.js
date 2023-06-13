import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Icons from "./IconsBox";
import styled from "styled-components";
import Navigator from "./Navigate";
import WeatherInfo from "./WeatherInfo";

const HeaderStyle = styled.div`
    margin: 0 auto;
    color: #050E3D;
    width: 100%;
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: space-between;

`;

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const BottomBox = styled.div`
    display: flex;
    float: right;
    align-items: center;
    margin-right: 1rem;
`;



const Header = () => {
    return(
        <HeaderStyle>
        <LogoContainer>
            <Logo/>
            <WeatherInfo/>
        </LogoContainer>
        <NavContainer>
        <Navigator/>
        <BottomBox>
            <SearchBar/>
            <Icons/>
        </BottomBox>
        </NavContainer>
        </HeaderStyle>
    );
}

export default Header;