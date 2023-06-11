import React from "react";
import Button from "../../util/Button";
import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    &>*{
        margin: 10px;
    }
    .ratingBox{
        width: 300px;
        height: 50px;
        border : 2px solid black;
    }
    .btn {
        width: 100px;
        height: 30px;
    }

`;
const ComentBox = () => {


    return(

        <Container>
        <div className="ratingBox">평점박스</div>
        <div className="okText">평가가 완료되었습니다 </div>
        <div className="btn">
        <Button onClick={()=>console.log("마이페이지로이동")}>코멘트달기</Button>
        </div>
        </Container>
    );
}

export default ComentBox;