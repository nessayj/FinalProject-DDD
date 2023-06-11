import React, { useState } from "react";
import styled from "styled-components";
import Thumnail from "./Thumnail";
import Introduce from "./Introduce";
import EditInfo from "./EditInfo";
import Header from "../../pages/main/Header";

const Container = styled.div`
    box-sizing: border-box;
    /* overflow-x: hidden; */
    position: absolute;
    top: 0%; 
    width: 100vw;
    height: 100vh;
    /* background-color: aqua; */
`;
const Modal = styled.div`
    width: 40vw;
    min-width: 600px;
    max-width: 768px;
    height: 70vh;
    min-height: 900px;
    background-color: white;
    position: absolute;
    top: 50%; // 헤더부분만큼 Top에서 내림
    left: 50%;
    transform: translate3d(-50%, -20%, 0);
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    border: .5px solid #bbb;
`;
    
// 화면 전환 시, 해당 컴포넌트가 마이페이지 메인이 됨. 
const MyPageBG = (props) => {
    const [showPage, setShowPage] = useState(0)
    return(
        <>
                <div className="header"><Header/></div>
        
        <Container>
            
            <Modal>
                {
                    showPage === 0 && 
                    < Introduce  
                        showPage = {showPage}
                        setShowPage = {setShowPage}
                    />

                }
                {
                    showPage === 1 && 
                    <EditInfo                      
                        showPage = {showPage}
                        setShowPage = {setShowPage}
                    />

                }
                
            </Modal>
        </Container>
        
        </>

    )
}

export default MyPageBG;