import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: calc(100%-1rem);
  height: 12%;
  text-align: right;
  /* background-color: red; */
  flex-direction: row;
  padding-right: 3rem;

  .icon {
  display: inline-block;
  font-size: .6rem;
  position: relative;
  cursor: pointer;
  color: #222;
  margin: 1rem .4rem;
}

.icon::before,
.icon::after {
  content: "";
  position: absolute;
  bottom: -40%;
  width: 0;
  height: 1px;
  background-color: #5EADF7;
  transition: width 0.3s ease;
}

.icon::before {
  left: 50%;
  transform: translateX(-50%);
}

.icon::after {
  right: 50%;
  transform: translateX(50%);
}

.icon:hover::before,
.icon:hover::after {
  width: 100%;
}



`;


const NaviBox = (props) => {
    return (
        <Container>
                <div className='icon' onClick={()=>{props.setShowPage('마이페이지')}}> 마이페이지 </div>
                <div className='icon' onClick={()=>{props.setShowPage('다이어리')}}> 다이어리</div>
                <div className='icon' onClick={()=>{props.setShowPage('예약관리')}}> 예약관리</div>
                <div className='icon' onClick={()=>{props.setShowPage('내게시물')}}> 내 게시물</div>
                <div className='icon' onClick={()=>{props.setShowPage('내정보수정')}}> 내 정보 수정</div>
        </Container>
    );
};

export default NaviBox;