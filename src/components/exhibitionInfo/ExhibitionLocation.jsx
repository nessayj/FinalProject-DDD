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
    .map{
        width: 80%;
        height: 300px;
        background-color:#F4F8FF ;
        border: 2px solid #050E3D;
        text-align: center;
    }

`;


const ExhibitionLocation = ({data}) => {


    return(

        <>
        {data &&
        <Container>
        <div className="textBox">
        <div className="title">전시 장소 위치</div>
        <div>전시장소</div>
        </div>
        <div className="map">지도 들어올자리</div>
        <div className="textBox">
        <div>주소 : </div>
        <div>전화번호 : </div>
        <div>홈페이지 : </div>
        <div>주차 안내 : </div>
        </div>
        </Container>
        }
        </>
    );
}

export default ExhibitionLocation;