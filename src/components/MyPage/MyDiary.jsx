import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color  : beige;
  width: calc(100% - 2.5rem);
  height: 100%;
  padding-left: 2.5rem;
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
            
        </Container>
    );
};

export default MyDiary;