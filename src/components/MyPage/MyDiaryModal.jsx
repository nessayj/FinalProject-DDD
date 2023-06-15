import React from 'react';
import styled from 'styled-components';
import exhibitionData from '../exhibition/exhibitionData';
import { commentAboutCount } from './Data'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


// ====== data 확인하기 =====
const Container = styled.div`
    width: 80%;
    /* height: 10rem; */
    height: 10rem;
    /* min-height: 220px; */
    /* background-color: aqua; */
    background-color: white;
    border: 1px solid #eee;
    border-radius: .4rem;
    align-items: center;
    display: flex;
    margin-bottom: .8rem;
    box-shadow: 0 3px 3px rgba(0,0,0,0.2);
    cursor: pointer;
    

    .showImage{
        display: flex;
        height: 80%;
        width: 10%;
        /* background-color: blue; */
        padding: auto;
        margin-left: 1.3rem;
        
    }
    .showImage img{
        width: 8rem;
        min-width: calc(60px * 1.4);
        min-height: calc(40px * 1.4);
        object-fit: cover;
        overflow-x: hidden;
        object-position: top;
        border-radius: 0.3rem;
    }
    .justfyTop{
        display: flex;
        /* background-color: aqua; */
        width: 100%;
        height: 76%;
        justify-content: end;
        
        .leftBox{
        display: flex;
        flex-direction: column;
        /* background-color: blue; */
        margin: 0 .2rem;
        width: 90%;

        .title{
            font-weight: bold;
            font-size: 1.1rem;
            line-height: 2.2rem;
        }
        .date{
            font-size: .9rem;
        }
        .rateStar{
            padding: 1rem 0;
        }

        }


    }   
`;

const MyDiaryModal = () => {

    // 다이어리에 본 전시회 만큼 commnet 데이터 값에서 찾아서 출력
    const countDiary = 60;
    // const countDiary = exhibitionData.length;
    const countCheck = () => {
      for (let key in commentAboutCount) {
        if (countDiary < key) {
          return commentAboutCount[key];
        }
      }
    };
    const comment = countCheck();
    
  
    return (
        <>
            <div className='count'> {countDiary} </div>
            <div className='desc' > {comment}</div>

                {
                    exhibitionData.slice(0, 5).map((ticket, index) => (
                        <Container key={index}>
                            <div className="showImage"><img src={ticket.imgUrl} /></div>
                            <div className='justfyTop'>
                                <div className='leftBox'>
                                    <div className='title'>{ticket.name}</div>
                                    <div className='date'>{ticket.startDate}</div>
                                    <Rating name="half-rating" defaultValue={0} precision={0.5} size="large" className='rateStar' />
                                </div>
                            </div>
                        </Container>
                    ))
                }


        </>
    );
};

export default MyDiaryModal;