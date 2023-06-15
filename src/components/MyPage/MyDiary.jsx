import React from 'react';
import styled from 'styled-components';
import MyDiaryModal from './MyDiaryModal';

const Container = styled.div`
  /* background-color  : beige; */
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
    .count{
        /* background-color: red; */
        font-weight: bold;
        align-items: center;
        display: flex;
        font-size: 3rem;
    }
    .desc {
        /* background-color: blue; */
        margin: 1.0rem;
    }
`;

const MyDiary = () => {
    return (
        <Container>
            <MyDiaryModal/>

            
        </Container>
    );
};

export default MyDiary;