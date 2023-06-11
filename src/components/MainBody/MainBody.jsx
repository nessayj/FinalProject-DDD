import React, { useState } from "react";
import styled from "styled-components";
import { DisplayData } from "./DisplayData";
import WeekRanking from "./WeekRanking";
import LocRanking from "./LocRanking";

const BodyContainer = styled.div`
    width: 1200px;
    margin: 0 auto;

    .open-display {
        margin-top: 4rem;
        height: 30rem;
        .open-container {
            margin: 2rem;
            height: 80%;
            >img {
            width: 20rem;
            height: 25rem;
        }
        }

    }
    .popular-display {
        margin-top: 4rem;
        height: 30rem;
        display: flex;
        flex-direction: column;
        .title-container {
            display: flex;
        }

        .popular-container {
            margin: 2rem;
            height: 80%;
        }
        
    }

`;

const TodayRec = styled.div`
        margin-top: 0;
        .today-container {
            display: flex;
            justify-content: space-evenly;
            margin-left: 0;
            width: 100%;
            height: 300px;
            background-color: skyblue;
            > .today-display {
                display: flex;
                align-items: center;
                justify-content: center;
                > img {
                width: 100%;
                height: 80%;
            }

            > .today-list {
                > h3 {
                    text-align: center;
                }
            }
        }
        }
        >h2 {
            width: 1200px;
            margin: 1rem auto;
        }
`

const StyledH2 = styled.h2`
    margin: 0 2rem 0 0;
    cursor: pointer;
    text-decoration: ${({ selected }) => selected ? 'underline' : 'none'};
    color: ${({ selected }) => selected ? 'black' : 'gray'};
`;

const MainBody = () => {
    // 오픈이미지
    const img2 = DisplayData[2];

    // 금주의랭킹, 지역별랭킹
    const [displayType, setDisplayType] = useState('week');

    const handleWeekRanking = () => {
        setDisplayType('week');
    };

    const handleLocRanking = () => {
        setDisplayType('loc');
    }

    // 오늘의 추천 임시이미지
    const img6 = DisplayData[5];
    const img7 = DisplayData[6];
    const img8 = DisplayData[7];


    return(
        <>
        <BodyContainer>
        <div className="open-display">
            <h2>오픈 전시</h2>
            <div className="open-container">
                <img src={img2} alt="오픈 전시 이미지" />
            </div>
        </div>
        <div className="popular-display">
            <div className="title-container">
                <StyledH2 selected={displayType === 'week'} onClick={handleWeekRanking}>금주의 랭킹</StyledH2>
                <StyledH2 selected={displayType === 'loc'} onClick={handleLocRanking}>지역별 랭킹</StyledH2>
            </div>
            <div className="popular-container">
                {displayType === 'week' ? <WeekRanking/> : <LocRanking/>}
            </div>
        </div>
        </BodyContainer>
        <TodayRec>
            <h2>오늘의 추천</h2>
            <div className="today-container">
                <div className="today-display">
                    <img src={img6} alt="전시1"/>
                </div>
                <div className="today-list">
                    <h3>MokStory</h3>
                    <h3>LostandFound</h3>
                    <h3>RUN HIDE TELL</h3>
                </div>
            </div>
        </TodayRec>
        </>

    );
}

export default MainBody;