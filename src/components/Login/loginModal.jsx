import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LoginApi from "../../api/LoginApi";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    /* background-color: aqua; */
    

`;
const Modal = styled.div`
    width: 20vw;
    min-width: 400px;
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
        .title{
            font-size: 1.5rem;
            font-weight: bold;
            margin-top: 5rem;
            text-align: center;
            p{
                margin : 0;
            }
        }
        .inputBlock{
            width: 90%;
            /* background-color: aqua; */
            p{
                text-align: left;
                margin-left: 10%;
                margin-bottom: .3rem;
                font-size: .8rem;
                /* font-size: .8rem; */
                font-weight: bold;
            }
            input{
                width: calc(80% - 0.8rem);
                height: 30px;
                background-color: #F4F8FF;
                border: 1px solid #5EADF7;
                margin: 0 0 0 2rem;
                border-radius: .3rem;
                padding-left: .8rem;


            }

            input:focus{
                background-color: #5EADF7;
                outline: none;
                color: white;
                ::placeholder{
                color: #F4F8FF;
                }
            }


        }
        .btnBlock{
            height: 6rem;
            width: 90%;
            display: flex;
            justify-content: center;
            align-items: center;
            /* background-color: red; */

            button{
                width: 35%;
                height: 2.3rem;
                border-radius: 3rem;
                margin : 0 6px;
                background-color: #050E3D ;
                border: 1px solid #F4F8FF;
                color: white;
                font-size: .8rem;
                cursor: pointer;
                /* float : right; */
                display: flex;
                justify-content:center;
                align-items: center;
                div{
                    background-color: #6F4F28;
                    width: 10px;
                    height: 10px;
                    border-radius: 5px;
                    margin-right: 3px;
                }

            }
        }
        .loginMsg{
            width: 70%;
            height: 2rem;
            /* background-color: red; */
            font-size: .6rem;
            padding-top: .4rem;
        }
        .AskBlock{
            width: 70%;
            height: 4rem;
            /* background-color: aqua; */
            display: flex;
            justify-content: space-between;
            align-items: end;
            p{
                margin-bottom: .3rem;
                font-size: .75rem;
                text-decoration: underline;
                cursor: pointer;
            }
        }
`;



const LoginModal = (props) => {
    const naviagte = useNavigate('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const onChangeloginId = (e) => {
        setEmail(e.target.value);
    }

    const onChangeloginPwd = (e) => {
        setPassword(e.target.value);
    }

    const getErrorMessage = (status) => {
        if (status === 401) {
          return "가입하지 않은 이메일이거나, 잘못된 비밀번호입니다.";
        } else {
          return "오류가 발생했습니다. 다시 시도해주세요.";
        }
      };

const onClickLogin = () => {
  const loginFetchDate = async () => {
    console.log('클릭됨');
    try {
      const response = await LoginApi.login(email, password);
      console.log('리스폰 데이터' + response);
      if (response.status === 200) {
        naviagte('/')
        console.log('로그인되었습니다.');
      } else {
        const errorMessage = getErrorMessage(response.status);
        setErrorMsg(errorMessage);
      }
    } catch (e) {
      console.log(e);
      // 일반적으로, 네트워크 요청에 실패했을 때 HTTP 상태 코드는 사용할 수 없습니다.
      // 이 경우에는 일반적인 에러 메시지를 설정합니다.
      setErrorMsg('가입하지 않은 이메일이거나, 잘못된 비밀번호입니다.');
    }
  };
  loginFetchDate();
};
   



    return(
        <Container>
            <Modal>
                <div className="title"> <p>안녕하세요!</p> <p style={{marginTop:'1rem'}}>:DDD에 로그인해보세요</p></div>
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
                        placeholder="Password"
                    />
                </div>
                <div className="loginMsg">
                    {errorMsg}
                </div>
                <div className="btnBlock">
                    <button onClick={onClickLogin}>로그인</button>
                    <button style={{backgroundColor:'#F9E000', color:'#6F4F28'}}><div></div>카카오로그인</button>
                </div>
                <div className="AskBlock">
                    <p onClick={props.showAgree}>:DDD가 처음이신가요?</p>
                    <p onClick={props.showPw}>비밀번호를 잊어버리셨나요?</p>
                </div>
            </Modal>
        </Container>
    )
}

export default LoginModal;