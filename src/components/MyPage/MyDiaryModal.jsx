import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import exhibitionData from '../exhibition/exhibitionData';
import { commentAboutCount } from './Data'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { SlPencil, SlCloudUpload } from "react-icons/sl";
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import InfiniteScroll from 'react-infinite-scroll-component';
import { DiaryApi } from '../../api/MyPageApi';
import Functions from '../../util/Functions';
import { useStore } from 'zustand';

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
        margin-left: 20px;

    }
  }

  .exhibitionDesc {
    /* background-color: blue; */
    width: 30%;
    min-width: 140px;
    height: 100%;
    flex-shrink: 1;
    display: flex;
    padding: 0 1rem;
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

  .commentBox {
    /* background-color: brown; */
    width: 50%;
    min-width: 280px;
    height: 100%;
    display: flex;
    /* flex-direction: row; */
    /* justify-content: center; */
    /* align-items: center; */

    .textBox{
        background-color: #F2F2F2;
        width: 80%;
        height: 40%;
        border-radius: 1rem;
        padding: 1rem;
        font-size: .8rem;
        resize: none;
        border: 1px solid #eee;
        outline: none;
        margin: auto 0;
        border-bottom-right-radius: 0;
    }
    .textBox:focus{
            background-color: #F4F8FF;
        }
    .writeBox{
        /* background-color: aliceblue; */
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
        height: 2rem;
    }
    .test{
        /* background-color: red; */
        .icon{
            position: relative;
            top: 66%;
            left: -50%;
            /* background-color: blue; */
            width: 2.5rem;
            height: 2.5rem;
            background-size: cover;
            img{
                height: 100%;
                width: 100%;
                border-radius: 2rem;
            }
        }

    }

  }
`;


const MyDiaryModal = () => {
    const iconUrl = "https://mblogthumb-phinf.pstatic.net/MjAyMTA0MDJfMTcx/MDAxNjE3MzQ3NzMzOTUz.Kg3bldcTe5OAoi3I-vBycTDxifu54mD9r3p-j7BNgKgg.Qunwt7JDPPe2v5HCeIlR55TtLn1HtVDhflu3wgLdY5Mg.JPEG.se413496/FB%EF%BC%BFIMG%EF%BC%BF1601135114387.jpg?type=w800"

    const memberId = Functions.getMemberId();
    const [myDiaryData, setMyDiaryData] = useState([]);
    const [countDiary, setCountDiary] = useState();
    const [mention, setMention] = useState('');
    const [ratingStar, setRatingStar ] = useState();
    const [inputComment, setInputComment] = useState();


    const countCheck = () => {
      for (let key in commentAboutCount) {
        if (countDiary < key) {
          return commentAboutCount[key];
        }
      }
    };


    // useEffect(() => {
    //     const infoFetchDate = async () => {
    //       const response = await DiaryApi.info(memberId);
    //       const newMyDiaryData = response.data.map(item => ({
    //         ...item,
    //         rateStar: item.rateStar || ratingStar,
    //         comment: item.comment || inputComment,
    //       }));
    //       setMyDiaryData(newMyDiaryData);
    //       console.log(newMyDiaryData)
    //     };
    //     infoFetchDate();
    //   }, [memberId]);

    // console.log(myDiaryData)
    // useEffect(() => {
    //     const infoFetchDate = async () => {
    //         const response = await DiaryApi.info(memberId);
    //         const newMyDiaryData = response.data;

    //         setMyDiaryData(newMyDiaryData);
    //         console.log(newMyDiaryData)
    //         // setDiaryInfo(myDiaryData)
    //         setInputComment(response.data)


    //     };
    //     infoFetchDate();
    // }, [memberId]);
    console.log(myDiaryData)
    useEffect(() => {
        const infoFetchDate = async () => {
            const response = await DiaryApi.info(memberId);
            const newMyDiaryData = response.data;            
            setMyDiaryData(newMyDiaryData);
            console.log(newMyDiaryData)
            // setDiaryInfo(myDiaryData)
            setInputComment(response.data)


        };
        infoFetchDate();
    }, [memberId]);

    useEffect(() => {
        setCountDiary(myDiaryData.length);
        countCheck();
        setMention(countCheck());
    }, [myDiaryData]);

    

    const onChangeText = (e) => {
        setInputComment(e.target.value)
    }

    


    return (
        <>
        { myDiaryData && (
            <Wrap>
            <div className='count'>{countDiary}</div>
            <div className='desc'>{mention}</div>

            <InfiniteScroll
            dataLength={myDiaryData.length}
            // next={exhibitionData}
            hasMore={true}
            // loader={<h4>Loading...</h4>}
            style={{width:'100%', minWidth:'600px', margin:'0'}}
        >
                
                {
                myDiaryData.map((item, index) => (
                    <CardItem key={index}>
                        <div className='exhibitionImage'>
                            <img src={item.exhibitions.imgUrl} alt='exhibition'/>
                        </div>
                        <div className='exhibitionDesc'>
                            <div className='title'>{item.exhibitions.exhibitName}</div>   
                            <div className='date'> { (item.regDate).slice(0, 10)}</div>   

                            <Stack spacing={1} className='rateStar'>

                            <Rating
                                name="half-rating"
                                precision={0.5}
                                // defaultValue={item.rateStar}
                                // onChange={(event, value) => {
                                //     setRatingStar(value);
                                // }}
                                // onChange={handleRateStar(myDiaryData, index)}
                                value={ratingStar} // ratingStar 상태값으로 value를 설정
                            />
                            </Stack>
                        </div>
                        <div className="commentBox">                            

                            
                            <textarea className='textBox' name="" id="" cols="20" rows="8" 
                            // value={item.comment ? item.comment : inputComment}
                            onChange={onChangeText}
                            value={inputComment[index] ? inputComment[index].comment : ""}
                            // onChange={onChangeComment}

                             />


                            <div className='test'> <div className='icon'> <img src={iconUrl} alt="" /></div></div>
                        </div>

                    </CardItem>
                    ))
                }
        </InfiniteScroll>

        
        </Wrap>)}
      </>
    );
  };
  
  export default MyDiaryModal;

{/* 
    <Tooltip title={writeState[index] ? "글쓰기" : "저장"} arrow className="writeBox">
    <Button className="buttnBox" onClick={() => handleWriteState(index)}>
        {writeState[index] ? <SlPencil className='writeBtn' /> : <SlCloudUpload className='writeBtn' />}
    </Button>
    </Tooltip> 
*/}


    // const [writeState, setWriteState] = useState(Array(exhibitionData.length).fill(true));

    // const handleWriteState = (index) => {
    // setWriteState((prevWriteState) => {
    //     const newWriteState = [...prevWriteState];
    //     newWriteState[index] = !newWriteState[index];
    //     return newWriteState;
    // });
    // };
    // console.log(myDiaryData)