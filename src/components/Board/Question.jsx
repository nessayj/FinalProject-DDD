import React, { useEffect, useState } from "react";
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
            cursor: pointer;
            font-family: 'Pretendard-regular';
            font-weight: 400;
            float: right;
            font-size: 16px;
            padding: 8px 35px;
            border-radius: 10px;
            background-color: #135CD2;
            color: white;
            border: none;
            transition: all .1s ease-in;
            &:hover{background-color:  #a1f7d9; color: #135CD2;}
        }
    }

    table {
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: lighter;
        border-collapse: collapse; 
        width:100%;
        background-color: #4555AE;
        border-bottom: solid 1px #4555AE;
        text-align: center;
        table-layout: fixed;
       
        th{padding: 10px 6px; color: white; background-color: #7F8EEF;}
        
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
        th:first-child, td:first-child {border-left: none; width: 70px;}
        td:first-child, td:nth-child(5), td:last-child { letter-spacing: -1px;}
        th:nth-child(2), td:nth-child(2) {width: 70px; letter-spacing: -.4px;} 
        td:nth-child(3) {text-align: center;} 
        th:nth-child(4), td:nth-child(4){width: 120px;}
        th:nth-child(5), td:nth-child(5){width: 60px;}
        th:last-child, td:last-child{width: 100px;}
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
`;




const Question = () => {

   
    // 목록보기
    const [boardList, setBoardList] = useState([]);
    
    const [freeBoard_No, setfreeBoard_No] = useState();


    // 문의하기(boardList) 불러오기
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


//보여질 페이지 Item 개수(페이지네이션)
const ITEMS_PAGE = 13;
const [currentPage, setCurrentPage] = useState(0);

const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
};
const pageCount = Math.ceil(boardList.length / ITEMS_PAGE); // 전체 페이지 수
const offset = currentPage * ITEMS_PAGE; // 현재 페이지에서 보여줄 아이템의 시작 인덱스

const currentPageData = boardList.slice(offset, offset + ITEMS_PAGE);

    


    // 카테고리(추천수다, 질문하기)
    const [category, setCategory] = useState('question');

    
    return (
        <BoardContainer>
            <BoardSearch />
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
            </Section>
        </BoardContainer>
    );

}

export default Question;