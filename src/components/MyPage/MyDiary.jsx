import React from 'react';
import styled from 'styled-components';
import MyDiaryModal from './MyDiaryModal';

const Container = styled.div`
  background-color  : beige;
  width: 100%;
  height: 100%;
  /* padding-left: 2.5rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
        text-align: left;
        margin: 0rem 0 .3rem 0;
        font-size: 1rem;
        font-weight: bold;
    }
    .title {
        /* background-color: red; */
        height: 5%;
        font-weight: bold;
    }
`;

const MyDiary = () => {
    return (
        <Container>
            <div className='title' >내 다이어리</div>
            <MyDiaryModal/>

            
        </Container>
    );
};

export default MyDiary;