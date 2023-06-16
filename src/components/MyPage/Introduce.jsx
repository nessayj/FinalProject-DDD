import React from 'react';
import styled from 'styled-components';
import { member_info, diaryImage } from './Data.jsx';
import Diary from "./Diary";
import Thumnail from './Thumnail.jsx';
import NaviBox from './NaviBox.jsx';



const Container = styled.div`
  /* background-color  : beige; */
  width: 100%;
  height: 100%;
  .text{
    padding: 1.2rem 2.5rem;
    font-size: 1rem;
    font-weight: bold;
    display: inline-block;
    cursor: pointer;
  }
  hr{
    width: 90%;
    border: 1px solid #eee;
    margin: 0% 5%;

  }
`;



const TextBox = styled.div`
    width: 100%;
    height: 16%;
    /* background-color: aqua; */
    display: flex;
    flex-direction: column;
    .nickName{
        margin : .5rem 0 0 2.5rem ;
        font-size: 1rem;
        font-weight: bold;
    }
    .desc{
        margin : 1rem 0 0 2.5rem ;
        font-size: .9rem;
        /* background-color: red; */
    }
    &:last-child { 	
        border-bottom-right-radius: 2rem;
        border-bottom-left-radius: 2rem;
    }

`;

const Introduce = (props) => {
    return (
        <>

            <Container>


            <TextBox>
                <div className='nickName'> {member_info.nickName} </div>
                <div className='desc'> {member_info.introuduce} </div>
            </TextBox>

            <hr/>
            <Diary setShowPage={props.setShowPage} />
            <hr/>
            <span className='text' onClick={()=>{props.setShowPage('예약관리')}}>예약 관리</span> <br/>

            <hr/>
            <span className='text' onClick={()=>{props.setShowPage('내게시물')}}>내 게시물</span> <br/>
            
            {/* <hr/>
            <span className='text' onClick={()=>{props.setShowPage('내게시물')}}>채팅</span> <br/> */}

            <hr/>
            <span className='text' onClick={()=>{props.setShowPage('내정보수정')}}>내 정보 수정</span>


            </Container>
        </>
    );
};

export default Introduce;