import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { SlArrowRight } from "react-icons/sl";
import useStore from "../../store";
import Draggable from 'react-draggable'; 

const DiaryBox = styled.div`
  width: 100%;
  height: 36%;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  position: relative;
  /* overflow: hidden; */

  .title {
    display: block;
    align-items: left;
    margin: 1.2rem 0 0 2.5rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
  }
`;

const DiaryImage = styled.div`
  /* background-color: blue; */
  width: auto;  // 자동 너비 설정
  height: 100%;  // 높이를 부모의 100%로 설정
  display: flex;
  align-items: center;
  overflow-x: auto;  // 가로 스크롤 설정
  overflow-y: hidden;
  white-space: nowrap;  // 모든 요소를 한 줄로 표시
  padding-left: 2rem;
  cursor: pointer;

  .textBox{

    /* min-width: 140px; */

    /* height: 200px; */
    margin-right: 1rem;
    img{
      width: 8rem;
    height: 11rem;
      border: 1px solid #f2f2f2;

    }
  }
  ::-webkit-scrollbar {
    display: none; 
  }
`;

// const DiaryImage = styled.div`
//   background-color: blue;
//   width: auto;  // 자동 너비 설정
//   height: 100%;  // 높이를 부모의 100%로 설정
//   padding: 1rem 0 1rem 1rem;
//   display: flex;
//   align-items: center;
//   overflow-x: auto;  // 가로 스크롤 설정
//   overflow-y: hidden;
//   white-space: nowrap;  // 모든 요소를 한 줄로 표시
//   .testBox{
//     background-color: orange;
//     width: 100px;
//     height: 100px;
//     .image22 {
//       min-width: 100px;
//       object-fit: cover;
//       object-position: top;
//       border: 1px solid #bbb;
//       margin-left: 20px;
//       background-color: red;
//     }
//   }       
//   /* ::-webkit-scrollbar {
//     display: none; 
//   } */
// `;
const Diary = () => {
  const { setShowPage, myDiaryData  } = useStore();
  console.log(myDiaryData)

  function scrollHorizontally(e) {
    e.preventDefault();
    this.scrollLeft += (e.deltaY + e.deltaX) * 0.4;
  }
  

  const diaryImageRef = useRef();

  useEffect(() => {
    const scrollElement = diaryImageRef.current;

    if (scrollElement) {
      scrollElement.addEventListener('wheel', scrollHorizontally);

    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('wheel', scrollHorizontally);

      }
    };
  }, []);

  
  return (
    <>
      <DiaryBox>
        <p
          className="title"> 다이어리 </p>
                  

            <DiaryImage ref={diaryImageRef}           onClick={() => { setShowPage("다이어리");
          }}>
              {
                myDiaryData.map((item, index) => (
                  <div className="textBox" key={index}>
                    {/* <div className="image22"> {item.diaryId}</div> */}
                    <img src={item.exhibitions.imgUrl} alt="exhibition" className="image" />
                  </div>
                ))
              }
            </DiaryImage>
      </DiaryBox>
    </>
  );
};

export default Diary;