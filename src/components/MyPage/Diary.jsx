import React from 'react';
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';
import { diaryImage } from './Data.jsx';

const DiaryBox =styled.div`
    width: 100%;
    height: 36%;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    .title{
        margin : .5rem 0 0 2rem ;
        font-size: 1rem;
        font-weight: bold;
    }
    .imgBox{
        /* background-color: brown; */
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding-left: .5rem;
        .diaryImg{
            width: 7.4rem;
            min-width: 90px;
            height: 9rem;
            margin-left: .5rem;
            background-position: center;
        }
        button{
            margin : 0.6rem;
            width: 2.2rem;
            height: 2.2rem;
            min-width: 35px;
            min-height: 35px;
            border-radius: 2rem;
            text-align: center;
            font-size: 1rem;
            background-color: #eee;
            border: 1px solid #aaa;
            color: #444;
        }
    }
    
`;
const Diary = () => {
    return (
        <DiaryBox>
        <p className='title'>다이어리</p>
        <div className='imgBox'>
            {
                diaryImage.map((img, i) => (
                <div className="diaryImg" key={i} style={{ backgroundImage: `url(${img})` }} />
                ))
            }
            <button> <BsArrowRight/> </button>
        </div>
      </DiaryBox>
    );
};

export default Diary;