import React from 'react';
import styled from 'styled-components';
import { member_info, diaryImage } from './Data.jsx';
import Diary from "./Diary";
import { BsInstagram } from 'react-icons/bs';


const Container = styled.div`
  /* background-color  : beige; */
  width: 100%;
  height: 100%;
  .text{
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: bold;
    display: inline-block;
    cursor: pointer;
  }
`;
const SocialBox = styled.div`
  width: calc(100%-1rem);
  height: 12%;
  text-align: right;
  /* background-color: red; */
  flex-direction: row;
  padding-right: 1rem;
  .icon{
    display: inline-block;
    font-size: 2rem;
    padding: .5rem .7rem;
    cursor: pointer;
  }
`;
const TextBox = styled.div`
    width: 100%;
    height: 20%;
    /* background-color: aqua; */
    display: flex;
    flex-direction: column;
    .nickName{
        margin : .5rem 0 0 2rem ;
        font-size: 1rem;
        font-weight: bold;
    }
    .desc{
        margin : 1rem 0 0 2rem ;
        font-size: .9rem;
    }
    &:last-child { 	
        border-bottom-right-radius: 2rem;
        border-bottom-left-radius: 2rem;
    }

`;

const Introduce = () => {
    return (
        <Container>
          <SocialBox> 
            <div className='icon'> <BsInstagram/></div>
            <div className='icon'> <BsInstagram/></div>
            <div className='icon'> <BsInstagram/></div>
          </SocialBox>
          <TextBox>
            <div className='nickName'> {member_info.nickName} </div>
            <div className='desc'> {member_info.introuduce} </div>
          </TextBox>
          <Diary/>
            <span className='text' onClick={()=>{console.log('hi')}}>채팅</span> <br/>
            <span className='text' onClick={()=>{console.log('hi')}}>내 정보 수정</span>
        </Container>
        
    );
};

export default Introduce;