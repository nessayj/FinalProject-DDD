import React from "react";
import styled from "styled-components";
import BGItmes from "../../components/Login/BGItmes";
import LoginModal from "../../components/Login/loginModal";
import SignUpModal from "../../components/Login/SignUpModal";

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
            {/* <LoginModal/> */}
            <SignUpModal/>
        </>
    )
}

export default LoginBG;