import styled from "styled-components";
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import profile from "./../resources/프로필.png";
import postimage from "./../resources/게시판기본이미지.gif";
import BoardComment from "../components/Board/BoardComment";
import DDDApi from "../api/DDDApi";


const ViewWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4px;

`;

const Section = styled.div`
    width: 1140px;
    float: center;
    position: relative;
    display: flex;
    flex-direction: column;

    .board_header {
        h2 {
            padding: 10px 16px;
            font-size: 1.8em;
            margin-top: 30px;
            font-weight: 900;
        }
    }

    .sub_category { 
        display: flex; 
        align-items: center;
        margin-bottom: 5px;
        margin-right: 30px;
    }

    .editBtn {
        margin-left: auto;  // 오른쪽으로 이동
        margin-right: 20px;
        display: flex;
        flex-direction: row;  // 가로 방향으로 정렬
        align-items: center;

        .upBtn { // 수정하기 버튼
            padding: 10px 1.6em;
            border: none;
            border-radius: 10px;
            background-color: #050e3d;
            color: white;
            cursor: pointer;
            margin-left: 15px;
            transition: all .1s ease-in;

            &:hover {background-color: #5EADF7;
                    color: #F4F8FF;}
            }
    
        .delBtn { // 삭제하기 버튼
                padding: 10px 1.6em;
                border: none;
                border-radius: 10px;
                background-color: #050e3d;
                color: white;
                cursor: pointer;
                margin-left: 15px;
                transition: all .1s ease-in;

            &:hover {background-color: #FA6060;
                    color: #F4F8FF;}
            }

    }

    @media (max-width: 600px) { 
    
    .editBtn {

        .upBtn, .delBtn {
        padding: 0.7em 1.5em; 
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        }
    }
}
    
    .dateview {
        display: flex;
        font-weight: bold;
        margin-right : 75px;

        .write_date {
            flex:1;
            text-align: right;
            margin-right: 50px;
            margin-bottom:2px;
        }
    }

    .authorinfo {
        display: flex;
        align-items: center;

        img {
            width: 2em;
            height: 2em;
            border-radius: 50%;
            margin-left: .3em;
        }

        .author {
            margin-left: .5em
        }   
    }
    .title {
        width: 100%;
        padding: 8px;
        font-size: 1.2em;
       
    }

    .comment_title {
        margin-top : 1em;
    }

`;

const TitleView = styled.h3`
    width: 93%;
    margin-left: 4px;
    padding: 12px;
    font-size: 1.1em;
    border: 1px solid #ccc;
    border-radius: 12px;
`;

const Contents = styled.div`
    width: 92%;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 12px;
    padding: 30px 18px;
    margin-top: 20px;
    min-height: 400px;
    /* max-height: 800px;*/ 

    .image_area {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
    }

    img {
        width: 60%; /* 이미지의 최대 가로 너비를 설정 */
        height: 50%; 
        border-radius: 12px;
        align-items: center;
        justify-content: center;
    }
    .text_area {
        margin: 12px;
    }
`;



const Boardview = () => {
    const [boardView, setBoardView] = useState(null); // URL에서 boardNo를 가져옴
    let params = useParams();  // url에서 boardNo를 가져오기 위해 uesParams() 사용
    let boardNo = params.no;




     // 게시물 삭제, 수정 팝업
    //  const [modalOpen, setModalOpen] = useState(false); // 모달에 띄워줄 메세지 문구
    //  const [modalOption, setModalOption] = useState('');
    const [comment, setComment] = useState(""); // 모달창 안내 문구

    //  const closeModal = () => {
    //     setModalOpen(false);
    // };


    const onClickEdit = () => {
        // setModalOpen(true);
        // setModalOption('수정');
        setComment("수정하시겠습니까?");
    }
    const onClickDelete = () => {
        // setModalOpen(true);
        // setModalOption('삭제');
        setComment("삭제하시겠습니까?");
    }

    // const [commentList, setCommentList] = useState([]); // 댓글

    // 작성일자(연도-월-일)로 추출
    const formattedDate = boardView?.writeDate.substring(0, 10);

       // 본문 불러오기
       useEffect(() => {
        const boardViewLoad = async () => {
            try {
                // 게시물 내용 불러오기
                const response = await DDDApi.getBoard(boardNo);
                const data = response.data;
                setBoardView(data);
                console.log(data);
            } catch (e) {
                console.log(e);
            } 
        };
        boardViewLoad();
    }, [boardNo]);

    
    



    // 작성자 정보를 localStorage에 저장
    window.localStorage.setItem('author', boardView?.author);

    // 수정, 삭제는 본인만 가능하도록 노출
    const isLogin = window.localStorage.getItem("isLogin");

    // id와 작성자 정보 비교
    const getId = window.localStorage.getItem("memberId"); // localStorage 저장 정보
    // const isAuthorMatched = boardView.id === getId;

    // const idAsNumber = Number(getId);
    // console.log(typeof idAsNumber);

    // 로그인한 id와 작성자의 id 비교
    const isAuthorMatched = String(boardView?.id) === getId; // boardView?.id(숫자타입)를 문자열로 반환
    console.log(isAuthorMatched);


    // 데이터 타입 비교
    console.log("boardView?.id 타입:", typeof boardView?.id); // number
    console.log("getId 타입:", typeof getId); // string
    


    console.log("getId:", getId);

    // 로그인 상태 확인
    console.log(isLogin);

    //작성자와 id 일치 여부 확인 출력
    console.log("작성자 정보:", boardView?.author);
    console.log("getId:", getId);
    console.log("작성자와 Id 일치 여부:", isAuthorMatched);
    console.log(boardView?.email);
    console.log(boardView?.id);


     // 수정, 삭제 버튼 노출 여부 확인
    const showEditBtn = () => {
        return isLogin && isAuthorMatched;
    };

    



    return(
        <ViewWrap>
            <Section className="section">
            <div className="board_header">
                <div className="boardtitle"><h2>자유 게시판</h2></div> 
                
                <div className="sub_category">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-readonly-label">카테고리</InputLabel>
                    <Select
                    labelId="demo-simple-select-readonly-label"
                    id="demo-simple-select-readonly"
                    value={boardView?.category || ''}
                    label="카테고리"
                    inputProps={{ readOnly: true }}
                    sx={{ height: '2.5em' }}>
                    <MenuItem value={boardView?.category }>{boardView?.category}</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-readonly-label">지역선택</InputLabel>
                    <Select
                    labelId="demo-simple-select-readonly-label"
                    id="demo-simple-select-readonly"
                    value={boardView?.region || ''}
                    label="지역선택"
                    inputProps={{ readOnly: true }}
                    sx={{ height: '2.5em' }}>
                    <MenuItem value={boardView?.region}>{boardView?.region}</MenuItem>
                    </Select>
                </FormControl>
                {showEditBtn() ? (
                <div className="editBtn">
                    <button className="upBtn" onClick={onClickEdit}>수정하기</button>
                    <button className="delBtn" onClick={onClickDelete}>삭제하기</button>
                </div>
                ) : null}

                </div>
                <TitleView>{boardView?.title}</TitleView> 
                
                <div className="authorinfo">
                    <img src={profile} alt="프로필 이미지" />
                    <div className="author">{boardView?.author}</div>
                </div>
                
                <div className="dateview">
                    <div className="write_date">작성일 : {formattedDate}</div>
                    <div className="views">조회수 : {boardView?.views}</div>
                </div>
            
                <Contents>
                    <div className="image_area">
                    {boardView?.image ? (
                    <img src={boardView.image} alt="업로드 이미지" />
                    ) : (
                    <img src={postimage} alt="기본 이미지" />
                    )}
                </div>

                    <div className="text_area">{boardView?.contents}</div>
                </Contents>
            </div>

            <div className="comment_title"><h2>Comment</h2></div>
            <BoardComment/>
            </Section>
        </ViewWrap>
    )
};
export default Boardview;