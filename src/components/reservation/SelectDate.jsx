import React ,{useState,useEffect} from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Button from "../../util/Button";
import { ImHome } from 'react-icons/im';
import DDDApi from "../../api/DDDApi";
import BasicDateCalendar from "../../util/MuiCalandar";

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
        display: flex;
        align-items: center;
        gap: 0.2rem;
        flex-direction: row;
        text-align: left;
        width: 100%;
        p{
            cursor: pointer;
        }
    }
    .imgBox{
        margin-top: 1rem;
        overflow: hidden;
        width: 100%;
        height: 20rem;
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


const SelectDate =  () => {
    const navigate = useNavigate();
    // 예매완료까지 단계를 보여주기위한 배열
    const rootData = [' > 일정선택',' > 예매하기',' > 결제하기',' > 예매완료'];
    // 달력에서 선택된 날짜 변수정의
    const [selectedDate, setSelectedDate] = useState(null);

     //클릭한 정보id가져오기 
     const { id } = useParams();
     //데이터 상태관리 
     const [exData, setExData] = useState([0]);

     // 백엔드에서 상세정보가져오기
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

      // 다시 상세정보페이지로 이동
      const handleCancle = () =>{
        navigate(-1);
      }

      // 선택된 날짜를 업데이트하는 콜백함수
      const handleDateChange = (date) => {
        setSelectedDate(date);
      };

    return(
        <>
        {exData[0] && 
        <Container  imgUrl ={exData[0].imgUrl}>
            <div className="reservationBox">
               <div className="infoBox">
               <div className="root">
                <ImHome/><p onClick={handleCancle}>전시 상세정보 페이지</p>
                <p>{rootData[0]}</p>
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
               <BasicDateCalendar onDateChange={handleDateChange} selectedDate={selectedDate}/>
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


export default SelectDate;