import React from "react";
import Logo from "../../components/Header/Logo";
import SearchBar from "../../components/Header/SearchBar";
import Icons from "../../components/Header/icons";
import styled from "styled-components";

const BottomBox = styled.div`
    display: flex;
    float: right;
    align-items: center;
`;



const Header = () => {
    return(
        <>
        <div>
            <Logo/>
        </div>
        <BottomBox>
            <SearchBar/>
            <Icons/>
        </BottomBox>
        </>
    );
}

export default Header;