import React ,{useState,useEffect} from "react";
 import styled from "styled-components";
// import { useParams } from "react-router";
// import { useNavigate } from "react-router-dom";
// import Button from '../util/Button';
// import { ImHome } from 'react-icons/im';
// import DDDApi from "../api/DDDApi";
// import BasicDateCalendar from "../util/MuiCalandar";
 import SelectDate from "../components/reservation/SelectDate";

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


const ReservationPage =  () => {
    // const navigate = useNavigate();
    // const rootData = [' > 일정선택',' > 예매하기',' > 결제하기',' > 예매완료'];

    //  //클릭한 정보id가져오기 
    //  const { id } = useParams();
    //  //데이터 상태관리 
    //  const [exData, setExData] = useState([0]);
    //  useEffect(() => {
    //     const exhibitionDetail = async () => {
    //       try {
    //         const exhibitionView = await DDDApi.exhibitDetail(id);
    //         setExData(exhibitionView.data);
    //       } catch (e) {
    //         console.log(e);
    //       }
    //     }
    //     exhibitionDetail();
    //   }, [id]);

    //   const handleCancle = () =>{
    //     navigate(-1);
      //}
    return(
        <>
        <SelectDate/>
        </>
    );
}


export default ReservationPage;