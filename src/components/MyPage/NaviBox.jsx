import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: calc(100%-1rem);
  height: 12%;
  text-align: right;
  background-color: red;
  flex-direction: row;
  padding-right: 3rem;
  .icon{
    display: inline-block;
    font-size: .6rem;
    padding: .6rem .6rem;
    cursor: pointer;
    color: #999;
    margin-top: .4rem ;
  }
`;


const NaviBox = () => {
    return (
        <Container>
                <div className='icon'> 마이페이지 </div>
                <div className='icon'> 다이어리</div>
                <div className='icon'> 내 게시물</div>
                <div className='icon'> 예약관리</div>
                <div className='icon'> 내 정보 수정</div>
        </Container>
    );
};

export default NaviBox;