import React, {useCallback, useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import exhibitionData from "../components/exhibition/exhibitionData";
import Header from './../components/Header/Header';
import styled from "styled-components";
import Categroy from "../components/exhibition/Category";
import DetailBox from "../components/exhibitionInfo/DetailBox";
import ComentBox from "../components/exhibitionInfo/ComentBox";
import Section from "../components/exhibitionInfo/Section";
const Container = styled.div`

    .header { 
        width: 100%;
        height: 170px;
    }
    .InfoBox {
        width: 70%;
        height: 300px;
        border: 3px solid #eee;
        margin: 0 auto;
        border-radius:5px;
       
    }
    .category{
        margin: 10px;
    }
    .coment{
      //background-color: #050E3D;
      width: 70%;
      margin : 0 auto;
    }
    .section{
        border: 1px solid #050E3D;
        width: 60%;
        margin : 0 auto;
        border-radius:5px;
        margin-bottom: 20px;

    }
    @media (max-width: 768px) {
      width: 768px;
    }
  `;
const ExhibitInfoPage = () => {

   //클릭한 정보id가져오기 
    const { id } = useParams();
    //데이터 상태관리 
    const [exData, setExData] = useState(null);
     //메뉴 바 상태 관리 
    const [category,setCategory] = useState('menu1');
    const categories = [
      {name :'menu1',text : '상세정보'},
      {name :'menu2',text : '전시장소'},
      {name :'menu3',text : '관람후기'}]
    const onSelect = useCallback(category => {
            setCategory(category);
        },[]);

    useEffect(() => {
      const dataInfo = () => {
        const foundData = exhibitionData.find((item) => item.index === parseInt(id));
        setExData(foundData);
      };
  
      dataInfo();
    }, [id]);
  
    return(
      <Container>
      <div className="header"><Header/></div>
       <div className="InfoBox"><DetailBox data ={exData}/></div>
       <div className="coment"><ComentBox/></div>
        <div className="category">
            <Categroy category={category} onSelect={onSelect} categories={categories}/>
        </div>
        <div className="section"><Section category={category} data ={exData}/></div>
      </Container>
    );
  };


export default ExhibitInfoPage;