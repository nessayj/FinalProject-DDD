import React from 'react';
import styled from 'styled-components';
import { member_info, diaryImage } from './Data.jsx';
import Diary from "./Diary";
import Thumnail from './Thumnail.jsx';
import { SlSocialInstagram, SlPaperPlane, SlUserFollow } from 'react-icons/sl';



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
  hr{
    width: 90%;
    border: 1px solid #eee;
    margin: 0% 5%;

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
    font-size: 1.1rem;
    padding: .6rem .6rem;
    cursor: pointer;
    color: #999;
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

const Introduce = (props) => {
    return (
        <>
            <Thumnail/>
            <Container>
            <SocialBox> 
                <div className='icon'> <SlPaperPlane /> </div>
                <div className='icon'> <SlSocialInstagram /></div>
                <div className='icon'> <SlUserFollow /></div>
            </SocialBox>

            <TextBox>
                <div className='nickName'> {member_info.nickName} </div>
                <div className='desc'> {member_info.introuduce} </div>
            </TextBox>

            <hr/>
            <Diary/>
            <hr/>
                <span className='text' onClick={()=>{props.setShowPage(0)}}>채팅</span> <br/>
                <hr/>
                <span className='text' onClick={()=>{props.setShowPage('내정보수정')}}>내 정보 수정</span>
            </Container>
        </>
    );
};

export default Introduce;