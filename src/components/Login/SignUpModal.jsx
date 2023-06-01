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
    width: 40vw;
    min-width: 350px;
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
            margin-top: 3rem;
            text-align: center;
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
const LeftBox = styled.div`
    width: 50%;
    height: 100%;
    background-color: aqua;
`;
const RightBox = styled.div`
    width: 50%;
    height: 100%;
    background-color: red;
`;
const True = styled.div`
    width: 3rem;
    height: 3rem;
    border: 1.5rem;
    background-color: #2B5EC2;
`;

const SignUpModal = () => {

    return(
        <Container>
            <Modal>
                <p className="title">회원가입! </p>
                <div className="wrap">
                    <LeftBox>

                    </LeftBox>
                    <RightBox>
                        
                    </RightBox>
                </div>


            </Modal>
        </Container>
    )
}

export default SignUpModal;