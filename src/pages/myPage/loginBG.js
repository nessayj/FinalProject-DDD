import React from "react";
import styled from "styled-components";
import BGItmes from "./BGItmes";
import LoginModal from "./loginModal";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
`;
const BlackBG = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: .4;
`;

const LoginBG = () => {
    return(
        <>
            <Container>
                <BGItmes/>
                <BlackBG/>
            </Container>
            <LoginModal/>
        </>
    )
}

export default LoginBG;