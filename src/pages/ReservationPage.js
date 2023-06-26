import React ,{useState,useEffect} from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import ReservationCalendar from "../util/Calendar";
import Button from '../util/Button';
import { ImHome } from 'react-icons/im';
import DDDApi from "../api/DDDApi";
import BasicDateCalendar from "../util/MuiCalandar";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    .header { 
        width: 100%;
        height: 170px;
        
    }
    .reservationBox{
        background-color: #F4F8FF;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 20px;
        gap: 1rem;
        border-radius: 10px;
       
       
    }
    .infoBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    margin: 20px;
    .root{
        text-align: left;
        width: 100%;
    }
    .imgBox{
        overflow: hidden;
        width: 400px;
        height: 450px;
        position: relative;
        background-image: url(${props => props.imgUrl});
        background-repeat: no-repeat;
        background-size:cover;
       
    }
    .textBox{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .title{
            margin-top: 10px;
            font-size: 1rem;
            font-weight: bold;
        }
        &>*{
            margin-bottom: 10px;
        }
    }
}
.rightBox{
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
        .btnContainer{
            width: 15rem;
            height: 2rem;
            display: flex;
            flex-direction: row;
            margin-top: 1rem;
            gap: 1rem;
        }
        .calendar-container{
            width: 20rem;
        }
    }
    
`;


const ReservationPage =  () => {
    const navigate = useNavigate();
    const rootData = [' > 일정선택',' > 예매하기',' > 결제하기',' > 예매완료'];

     //클릭한 정보id가져오기 
     const { id } = useParams();
     //데이터 상태관리 
     const [exData, setExData] = useState([0]);
     useEffect(() => {
        const exhibitionDetail = async () => {
          try {
            const exhibitionView = await DDDApi.exhibitDetail(id);
            setExData(exhibitionView.data);
          } catch (e) {
            console.log(e);
          }
        }
        exhibitionDetail();
      }, [id]);

      const handleCancle = () =>{
        navigate(-1);
      }
    return(
        <>
        {exData[0] && 
        <Container  imgUrl ={exData[0].imgUrl}>
            <div className="reservationBox">
               <div className="infoBox">
               <div className="root">
                <ImHome/>전시 상세정보 페이지
                {rootData[0]}
                </div>
               <div className="imgBox"/>
                <div className="textBox">
                    <div className="title">{exData[0].exhibitName}</div>
                    <div>{exData[0].startDate} ~ {exData[0].endDate}</div>
                    <div>{exData[0].exhibitLocation}</div>
                </div>
               </div>
               <div className="rightBox">
                <div className="calendar-container">
               <BasicDateCalendar/>
               </div>
               <div className="btnContainer">
               <Button onClick={handleCancle}>돌아가기</Button>
               <Button>다음 단계</Button>
               </div>
               </div>
            </div>        
        </Container>
        }
        </>
    );
}


export default ReservationPage;