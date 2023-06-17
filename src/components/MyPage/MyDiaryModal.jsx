import React, { useState } from 'react';
import styled from 'styled-components';
import exhibitionData from '../exhibition/exhibitionData';
import { commentAboutCount } from './Data'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { SlPencil, SlCloudUpload } from "react-icons/sl";
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import InfiniteScroll from 'react-infinite-scroll-component';

// ====== data 확인하기 =====
const Wrap = styled.div`
    width: 100%;
    height: auto;
    /* background-color: red; */
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`
;


const CardItem = styled.div`
  /* background-color: aqua; */
  width: calc( 100% - 2.5rem);
  min-width: 550px;
  height: 12rem;
  background-color: white;
  border-radius: 1rem;
  border: 1px solid #eee;
  box-shadow: 2px 2px 10px -5px #ccc;
  margin: 1rem;
  display: flex;
  flex-direction: row;
  
  .exhibitionImage {
    /* background-color: red; */
    width: 24%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 80%;
        min-width: 100px;
        height: 85%;
        object-fit: cover;
        object-position: top;
        border: 1px solid #bbb;

    }
  }

  .exhibitionDesc {
    /* background-color: blue; */
    width: 30%;
    min-width: 200px;
    height: 100%;
    flex-shrink: 1;
    display: flex;
    padding-left: 1rem;
    flex-direction: column;
    justify-content: center;
        .title{
            font-weight: bold;
            font-size: 1rem;
            margin-top: 0rem;
        }
        .date{
            font-size: .8rem;
            margin: 1rem 0;

        }
        .rateStar{
            padding: 1rem 0;

        }
  }

  .comment {
    /* background-color: brown; */
    width: 50%;
    min-width: 200px;

    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .textBox{
        /* background-color: orange; */
        width: 80%;
        height: 70%;
        border-radius: 1rem;
        padding: 1rem;
        font-size: .8rem;
        resize: none;
        border: 1px solid #eee;
        outline: none;
        margin: auto 0;

    }
    .writeBox{
        /* background-color: aliceblue; */
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
        height: 2rem;

        
    }
  }
`;


const MyDiaryModal = () => {
    const countDiary = exhibitionData.length;
    const countCheck = () => {
      for (let key in commentAboutCount) {
        if (countDiary < key) {
          return commentAboutCount[key];
        }
      }
    };
  
    const comment = countCheck();


    const [writeState, setWriteState] = useState(Array(exhibitionData.length).fill(true));

    const handleWriteState = (index) => {
    setWriteState((prevWriteState) => {
        const newWriteState = [...prevWriteState];
        newWriteState[index] = !newWriteState[index];
        return newWriteState;
    });
    };
    
    return (
      <Wrap>
        <div className='count'>{countDiary}</div>
        <div className='desc'>{comment}</div>

        <InfiniteScroll
        dataLength={exhibitionData.length}
        // next={exhibitionData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        style={{width:'100%', minWidth:'600px', margin:'0'}}
      >
             
            {
            exhibitionData.map((ticket, index) => (
                <CardItem key={index}>
                    <div className='exhibitionImage'>
                        <img src={ticket.imgUrl} alt='exhibition'/>
                    </div>
                    <div className='exhibitionDesc'>
                        <div className='title'>{ticket.name}</div>   
                        <div className='date'>{ticket.startDate}</div>   
                        <Stack spacing={1} className='rateStar'>
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                        </Stack>
                    </div>
                    <div className="comment">
                        <textarea className='textBox' name="" id="" cols="20" rows="8" readOnly={writeState[index]} />

                        <Tooltip title={writeState[index] ? "글쓰기" : "저장"} arrow className="writeBox">
                        <Button className="buttnBox" onClick={() => handleWriteState(index)}>
                            {writeState[index] ? <SlPencil className='writeBtn' /> : <SlCloudUpload className='writeBtn' />}
                        </Button>
                        </Tooltip>
                    </div>

                </CardItem>
                ))
            }
      </InfiniteScroll>

       
      </Wrap>
    );
  };
  
  export default MyDiaryModal;
