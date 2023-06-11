import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
    padding: 2rem;
    .textBox{
        width: 90%;
            &>*{
                margin-top: 1rem;
                }
    }
    .title {
        font-size: 2em;
        font-weight: bold;
    }
    img{
        width: 90%;
    }
`;
const ExhibitionDetails = ({data}) => {


    return(
        <>
        {data &&
        <Container>
        <div className="textBox">
        <div className="title">전시 상세 설명</div>
        <div>전시 상세설명 : </div>
        <div>전시 기간 : {data.startDate} ~ {data.endDate}</div>
        <div>가격 정보 : </div>
        </div>
        <img src={data.imgUrl} alt="상세정보" />
        </Container>
        }
        </>
    );
}

export default ExhibitionDetails;