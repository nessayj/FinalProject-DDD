import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Icons from "./icons";
import styled from "styled-components";
import Navigator from "./Navigate";

const HeaderStyle = styled.div`
    margin: 0 auto;
    color: #050E3D;
    width: 100%;

`

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