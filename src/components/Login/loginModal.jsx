import React, { useState } from "react";
import styled from "styled-components";
import LoginApi from "../../api/LoginApi";
import { useNavigate } from "react-router-dom";
import useStore from "../../store";
import { MyPageApi } from "../../api/MyPageApi";
import Functions from "../../util/Functions";

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  justify-content: center;
  /* background-color: aqua; */
  p{
    margin: 0;
    padding: 0;
  }

`;
const Modal = styled.div`
  width: 26%;
  /* min-width: 400px; */
  height: 50vh;
  min-height: 500px;
  background-color: white;
  position: absolute;
  top: 50%;
  right: 5%;
  border: 1px solid #999;
  transform: translate3d(-50%, -50%, 0);
  border-radius: 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1440px) {
    width: 30%;
      }
  @media (max-width: 1024px) {
    position: relative;
    width: 50%;
    top: 50%;
    right: -50%;
    transform: translate3d(-50%, -50%, 0);
      } 
  @media (max-width: 720px) {
    width: 80%;
    position: relative;
    transform: translate3d(-50%, -50%, 0);
      }
  .title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 4rem;
    text-align: center;

  }
  .inputBlock {
    width: 90%;
    /* background-color: aqua; */
    p {
      text-align: left;
      margin-left: 10%;
      margin-bottom: 0.3rem;
      margin-top: 1rem;
      font-size: 0.8rem;
      /* font-size: .8rem; */
      font-weight: bold;
    }
    input {
      width: calc(80% - 0.8rem);
      height: 30px;
      background-color: #f4f8ff;
      border: 1px solid #5eadf7;
      margin: 0 0 0 2rem;
      border-radius: 0.3rem;
      padding-left: 0.8rem;
    }

    input:focus {
      background-color: #5eadf7;
      outline: none;
      color: white;
      ::placeholder {
        color: #f4f8ff;
      }
    }
  }
  .btnBlock {
    height: 6rem;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: red; */

    button {
      width: 35%;
      height: 2.3rem;
      border-radius: 3rem;
      margin: 0 6px;
      background-color: #050e3d;
      border: 1px solid #f4f8ff;
      color: white;
      font-size: 0.8rem;
      cursor: pointer;
      /* float : right; */
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        background-color: #6f4f28;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        margin-right: 3px;
      }
    }
  }
  .loginMsg {
    width: 70%;
    height: 2rem;
    /* background-color: red; */
    font-size: 0.6rem;
    padding-top: 0.4rem;
    color: red;
     
  }
  .AskBlock {
    width: 100%;
    height: 4rem;
    /* background-color: aqua; */
    display: flex;
    justify-content: center;
    align-items: end;
    p {
      margin-bottom: 0.3rem;
      font-size: 0.75rem;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const LoginModal = (props) => {
  const { profileImg, setProfileImg, setMemberData } = useStore();

  const naviagte = useNavigate("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onChangeloginId = (e) => {
    setEmail(e.target.value);
  };

  const onChangeloginPwd = (e) => {
    setPassword(e.target.value);
  };
  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickLogin();
    }
  };

  const loginFetchDate = async () => {
    console.log("클릭됨");
    try {
        const response = await LoginApi.login(email, password);
        const accessToken = response.data.accessToken;
        const refreshToken = response.data.refreshToken;
        const memberId = response.data.memberId;

        const memberInfoResponse = await MyPageApi.info(memberId);
        setProfileImg(memberInfoResponse.data.profileImg)
        setMemberData(memberInfoResponse.data)
        
        // localStorage에 email, token 저장
        window.localStorage.setItem("storageEmail", email);
        window.localStorage.setItem("memberId", memberId);
        window.localStorage.setItem("accessToken", accessToken);
        window.localStorage.setItem("refreshToken", refreshToken);
        const getEmail = window.localStorage.getItem("storageEmail")

        // window.localStorage.getItem('storageEmail')

        if (response.status === 200 && setMemberData) {
          if(getEmail === 'admin'){
            console.log('admin 입니다. ')
            naviagte("/admin")
          } else if(getEmail !== 'admin'){
            naviagte("/");
            // 로그인 시, isLogin true 반환
            window.localStorage.setItem("isLogin", true);
   
            } else {
                const errorMessage = getErrorMessage(response.status);
                setErrorMsg(errorMessage);
            }
          }
    } catch (e) {
      console.log(e);
      setErrorMsg("가입하지 않은 이메일이거나, 잘못된 비밀번호입니다.");
    }
  };
  const getErrorMessage = (status) => {
    if (status === 401) {
      return "가입하지 않은 이메일이거나, 잘못된 비밀번호입니다.";
    } else {
      return "오류가 발생했습니다. 다시 시도해주세요.";
    }
  };

  const onClickLogin = () => {
    loginFetchDate();
  };

  return (
    <Container>
      <Modal>
        <div className="title">
          안녕하세요!<br/>
          <span style={{lineHeight:'2.5rem'}}>:DDD에 로그인해보세요</span>
        </div>
        <div className="inputBlock">
          <p>이메일</p>
          <input
            type="text"
            value={email}
            onChange={onChangeloginId}
            placeholder="Email@:DDD.com"
          />
          <p>패스워드</p>
          <input
            type="password"
            value={password}
            onChange={onChangeloginPwd}
            onKeyDown={handleOnKeyPress}
            placeholder="Password"
          />
        </div>
        <div className="loginMsg">{errorMsg}</div>
        <div className="btnBlock">
          <button onClick={onClickLogin}>로그인</button>
          <button onClick={props.showAgree}>회원가입</button>
          {/* <button style={{ backgroundColor: "#F9E000", color: "#6F4F28" }} >
            <div></div>카카오로그인
          </button> */}
        </div>
        <div className="AskBlock">
          <div onClick={props.showPw}> <p>비밀번호를 잊어버리셨나요?</p> </div>
        </div>
      </Modal>
    </Container>
  );
};

export default LoginModal;