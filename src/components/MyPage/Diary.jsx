import React from 'react';
import styled from 'styled-components';
import { SlArrowRight } from 'react-icons/sl';
import { diaryImage } from './Data.jsx';
import exhibitionData from '../exhibition/exhibitionData';


const DiaryBox =styled.div`
    width: 100%;
    height: 36%;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    .title{
        display: block;
        align-items: left;
        margin : 1.2rem 0 0 2.5rem ;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
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
`;

const DiaryImage = styled.div`
/* background-color: red; */
width: calc(100% - 4rem);
height: calc(100% - 5.6rem);
padding: 2rem;
display: flex;
justify-content: space-between;
align-items: center;
    img{
        width: 15%;
        height: 10rem;
        object-fit: cover;
        object-position: top;
        margin: .3rem;
        cursor: pointer;
    }
    
`;
const Diary = (props) => {
    return (
        <>
            <DiaryBox>
                <p className='title' onClick={()=>{props.setShowPage('다이어리')}}>다이어리</p>
                <DiaryImage>
                    {
                        exhibitionData.slice(0, 5).map((img, i) => (
                            <img key={i} src={img.imgUrl} onClick={()=>{}}/>
                        ))

                    }
                <button onClick={()=>{props.setShowPage('다이어리')}}> <SlArrowRight style={{padding:'0', margin:'0'}}/> </button>
                </DiaryImage>
            </DiaryBox>
        </>

    );
};

export default Diary;

// <DiaryBox>
// <p className='title' onClick={()=>{props.setShowPage('다이어리')}}>다이어리</p>
// <div className='imgBox'>
//     {
//         exhibitionData.map((img, i) => (
//         <div className="diaryImg" key={i} style={{ backgroundImage: `url(${img})` }} />
//         ))
//     }
//     <button onClick={()=>{props.setShowPage('다이어리')}}> <SlArrowRight style={{padding:'0', margin:'0'}}/> </button>
// </div>
// </DiaryBox>