import React, { useCallback, useState } from "react";
import styled from "styled-components";
import SelectBtn from "../components/exhibition/SelectBtn";
import InfoBox from "../components/exhibition/InfoBox";
import Categroy from '../components/exhibition/Category';
import PageNation from "../util/PageNation";
const Container = styled.div`

    .header {
        background-color: skyblue;
        width: 100%;
        height: 250px;
        font-size: 100px;
    }
    .apiBox {
        width: 100%;
        height: 250px;
        background-color: pink;
    }
    .section{
        border: 2px solid black;
        width: 70%;
        margin : 0 auto;
        position: relative;
        padding-top: 2em;
        .select{
            position: absolute;
            right: 5px;
            top: 5px;
        }

    }
    .areaSelectBox{
        display: flex;
        flex-direction: row;
        & > *{
            margin-left: 10px;
            font-size:20px;
        }
    }
    .imgBoxs{
        display: flex;
        flex: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

`;



const ExhibitListPage = () => {

    //셀렉트박스 상태관리
    const [selectedOption, setSelectedOption] = useState('');

    //예시 배치 박스
     // 이미지 박스 데이터 배열
  const imageData = [
    { index: 1, name: '전시명1', date: '전시날짜',lotation:"전시위치" },
    { index: 2, name: '전시명2', date: '전시날짜',lotation:"전시위치" },
    { index: 3, name: '전시명3', date: '전시날짜',lotation:"전시위치" },
    { index: 4, name: '전시명4', date: '전시날짜',lotation:"전시위치" },
    { index: 5, name: '전시명5', date: '전시날짜',lotation:"전시위치" },
    { index: 6, name: '전시명6', date: '전시날짜',lotation:"전시위치" },
    { index: 7, name: '전시명7', date: '전시날짜',lotation:"전시위치" },
    { index: 8, name: '전시명8', date: '전시날짜',lotation:"전시위치" },
    { index: 9, name: '전시명9', date: '전시날짜',lotation:"전시위치" },
    { index: 10, name: '전시명10', date: '전시날짜',lotation:"전시위치" },
    { index: 11, name: '전시명11', date: '전시날짜',lotation:"전시위치" },
    { index: 12, name: '전시명12', date: '전시날짜',lotation:"전시위치" },
    { index: 13, name: '전시명13', date: '전시날짜',lotation:"전시위치" }
    
  ];

   //보여질 페이지 개수
   const ITEMS_PAGE = 12;
   const [currentPage, setCurrentPage] = useState(0);
   const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };
  const pageCount = Math.ceil(imageData.length / ITEMS_PAGE); // 전체 페이지 수
  const offset = currentPage * ITEMS_PAGE; // 현재 페이지에서 보여줄 아이템의 시작 인덱스

  const currentPageData = imageData.slice(offset, offset + ITEMS_PAGE);


  //메뉴 바 상태 관리 
  const [category,setCategory] = useState('menu2');
  const onSelect = useCallback(category => setCategory(category),[]);
    return(
        <Container>
        <div className="header">해더</div>
        <div className="apiBox">전시 공공 API 보여질 영역</div>
        <div className="category">
            <Categroy category={category} onSelect={onSelect}/>
        </div>
        <div className="section">
            {category==='menu2' &&
            <div className="areaSelectBox">
                <div>서울</div>
                <div>경기/인천</div>
                <div>충청</div>
                <div>강원</div>
                <div>경상도</div>
                <div>전라/제주</div>
            </div>
            }
            <div className="select">
            <SelectBtn selectedOption={selectedOption} setSelectedOption={setSelectedOption} options={['갤러리','리스트']} />
            </div>
            <div className="imgBoxs">
            {currentPageData.map((data, index) => (
            <InfoBox key={index} name={data.name} date={data.date} lotation={data.lotation}  selectedOption={selectedOption}/>
            ))}
            </div>
            <PageNation pageCount={pageCount} onPageChange={handlePageClick}/>
        </div>
        </Container>
    );
}

export default ExhibitListPage