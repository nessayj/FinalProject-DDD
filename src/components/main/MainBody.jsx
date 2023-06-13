import React, { useState } from "react";
import styled from "styled-components";
import { DisplayData } from "./DisplayData";
import WeekRanking from "./WeekRanking";
import LocRanking from "./LocRanking";
import TodayRec from "./TodayRec";

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
            width: 16rem;
            height: 20rem;
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



    return(
        <>
        <BodyContainer>
        <div className="open-display">
            <h2>오픈 전시</h2>
            <div className="open-container">
                <img src={img2.imgUrl} alt="오픈 전시 이미지" />
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
        <TodayRec/>
        <BodyContainer>
        </BodyContainer>

        </>

    );
}

export default MainBody;