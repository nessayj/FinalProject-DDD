import React from "react"
import styled from "styled-components";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoMdPin, IoMdEye } from "react-icons/io";
import CardData from "./CardData.json"
import { useState, useEffect } from "react";
import PageNation from "../../util/PageNation";

const CardContainer = styled.div`
    max-width: 100em;
    display: grid;
    grid-template-columns: repeat(auto-fit, 18em); // 반복(자동맞춤, 1fr 크기)
    justify-content: center;
    margin: 2rem;
    gap: 1rem;
    transition: width 1s, height 1s;
    cursor: pointer;

    * {
        margin: 2rem;
        box-sizing: border-box;
        margin: 0;
        padding:0;
    }
    .container {
        overflow: hidden; /* 영역을 벗어날 시 가려짐 */
        box-shadow: 0 1px 2px 0px;
        background-color: #ffffff;
        text-align: center;
        border-radius: 1rem;
        position: relative;
        margin: 0.8rem;
        
        &:hover {
            transform: scale(1.1); // 호버 시 확대 효과
        }
    }

    .cardimage {
        width: 100%; 
        height: 11rem; 
    }

    .region, .cardtitle, .cardnickname, .datearea {
        text-align: left;
        margin-left: 1rem;
        margin: .4rem;
        font-size: 1em;
        font-weight: bold;
    }
    
    .viewarea, .replyarea {
        margin-left: .2em; // 아이콘과 숫자 사이 여백
        margin-top: .2em; // 아이콘 옆 숫자 위치
        font-size: 1em;
        
    }

    .icon-container {
        /* border-top: 2px solid #ccc; */
        display: flex;
        justify-content: flex-end;
        margin-right: 1.5rem;

        .icon {
        margin-left: 1.2rem;
        font-size: 1.6rem;   
        }
    }
`;

const SelectBox = styled.select`
    width: 100px;
    height: 30px;
    float: right;
    display: flex;
    margin-right: 12.4em;
    option{
        font-size: 20px;
    }

    @media (max-width: 768px) {
    margin-right: 8em;
    
    }
 `; 



const Card = () => {    


    const [selectedRegion, setSelectedRegion] = useState("");
    const [filterRegion, setFilterRegion] = useState([]);

    useEffect(() => {
        setFilterRegion(CardData);
      }, []);
        
        
      const handleRegionChange = (event) => {
        const selectedRegion = event.target.value;
        setSelectedRegion(selectedRegion);
    
        console.log(selectedRegion);

        // 선택된 지역에 해당하는 데이터를 필터링하여 업데이트
        const filteredData = CardData.filter((item) =>  
        selectedRegion ? item.region === selectedRegion : true
    );
        setFilterRegion(filteredData);
    };




    //보여질 페이지 Item 개수(페이지네이션)
    const ITEMS_PAGE = 8;
    const [currentPage, setCurrentPage] = useState(0);
    
    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };
    const pageCount = Math.ceil(CardData.length / ITEMS_PAGE); // 전체 페이지 수
    const offset = currentPage * ITEMS_PAGE; // 현재 페이지에서 보여줄 아이템의 시작 인덱스

    const currentPageData = CardData.slice(offset, offset + ITEMS_PAGE);

    return(
        <>
        <SelectBox value={selectedRegion} onChange={handleRegionChange}>
            <option value="">전체</option>
            <option value="서울">서울</option>
            <option value="경기/인천">경기/인천</option>
            <option value="충청">충청</option>
            <option value="강원">강원</option>
            <option value="경상도">경상도</option>
            <option value="전라/제주">전라/제주</option>
        </SelectBox>
        <CardContainer> 
            {currentPageData.map((data, index) => (
            <div className="container" key={index}>
                
                <div className="img_area"></div>
                    {/* <img src={data.imageUrl} alt="CardImage" className="cardimage" /> */}
                    <img src={data.imageUrl} alt="CardImage" className="cardimage" />
                
                <div className="region">
                    <IoMdPin style={{fontSize:'1.2em', color:'#528BF9'}}/>{data.region}
                </div>
                
                <h3 className="cardtitle">{data.title}</h3>
                
                <div className="cardnickname">{data.nickname}</div>
                
                {data.date && <div className="datearea">{data.date}</div>}
                
                <div className="icon-container">
                    <IoMdEye className="icon" style={{color:'#686565'}} /> 
                    {data.view && <div className="viewarea">{data.view}</div>}
                    <IoChatbubbleEllipses className="icon" style={{color:'#2468ee'}} />
                    {data.reply && <div className="replyarea">{data.reply}</div>} 
                </div>
            </div>
        ))}
      </CardContainer> 
       <PageNation pageCount={pageCount} onPageChange={handlePageClick} />
      </>
    )
};
export default Card;