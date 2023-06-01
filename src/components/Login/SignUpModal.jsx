import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    /* background-color: aqua; */
    

`;
const Modal = styled.div`
    width: 40vw;
    min-width: 600px;
    height: 70vh;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    border-radius: 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
        .title{
            font-size: 1.5rem;
            font-weight: bold;
            text-align: center;
            margin :3rem 0 0.2rem 0 ;
        }
        .wrap{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
        }

        .inputBlock{
            width: 90%;
            /* background-color: aqua; */
            padding-left: 2vw;
            p{
                text-align: left;
                /* margin-left: 10%; */
                margin-bottom: .3rem;
                font-size: .8rem;
                /* font-size: .8rem; */
                font-weight: bold;
            }
            input{
                width: calc(70% - 0.8rem);
                background-color: #F4F8FF;
                /* border: 1px solid #5EADF7; */
                border: none;
                /* margin: 0; */
                padding-left: 0.8rem;
                border-top-left-radius : .3rem;
                border-bottom-left-radius : .3rem;
            }
            input:focus{
                /* background-color: #5EADF7; */
                outline: none;
                /* color: white; */
                ::placeholder{
                color: #F4F8FF;
                }
            }
            .regCheckBox{
                /* background-color: red; */
                width: 10%;
                height: 100%;
                margin: 0, 1px;
                justify-content: center;
                align-items: center;
                display: flex;
            }
            .test{
                display: flex;
                height: 2rem;
                background-color: #F4F8FF;
                width: 80%;
                justify-content: space-around;


            }


        }
        .btnBlock{
            height: 30%;
            width: 90%;
            display: flex;
            justify-content: center;
            /* background-color: red; */

            button{
                width: 22%;
                height: 2.3rem;
                border-radius: 3rem;
                margin : 0 1rem;
                background-color: #050E3D ;
                border: 1px solid #F4F8FF;
                color: white;
                font-size: .8rem;
                cursor: pointer;
                /* float : right; */
                display: flex;
                justify-content:center;
                align-items: center;

            }
        }
`;
const LeftBox = styled.div`
    width: 50%;
    height: calc(50%-2rem);
    /* background-color: aqua; */
    padding-top: 2rem;
    min-width: 300px;
`;
const RightBox = styled.div`
    width: 50%;
    height: calc(80%-2rem);
    /* background-color: red; */
    padding-top: 2rem;
    min-width: 300px;

`;
const True = styled.div`
    width: 1.3rem;
    height: 1.3rem;
    border-radius: .8rem;
    background-color: #2B5EC2;
    display: flex;
    justify-content: center;
    align-items : center;
    color : white;
`;
const False = styled(True)`
    background-color: #ED4E4E;
`;

const SignUpModal = () => {
    const [inputEmail, setInputEmail] = useState('')
    const [emailMessage,  setEmailMessage] = useState('')
    const [isEmail, setIsEmail] =useState(false)


    const onChangeEmail = (e) => {
        setInputEmail(e.target.value)
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailCheck = regexEmail.test(inputEmail)
        console.log(inputEmail)
        console.log(emailCheck)

        if (!emailCheck) {
            setEmailMessage("5자리 이상 12자리 미만으로 입력해 주세요.");
            setIsEmail(false);    
        } else {
            setEmailMessage("올바른 형식 입니다.");
            setIsEmail(true);
        }
    }
    return(
        <Container>
            <Modal>
                <p className="title">회원가입</p>
                <div className="wrap">
                    <LeftBox>
                        <div className="inputBlock">
                            <p>이메일</p>
                            <div className="test">
                                <input type="text" placeholder="Email@:DDD.com" value={inputEmail} onChange={onChangeEmail}/>
                                <div className="regCheckBox">{isEmail ? <True> &#10003; </True> : <False>&times;</False>}</div> 
                            </div>

                            {/* <p>패스워드</p>
                            <input type="password" placeholder="Password"/>
                            <p>패스워드 확인</p>
                            <input type="password" placeholder="Password"/>
                            <p>닉네임</p>
                            <input type="text" placeholder="사용하실 닉네임을 입력해주세요"/>  */}
                        </div>

                    </LeftBox>
                    {/* <RightBox>
                        <div className="inputBlock">
                            <p>이름</p>
                            <input type="text" placeholder="이름을 입력해주세요"/> 
                            <p>연락처</p>
                            <input type="tel" placeholder="연락처를 입력해주세요"/> 
                            <p>instagram <span style={{fontWeight:'400'}}>(선택사항)</span> </p>
                            <input type="text" placeholder="instagram ID"/> 
                        </div>
                    </RightBox> */}
                </div>
                <div className="btnBlock">
                    <button>회원가입</button>
                    <button>돌아가기</button>
                </div>
            </Modal>
        </Container>
    )
}

export default SignUpModal;