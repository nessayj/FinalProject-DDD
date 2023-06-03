import React from "react";  
import styled from "styled-components";


const Container = styled.div`
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    /* background-color: aqua; */
    

`;
const Modal = styled.div`
    width: 24vw;
    min-width: 350px;
    height: 60vh;
    background-color: white;
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translate3d(-50%, -50%, 0);
    border-radius: 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
        .title{
            font-size: 1.5rem;
            font-weight: bold;
            margin-top: 3rem;

        }
        .inputBlock{
            width: 90%;
            /* background-color: aqua; */
            justify-content: center;
            align-items: center;
            display: flex;
            flex-direction: column;
            p{
                text-align: left;
                margin-bottom: 1.3rem;
                font-size: .8rem;
                /* font-size: .8rem; */
                text-align: center;
            }
            input{
                width: calc(80% - 0.8rem);
                height: 30px;
                background-color: #F4F8FF;
                border: 1px solid #5EADF7;
                /* margin: 0; */
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
            height: 13rem;
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
`;

const ForgotPwModal = () => {

    return(
        <Container>
            <Modal>
                <p className="title">비밀번호 찾기</p>
                <div className="inputBlock">
                    <p>가입 시, 사용했던 이메일을 입력해주세요</p>
                    <input type="text" placeholder="Email@:DDD.com"/> 
                </div>
                <div className="btnBlock">
                    <button>이메일 보내기</button>
                    <button>돌아가기</button>
                </div>
            </Modal>
        </Container>
    )
}

export default ForgotPwModal;