import styled from "styled-components";
import { useState, useEffect } from "react";
import profile from "./../../resources/라이언프로필.png"
import DDDApi from "../../api/DDDApi";

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

        .user {
            font-size: 13px;
            margin-left: .5em;
        }  
        
        .writedate {
        font-size:1px;
        margin-top: .2em;
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

    .textinfo {
        display: flex;
        align-items: center;
        margin-left: auto;
        width: 83%;
        margin: 12px;
        border: 1px solid #ccc;
        border-radius: 10px;
        padding:7px; 
        color : #6d6767;
    }

  }
`;

const BoardComment = ({boardNo}) => {

  
  const getId = window.localStorage.getItem("memberId");
  const [comment, setComment] = useState(""); // 댓글 목록 상태 관리(입력 배열값)
  
  // const postComment = async () => {
  //   try {
  //     // 새로운 댓글을 작성하는 API 호출
  //     await DDDApi.post(boardCommentDto);

  //     // 댓글 작성 후 댓글 목록을 다시 가져옴
  //     const response = await DDDApi.commentWrite();
  //     setComment(response.data);

  //     // 입력 초기화
  //     setBoardCommentDto({ content: "" });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


  // useEffect(() => {
  //   const fetchComments = async () => {
  //     try {
  //       // 댓글 목록을 가져옴
  //       const response = await DDDApi.commentWrite(boardCommentDto);
  //       console.log("fetchComments response : ", response)
  //       setComment(response.data);
  //     } catch (error) {
  //       console.error("오류내용 : ", error);
  //     }
  //   };

  //   fetchComments();
  // }, [boardCommentDto]);

  const postComment = async () => {
      
      // 새로운 댓글을 작성하는 API 호출
      const response = await DDDApi.commentWrite(comment, getId, boardNo);
      console.log("성공내용 : " + response.data);

  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      postComment();
    }
  };

  const handleButtonClick = () => {
    postComment();
  };

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };


    return (
        <Wrapper>
          <div className="commentbox">
            <img src={profile} alt="프로필 이미지" />
            <div className="user">{getId}</div>
            <div className="input-wrapper">
              <input
                type="text"
                value={comment}
                onChange={handleInputChange}
                onKeyPress={handleEnterKeyPress} // Enter 키 이벤트 처리
                placeholder="댓글을 입력하세요"
              />
              <button onClick={handleButtonClick}>전송</button>
            </div>
          </div>
    
          {/* 배열의 값들을 map으로 반복하여 보여줌 */}
          {/*comment.map((e, index) => (
          <div key={index}>
          <div className="commentbox">
            <img src={profile} alt="프로필 이미지" />
            
            <div className="userinfo">
                <div className="user">{e.id}</div>
                <div className="writedate">
                  {/* {e.date.toLocaleDateString()} */}
                  {/*new Date(e.writeDate).toLocaleDateString()}
                  </div>
            </div>
            
            <div className="textinfo">
                <div className="outputtext" style={{fontSize:".9em"}}>{e.content}</div>
            </div>
          </div>
        </div>
          ))*/}
    </Wrapper>
      );
    };

export default BoardComment;