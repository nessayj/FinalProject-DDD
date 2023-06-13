import styled from "styled-components";
import { useState } from "react";
import profile from "./../../resources/라이언프로필.png"

const Wrapper = styled.div`
    /* padding : 0 !important;*/
    width: 92%;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 12px;
    padding: 15px 18px;
    margin-top: 20px;
    min-height: 200px;

    .commentbox {
      display: flex;
      align-items: center;
      background-color: #F4F8FF;
      flex-direction: row;
      border-radius: 20px;
      margin: 1rem;
      padding: 1em;
        
        
        img {
            width: 4em;
            height: 4em;
            border-radius: 50%;
            margin-left: .3em;
            object-fit: cover;
        }

        .author {
            margin-left: .5em
        }  

        .input-wrapper {
            display: flex;
            align-items: center;
            margin-left: auto;
            flex-grow: 1;
            margin: 12px;
      
          input {
            padding: 0.5em;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-right: 0.5em;
            flex-grow: 1;
            min-width: 0;
          }
      
          button {
            padding: 0.5em 1em;
            border: none;
            border-radius: 5px;
            background-color: #333;
            color: white;
            cursor: pointer;
          }
        }

    @media (max-width: 600px) {
      flex-direction: column;
    }

    .output-wrapper {
        display: flex;
        align-items: center;
        margin-left: auto;
        width: 80%;
        margin: 12px;
        border: 1px solid #ccc;
        border-radius: 10px;
        padding:7px; 
        color : #6d6767;

    }
  }
`;

const BoardComment = (props) => {
    const [input, setInput] = useState(""); // 댓글 입력값
    const [comment, setComment] = useState([]); // 댓글 입력 배열값

    const postEnter = (e) => { // 엔터쳤을 경우
        if(e.code === 'Enter' && input.length> 0) {
            const enterCopy = [...comment];
            enterCopy.unshift({ text: input, author: "댓글러" } );
            setComment(enterCopy);
            setInput("");
        }
    }

    const postClick = () => { // 클릭했을 경우
        if(input.length > 0) {
            const clickCopy = [...comment];
            clickCopy.unshift({ text: input, author: "댓글러" });
            setComment(clickCopy);
            setInput("");
        }
    }



    return (
        <Wrapper>
          <div className="commentbox">
            <img src={profile} alt="프로필 이미지" />
            <div className="author">댓글러</div>
            <div className="input-wrapper">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={postEnter} // Enter 키 이벤트 처리
                placeholder="댓글을 입력하세요"
              />
              <button onClick={postClick}>전송</button>
            </div>
          </div>
    
          {/* 배열의 값들을 map으로 반복하여 보여줌 */}
          {comment.map((e, index) => (
            <div key={index}>
          <div className="commentbox">
            <img src={profile} alt="프로필 이미지" />
            <div className="author">{e.author}</div>
            <div className="output-wrapper">
            <div className="outputtext">{e.text}</div>
            </div>
          </div>
        </div>
      ))}
    </Wrapper>
      );
    };

export default BoardComment;