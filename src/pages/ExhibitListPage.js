import React, { useCallback, useState } from "react";
import styled from "styled-components";
import SelectBtn from "../components/exhibition/SelectBtn";
import InfoBox from "../components/exhibition/InfoBox";
import Categroy from '../components/exhibition/Category';
import PageNation from "../util/PageNation";
import Header from "./main/Header";
import AreaCategroy from "../components/exhibition/AreaCategroy";
import Carousel from "../util/Carousel";
import exhibitionData from "../components/exhibition/exhibitionData";
const Container = styled.div`

    .header { 
        width: 100%;
        height: 170px;
    }
    .apiBox {
        //background-color: #eee;
        width: 70%;
        height: 250px;
        border: 3px solid #eee;
        margin: 0 auto;
        border-radius:5px;
       
    }
    .category{
        margin: 10px;
    }
    .section{
        border: 1px solid #050E3D;
        width: 70%;
        margin : 0 auto;
        position: relative;
        padding-top: 2em;
        border-radius:5px;
        .select{
            position: absolute;
            right: 5px;
            top: 5px;
        }

    }
    .areaSelectBox{
        display: flex;
        flex-direction: row;
        cursor: pointer;
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
    @media (max-width: 768px) {
    width: 768px;

  }

`;



const ExhibitListPage = () => {
    // const imageData = [
    //     { index: 1, name: '전시명1', date: '2023-01-01',lotation:"서울",imgUrl :"https://ticketimage.interpark.com/Play/image/large/23/23004076_p.gif" },
    //     { index: 2, name: '전시명2', date: '2023-02-01',lotation:"경기/인천" ,imgUrl :"https://artlogic-res.cloudinary.com/w_650,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/gallerybaton/images/view/693a8dc58325a35a9e263ebdb042214ej/gallerybaton-kim-bohie-towards-2023.jpg"},
    //     { index: 3, name: '전시명3', date: '2023-03-01',lotation:"충청" },
    //     { index: 4, name: '전시명4', date: '2023-04-01',lotation:"강원" },
    //     { index: 5, name: '전시명5', date: '2023-05-01',lotation:"경상도" },
    //     { index: 6, name: '전시명6', date: '2023-06-01',lotation:"전라/제주" },
    //     { index: 7, name: '전시명7', date: '2023-07-01',lotation:"서울" },
    //     { index: 8, name: '전시명8', date: '2023-08-01',lotation:"경기/인천" },
    //     { index: 9, name: '전시명9', date: '2023-09-01',lotation:"충청" },
    //     { index: 10, name: '전시명10', date: '2023-10-01',lotation:"강원" },
    //     { index: 11, name: '전시명11', date: '2023-11-01',lotation:"경상도" },
    //     { index: 12, name: '전시명12', date: '2023-12-01',lotation:"전라/제주" },
    //     { index: 13, name: '전시명13', date: '2023-01-01',lotation:"서울" }
        
    //   ];

    //셀렉트박스 상태관리
    const [selectedOption, setSelectedOption] = useState('');
     //메뉴 바 상태 관리 
    const [category,setCategory] = useState('menu1');
    const onSelect = useCallback(category => {
        setCategory(category);
        if (category ==='menu1') {
            //인기순 데이터 들어올 자리
            setFilteredData(exhibitionData);

        }else if (category ==='menu2') {
            setAreaCategory('서울');
            const areaData = exhibitionData.filter(item=> item.lotation.includes(areaCategory))
            
            setFilteredData(areaData);

        }else {
            //최신순 데이터 들어올자리 
            const dateData = [...exhibitionData].sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateB - dateA;
              });
              setFilteredData(dateData);
        }
    },[]);
     //필터 데이터 
   const [filteredData, setFilteredData] = useState(exhibitionData);
    //지역 메뉴바 상태관리 
    const [areaCategory,setAreaCategory] = useState('서울');
    const AreaOnSelect = useCallback(areaCategory =>{ 
        setAreaCategory(areaCategory);
        if(category === 'menu2'){
            const areaData = exhibitionData.filter(item=> item.lotation.includes(areaCategory))
            setFilteredData(areaData);
            console.log(areaData);
        }
      
    },[category]);

 
  

   //보여질 페이지 개수
   const ITEMS_PAGE = 12;
   const [currentPage, setCurrentPage] = useState(0);
   const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };
  const pageCount = Math.ceil(filteredData.length / ITEMS_PAGE); // 전체 페이지 수
  const offset = currentPage * ITEMS_PAGE; // 현재 페이지에서 보여줄 아이템의 시작 인덱스

  const currentPageData = filteredData.slice(offset, offset + ITEMS_PAGE);


 
    return(
        <Container>
        <div className="header"><Header/></div>
        <div className="apiBox">
            <Carousel data={exhibitionData}/>
        </div>
        <div className="category">
            <Categroy category={category} onSelect={onSelect}/>
        </div>
        <div className="section">
            {category==='menu2' &&
            <div className="areaSelectBox">
            <AreaCategroy category={areaCategory} onSelect={AreaOnSelect}/>
            </div>
            }
            <div className="select">
            <SelectBtn selectedOption={selectedOption} setSelectedOption={setSelectedOption} options={['갤러리','리스트']} />
            </div>
            <div className="imgBoxs">
            {currentPageData.map((data, index) => (
            <InfoBox key={index} data={data}  selectedOption={selectedOption}/>
            ))}
            </div>
            <PageNation pageCount={pageCount} onPageChange={handlePageClick}/>
        </div>
        </Container>
    );
}

export default ExhibitListPage