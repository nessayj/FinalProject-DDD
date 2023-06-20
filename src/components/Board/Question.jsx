import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import DDDApi from "../../api/DDDApi";
import styled from "styled-components";
import BoardSearch from "./BoardSearch";
import PageNation from "../../util/PageNation";

const BoardContainer = styled.div`
    width: 75em;
    height: 100vh;
    background-color: white;
    margin: 0 auto;
    border-radius: 10px;

`;

const Section = styled.div`
    width: 100%;
    height: calc(100vh - 40px);
    float: center;
    position: relative;
    
    
    .board_box {
        margin: 1rem;

        a{
            font-size: 1.2rem;
            color:  #7FC2EF;
            text-decoration: underline;
        }
        button {
            font-size: 16px;
            font-weight: 400;
            float: right;
            padding: 8px 35px;
            border-radius: 10px;
            background-color: #135CD2;
            color: white;
            border: none;
            transition: all .1s ease-in;
             cursor: pointer;

            &:hover{background-color:  #a1f7d9; color: #135CD2;}
        }
    }

    table {
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: lighter;
        border-collapse: collapse; 
        width: 100%;
        background-color: #4555AE;
        border-bottom: solid 1px #4555AE;
        text-align: center;
        table-layout: fixed;
       
        th{padding: 10px 6px; color: white; background-color: #050E3D;} 
        
        tr{
            background-color: white;
            &:nth-child(2n) td, &:nth-child(2n){
                background-color: #fbfbfb;
            }
        }
        
        td {
            padding: 10px 6px; 
            background-color: white; 
            border-left: solid 1px #bbb; 
            border-top: solid 1px #ddd; 
            font-weight: 400; 
            overflow: hidden; 
            text-overflow: ellipsis; 
            white-space: nowrap;
        }
        th:first-child, td:first-child {border-left: none; width: 70px;} // 글번호(열)
        td:first-child, td:nth-child(5), td:last-child { letter-spacing: -1px;}
        th:nth-child(2), td:nth-child(2) {width: 70px; letter-spacing: -.4px;} // 카테고리(열) 
        td:nth-child(3) {text-align: center;} // 제목(열)
        th:nth-child(4), td:nth-child(4){width: 120px;} // 작성자(열) 크기 조절
        th:nth-child(5), td:nth-child(5){width: 60px;} // 조회수(열)
        th:last-child, td:last-child{width: 100px;} // 작성일(열)
        
        tr:hover, tr:hover td, tr:hover a {
            color: #4555AE; 
            background-color: #efefef; 
            cursor: pointer;
        }
        .bi-heart-fill {
            padding-right:5px; 
            color:#FC5C7D;
        }
    }
    .writebtn {
        display: flex;
        margin-bottom: 1em 0em ;
    
        button {
            margin: -1em 1em ;
            margin-left: auto;
            font-size: .9em;
            padding: .5em 2em;
            border-radius: 20px;
            background-color: #050E3D;
            color: white;
            border: none;
            transition: all .1s ease-in;
            cursor: pointer;
            font-weight: bold;
        }
    }
`;




const Question = () => {

   const navigate = useNavigate();

   //  값을 불러오기위해 선언, 목록보기
   const [boardList, setBoardList] = useState([]); // boardList 불러오기

   // // 게시물 클릭시 문의하기 글 보이기
   const [freeBoard_No, setfreeBoard_No] = useState(); // 게시물 클릭 시 freeBoard_No 재설정
  

   
   //보여질 페이지 Item 개수(페이지네이션)
   const ITEMS_PAGE = 13;
   const [currentPage, setCurrentPage] = useState(0);

   const handlePageClick = (selectedPage) => {
       setCurrentPage(selectedPage.selected);
   };

   const filteredData = boardList.filter((item) => { 
       return item.board_Ctg === '질문하기'; // 전체 데이터 boardList에서 카테고리: 질문하기에 해당하는 데이터만 필터링 1차
     });


   const pageCount = Math.ceil(filteredData.length / ITEMS_PAGE); // 전체 페이지 수
   const offset = currentPage * ITEMS_PAGE; // 현재 페이지에서 보여줄 아이템의 시작 인덱스

   let currentPageData = filteredData.slice(offset, offset + ITEMS_PAGE); // const는 두번 변동 적용 안되므로 let으로 재선언
//    currentPageData = filteredData.filter(e => e.board_Ctg === '질문하기') // 현재 페이지네이션으로 보여지는 데이터에서 


    // 자유게시판(boardList) 불러오기
    useEffect(() => {
       const boardData = async () => {
           try {
               const boardListData = await DDDApi.boardList(freeBoard_No);
               setBoardList(boardListData.data);
               console.log(boardListData.data);
           } catch (e) {
               console.log(e);
           }
       };
       boardData();
   }, [freeBoard_No]);

    // 글쓰기 버튼 클릭 시 게시판 작성페이지로 이동
    const onClickToWrite = () => {
        const link = "write/"
        navigate(link);
    }

    
    return (
        <BoardContainer>
            <BoardSearch/>
            <Section id="board" className="section">
                <div className="board_box">
                    <table>
                            <tr>
                                <th>글번호</th>
                                <th>카테고리</th>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>조회수</th>
                                <th>작성일</th>
                            </tr>
                            {currentPageData.map((e) => (
                            <tr key={e.freeBoard_No}>
                                <td>{e.freeBoard_No}</td>
                                <td>{e.board_Ctg}</td>
                                <td>{e.board_Title}</td>
                                <td>{e.user_Id}</td>
                                <td>{e.views}</td>
                                <td>{e.write_Date}</td>
                            </tr>
                             ))}
                             
                    </table>
                </div>
                <PageNation pageCount={pageCount} onPageChange={handlePageClick}/>
                <div className="writebtn">
                    <button onClick={onClickToWrite}>글쓰기</button>
                </div>
            </Section>
        </BoardContainer>
    );

}

export default Question;