import React, { useState } from "react";
import styled from "styled-components";
import Thumnail from "./Thumnail";
import Introduce from "./Introduce";
import EditMemberMain from "./EditMemberMain";
import MyPost from "./MyPost";
import NaviBox from "./NaviBox";
import SNSBox from "./SNSBox";
import MyReservation from "./MyReservation";
import MyDiary from "./MyDiary";

const Container = styled.div`
    box-sizing: border-box;
    /* overflow-x: hidden; */
    /* position: absolute;
    top: 20%; 
    width: 100vw;
    height: 100vh; */
    /* background-color: aqua; */
    position: relative;
    top: 0%; 
    height: auto;
    justify-content: center;
    display: flex;
`;
const Modal = styled.div`
    width: 55vw;
    min-width: 600px;
    //max-width: 768px;
    /* height: 70vh; */
    height: auto;
    min-height: 1024px;
    background-color: white;
    /* position: relative;
    top: 0%; 
    left: 50%;
    transform: translate3d(-50%, -20%, 0); */
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    border: .5px solid #bbb;
    margin-bottom: 10vh;
`;
    
const MyPageBG = (props) => {
    const [showPage, setShowPage] = useState('마이페이지')
    return(
        <>
        <Container style={showPage === '다이어리' || showPage === '예약관리' ? { height: 'auto' } : null}>
            <Modal>
                {
                    showPage === '마이페이지' &&
                    <>
                        <Thumnail/>
                        <SNSBox /> 
                        <Introduce  
                            showPage = {showPage}
                            setShowPage = {setShowPage}
                        />
                    </>

                }
                {
                    showPage === '다이어리' &&
                    <>
                        <Thumnail/>
                        <NaviBox setShowPage = {setShowPage} showPage = {showPage}/> 
                        <MyDiary                      
                            showPage = {showPage}
                            setShowPage = {setShowPage}
                        />
                    </>
                }               
                {
                    showPage === '예약관리' && 
                    <>
                        <Thumnail/>
                        <NaviBox setShowPage = {setShowPage} showPage = {showPage}/> 
                        <MyReservation                      
                            showPage = {showPage}
                            setShowPage = {setShowPage}
                        />
                    </>

                }
                {
                    showPage === '내게시물' &&
                    <>
                        <Thumnail/>
                        <NaviBox setShowPage = {setShowPage} showPage = {showPage}/> 
                        <MyPost                      
                            showPage = {showPage}
                            setShowPage = {setShowPage}
                        />
                    </>
                }
                                {
                    showPage === '내정보수정' && 
                    <>
                    <Thumnail/>
                    <NaviBox setShowPage = {setShowPage} showPage = {showPage}/> 
                    <EditMemberMain                      
                        showPage = {showPage}
                        setShowPage = {setShowPage}
                    />
                    </>

                }
                
            </Modal>
        </Container>
        
        </>

    )
}

export default MyPageBG;