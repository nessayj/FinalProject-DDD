import React from "react";
import Logo from "../../components/Header/Logo";
import SearchBar from "../../components/Header/SearchBar";
import Icons from "../../components/Header/icons";
import styled from "styled-components";
import Navigator from "../../components/Header/Navigate";

const HeaderStyle = styled.div`
    color: #050E3D;
    width: 100%;
    border: 1px black solid;

`

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0;
    border: 1px black solid;

`;

const BottomBox = styled.div`
    display: flex;
    float: right;
    align-items: center;
`;



const Header = () => {
    return(
        <HeaderStyle>
        <div>
            <Logo/>
        </div>
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