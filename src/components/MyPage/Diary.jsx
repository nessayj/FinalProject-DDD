import React from "react";
import styled from "styled-components";
import { SlArrowRight } from "react-icons/sl";
import exhibitionData from "../exhibition/exhibitionData";
import { Link } from "react-router-dom";
import useStore from "../../store";
import Draggable from 'react-draggable'; 

const DiaryBox = styled.div`
  width: 100%;
  height: 36%;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  .title {
    display: block;
    align-items: left;
    margin: 1.2rem 0 0 2.5rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
  }
  button {
    /* position: absolute;
        top: 67%; */
    right: 10%;
    margin: 0.8rem;
    width: 2rem;
    height: 2rem;
    min-width: 35px;
    min-height: 35px;
    border-radius: 2rem;
    text-align: center;
    font-size: 0.8rem;
    background-color: #eee;
    border: 1px solid #aaa;
    color: #444;
    cursor: pointer;
    .handle{
        width: 500px;
        height: 100px;
    }
  }
`;

const DiaryImage = styled.div`
  background-color: blue;
  width: calc(100% - 1rem);
  height: calc(100% - 2.6rem);
  padding: 1rem 0 1rem 1rem;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  /* .imageContain{
    width: 200%;
    height: 100%;
    background-color: blue;
    display: flex;
    overflow: hidden;
    .testBox {
        min-width: 8rem;
        min-height: 2rem;
        background-color: orange;
        margin-right: 1rem;
    }

  } */

`;
const Diary = () => {
  const { setShowPage, myDiaryData  } = useStore();
  console.log(myDiaryData)

  

  return (
    <>
      <DiaryBox>
        <p
          className="title"
          onClick={() => {
            setShowPage("다이어리");
          }}> 다이어리 </p>
                  

            <DiaryImage>
            <Draggable
                axis="x"
                handle=".handle"
                defaultPosition={{x: 0, y: 0}}
                position={null}
                grid={[25, 25]}
                scale={1}
                bounds="parent"
        >
            <div className="handle">
                <div>Drag from here</div>
            </div>
        </Draggable>
            </DiaryImage>
      </DiaryBox>
    </>
  );
};

export default Diary;