import React from 'react';
import styled from 'styled-components';
import { SlArrowRight } from 'react-icons/sl';
import { diaryImage } from './Data.jsx';

const DiaryBox =styled.div`
    width: 100%;
    height: 36%;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    .title{
        display: block;
        align-items: left;
        margin : .5rem 0 0 2.5rem ;
        font-size: 1rem;
        font-weight: bold;
    }
    .imgBox{
        /* background-color: brown; */
        width: calc(100%);
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding-left: .5rem;
        .diaryImg{
            overflow: hidden;
            width: 8rem;
            min-width: 90px;
            height: 10rem;
            margin-left: 1rem;
            background-position: center;
        }
        button{
            /* position: absolute;
            top: 67%; */
            right: 10%;
            margin : 0.8rem;
            width: 2rem;
            height: 2rem;
            min-width: 35px;
            min-height: 35px;
            border-radius: 2rem;
            text-align: center;
            font-size: .8rem;
            background-color: #eee;
            border: 1px solid #aaa;
            color: #444;
            cursor: pointer;
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
            <button> <SlArrowRight style={{padding:'0', margin:'0'}}/> </button>
        </div>
      </DiaryBox>
    );
};

export default Diary;