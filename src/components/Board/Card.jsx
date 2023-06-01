import React from "react"
import styled from "styled-components";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { CardData } from "./CardData";


const CardContainer = styled.div`
    max-width: 100em;
    display: grid;
    grid-template-columns: repeat(auto-fit, 18em); // 반복(자동맞춤, 카드 크기)
    justify-content: center;
    margin: 2rem;
    gap: 1rem;
    transition: width 1s, height 1s, box-shadow 1s;
    

    * {
        margin: 2rem;
        box-sizing: border-box;
        margin: 0;
        padding:0;
    }
    .container {
        overflow: hidden; /* 영역을 벗어날 시 가려짐 */
        box-shadow: 0 2px 8px 0;
        background-color: #ffffff;
        text-align: center;
        border-radius: 1rem;
        position: relative;
        margin: 0.8rem;
        cursor: pointer;

        &:hover {
            transform: scale(1.1); // 호버 시 확대 효과
            box-shadow: 0 0 15px 0;
        }
    }

    .cardimage {
        width: 100%;
        height: 14rem;
    }

    .cardtitle, .cardnickname, .datearea {
        text-align: left;
        margin-left: 1rem;
        margin: .4rem;
        font-weight: bold;
        font-family: 'Pretendard-regular';
    }
    
    .viewarea, .replyarea {
        margin-left: .2em; // 아이콘과 숫자 사이 여백
        margin-top: .2em; // 아이콘 옆 숫자 위치
        font-size: 1em;
        
    }

    .icon-container {
        /* border-top: 2px solid #ccc; */
        display: flex;
        justify-content: flex-end;
        margin-right: 1.5rem;

        .icon {
        margin-left: 1.2rem;
        font-size: 1.6rem;   
        
        }
    }
`;


export const Card = () => {
    
    return(
        <CardContainer>
            {CardData.map((data, index) => (
            <div className="container" key={index}>
                <div className="img_area"></div>
                    <img src={data.imageUrl} alt="CardImage" className="cardimage" />
                    <h3 className="cardtitle">{data.title}</h3>
                    <div className="cardnickname">{data.nickname}</div>
                    {data.date && <div className="datearea">{data.date}</div>}
                    <div className="icon-container">
                        <IoMdEye className="icon" /> 
                        {data.view && <div className="viewarea">{data.view}</div>}
                        <IoChatbubbleEllipses className="icon" />
                        {data.reply && <div className="replyarea">{data.reply}</div>} 
                    </div>
            </div>
        ))}
      </CardContainer>
        
    )
}
export default Card;