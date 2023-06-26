import React from "react";
import styled from "styled-components";
import Button from "../../util/Button";
import { useNavigate } from "react-router";
const Container = styled.div`
  position: relative;
  .imgBox{
        overflow: hidden;
        width: 200px;
        height: 280px;
        position: absolute;
        top: 10px;
        left: 120px;
        transform: translateX(-50%);
        background-image: url(${props => props.imgUrl});
        background-repeat: no-repeat;
        background-size:cover;
       
    }
 .name {
        color : black;
        font-weight: bolder;
        font-size: 2rem;
        width: 100%;
        text-align: center;
        position: absolute;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);

    }
    .date {
        font-size: 1.3rem;
        position: absolute;
        top: calc(80px + 5rem);
        left: 50%;
        transform: translateX(-50%);
    }
    .location{
        font-size: 1rem;
        position: absolute;
        top: calc(80px + 8rem);
        left: 50%;
        transform: translateX(-50%);
    }
    .btn{
      width: 150px;
      height: 40px;
      position: absolute;
      top:calc(80px + 10rem);
      right: 40px;
    }
    @media (max-width: 768px) {
    .name{
      font-size: 1.5rem;
    }
    .date{
      font-size : 1rem;
    }
    .imgBox {
        display: none;
    }
  }
`;
const ImgBox = styled.div`
    width: 100%;
    height: 300px;
    position: relative;
    background-image: url(${props => props.imgUrl});
    background-repeat: no-repeat;
    background-size:cover;
    opacity: 0.3;
   


`;

const DetailBox = ({data}) => {
    const navigate = useNavigate();
    const handleClick = (data) => {
        navigate(`/reservation/${data.index}`)
    }

    return(
        <>
        {data &&
        <Container imgUrl ={data.imgUrl}>
            <ImgBox imgUrl ={data.imgUrl}/>
            <div className="imgBox" />
            <div className="name">{data.exhibitName}</div>
            <div className="date">{data.startDate} ~ {data.endDate}</div>
            <div className="location">{data.exhibitLocation}</div>
            <div className="btn">
            <Button onClick={()=>handleClick(data)}>예약하기</Button>
            </div>
        </Container>
    }
    </>
    );
}

export default DetailBox;