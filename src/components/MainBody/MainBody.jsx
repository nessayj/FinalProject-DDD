import React from "react";
import styled from "styled-components";


const BodyContainer = styled.div`
    width: 1200px;

    .open-display {
        background-color: pink;
        height: 30rem;
        .open-container {
            margin: 2rem;
            height: 80%;
            background-color: orange;
        }

    }
    .popular-display {
        background-color: orange;
        height: 30rem;
        display: flex;
        flex-direction: column;
        .title-container {
            display: flex;
            >h2 {
                margin: 0 2rem 0 0;
            }
        }

        .popular-container {
            margin: 2rem;
            height: 80%;
            background-color: pink;
        }
        
    }


`;

const MainBody = () => {



    return(
        <BodyContainer>
        <div className="open-display">
            <h2>오픈 전시</h2>
            <div className="open-container">
                API 이미지
            </div>
        </div>
        <div className="popular-display">
            <div className="title-container">
            <h2 className="week-ranking">금주의 랭킹</h2>
            <h2 className="loc-ranking">지역별 랭킹</h2>
            </div>
            <div className="popular-container">
                API 이미지
            </div>
        </div>
        </BodyContainer>

    );
}

export default MainBody;