import React, { useState } from "react";
import styled from "styled-components";
import BGItmes from "../components/Login/BGItmes";
import LoginModal from "../components/Login/loginModal";
import SignUpModal from "../components/Login/SignUpModal";
import ForgotPwModal from "../components/Login/ForgotPwModal";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
`;
const BlackBG = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: .4;
`;

const Login = () => {
    // showLogin이 1, 2, 3으로 변할 때 각자 modal창 보여줌
    const [showLogin, setShowLogin] = useState(0);
    
    const handleLoginModal0 = () => { // 로그인 창 + 뒤로가기
        setShowLogin(0);
        // console.log(showLogin)
      };
    const handleLoginModal1 = () => { // 비밀번호 찾기 창
        setShowLogin(1);
        // console.log(showLogin)
      };
    const handleLoginModal2 = () => { // 회원가입 창
        setShowLogin(2);
        // console.log(showLogin)
      };

    return(
        <>
            <Container>
                <BGItmes/>
                {/* <BlackBG/> */}
            </Container>
            {
                showLogin === 0 && <LoginModal showPw={ handleLoginModal1} showSignUp={handleLoginModal2} />
            }
            {
                showLogin === 1 && <ForgotPwModal showLogin={handleLoginModal0}/>
            }
            {
                showLogin === 2 && <SignUpModal showLogin={handleLoginModal0}/>
            }
        </>
    )
}

export default Login;