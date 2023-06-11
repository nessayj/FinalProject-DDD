import React from "react";
import profile from "./../../resources/프로필.png";
import styled from "styled-components";
const reviewData = [
    {id : "kan04152",rating:5,text :"진짜 너무 좋았습니다.",imgUrl : "",booking: true, like :0},
    {id : "kan04153",rating:5,text :"진짜 너무 좋았습니다.",imgUrl : "",booking: false ,like :3}
]

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .reviewBox {
        width: 90%;
        margin: 1em;
       .rating{
        width: 350px;
        display: flex;
        justify-content: left;
        margin: 0 auto;
       }
        .textBox{
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
        input{
            width: 300px;
            height: 30px;
            
        }
        button {
            margin: 0;
            padding:0;
            width: 50px;
            border: none;
            background-color:#050E3D;
            color:  white;
            font-size: 1rem;
            height: 35px;
        }
        &>*{
            margin: 10px;
        }
    }
    .review{
        width: 80%;
    }

`;

const Review = styled.div`
    background-color: #F4F8FF;
    display: flex;
    flex-direction: row;
    border-radius: 20px;
    margin: 1rem;
    padding: 1em;
    img{
        border-radius:100px;
        width: 100px;
        height: 100px;
        margin-right: 30px;
    }
    .memberInfo{
        display: flex;
        flex-direction: row;
    }
`;

const ExhibitionReview = ({data}) => {


    return(

        <Container>
        <div className="reviewBox">
            <div className="rating">★★★★★</div>
            <div className="textBox"> 
            <input type="text" placeholder="이 전시에 대한 후기를 남겨주세요" />
            <button>입력</button>
            </div>
        </div>
        <div className="review">
                {reviewData.map((e,index) => (
                    <Review key={index}>
                     <img src={profile} alt="프로필" />
                    <div>
                    <div className="memberInfo">
                    <div>{e.id}</div>
                    <div>{e.rating}</div>                      
                    <div>{e.booking? "예매자":null}</div>
                    </div>
                    <div>{e.text}</div>
                    <div>{e.like}</div>
                    </div>  
                    </Review>
                ))}
        </div>
        

        </Container>
    );
}

export default ExhibitionReview;