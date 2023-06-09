import React from "react";
import styled from "styled-components";
import Thumnail from "./Thumnail";
import Introduce from "./Introduce";
import EditMemberInfo from "./EditMemberMain";

const Container = styled.div`
    box-sizing: border-box;
    overflow-x: hidden;
    position: absolute;
    top: 10%;
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
    top: 20%;
    left: 50%;
    transform: translate3d(-50%, -20%, 0);
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    border: .5px solid #bbb;
`;
    

const MyPage = () => {
    return(
        <Container>
            <Modal>
                <Introduce/>
                {/* <EditMemberInfo/> */}
                

            </Modal>
        </Container>
    )
}

export default MyPage;