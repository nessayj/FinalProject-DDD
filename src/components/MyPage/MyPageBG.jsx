import React, { useState } from "react";
import styled from "styled-components";
import Thumnail from "./Thumnail";
import Introduce from "./Introduce";
import EditInfo from "./EditInfo";
import Header from "../header/Header";
import EditMemberMain from "./EditMemberMain";

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
    height: 120vh;
    justify-content: center;
    display: flex;
`;
const Modal = styled.div`
    width: 40vw;
    min-width: 600px;
    max-width: 768px;
    height: 70vh;
    min-height: 900px;
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
`;
    
const MyPageBG = (props) => {
    const [showPage, setShowPage] = useState('마이페이지')
    return(
        <>
        <div className="header"><Header/></div>
        <Container>
            <Modal>
                {
                    showPage === '마이페이지' && // 마이페이지
                    <Introduce  
                        showPage = {showPage}
                        setShowPage = {setShowPage}
                    />

                }
                {
                    showPage === '내정보수정' && // 내 정보 수정
                    <EditMemberMain                      
                        showPage = {showPage}
                        setShowPage = {setShowPage}
                    />
                }
                {
                    // 다이어리
                }
                {
                    // 채팅
                }
                
            </Modal>
        </Container>
        
        </>

    )
}

export default MyPageBG;