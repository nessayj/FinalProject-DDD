import React, { useEffect, useState } from "react";
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

const TodayRec = styled.div`
        margin-top: 0;
        .today-container {
            display: flex;
            justify-content: center;
            margin-left: 0;
            width: 100%;
            height: 300px;
            background-color: #5EADF7;
            .today-display {
                display: flex;
                align-items: center;
                justify-content: center;
                > img {
                width: 100%;
                height: 120%;
            }
        }
        }
        .today-list {
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                flex-direction: column;
                margin-left: 15rem;
                
                > h3 {
                    cursor: pointer;
                    &:hover {
                        font-weight: bold;
                        text-decoration: underline;
                    }
                }
            }
        h2 {
            width: 1200px;
            margin: 1rem auto;
        }
        .today-explanation {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin-right: 8rem;
            color: white;
            font-size: larger;
        }
`;
const StyledH3 = styled.h3`

    color: ${({ selected }) => (selected ? '#050E3D' : 'white')};
`;
const StyledH2 = styled.h2`
    margin: 0 2rem 0 0;
    cursor: pointer;
    text-decoration: ${({ selected }) => selected ? 'underline' : 'none'};
    color: ${({ selected }) => selected ? 'black' : 'gray'};
`;
const StyledHr = styled.hr`
  width: 15rem;
  height: 1px;
  background-color: white;
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
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleItemClick = (name) => {
        setSelectedItemName(name);
    }

   

    useEffect(() => {
        const startIndex = 5; // 시작 인덱스(Api 가지고오면 변경해야함)
        setSelectedItemName(DisplayData[startIndex].name);
        let currentIndex = startIndex;
      
        const interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % DisplayData.slice(5, 8).length;
        setSelectedItemName(DisplayData.slice(5, 8)[nextIndex].name);
        currentIndex = nextIndex;
        }, 3000);
      
        return () => clearInterval(interval);
      }, []);

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
        <TodayRec>
            <h2>오늘의 추천</h2>
            <div className="today-container">
                <div className="today-explanation">
                    {DisplayData.map((data, index) => (
                        <h3 key={index} style={{ display: selectedItemName === data.name ? 'block' : 'none' }}>
                            {data.name} <br /><br />
                            {data.date}
                        </h3>
                    ))}
                </div>
                <div className="today-display">
                    {DisplayData.map((data, i) => (
                        <img
                            key={i}
                            src={data.imgUrl}
                            alt={`전시${i+1}`}
                            style={{ display: selectedItemName === data.name ? 'block' : 'none' }}
                        />
                    ))}
                </div>
                <div className="today-list">
                    {DisplayData.slice(5, 8).map((data,index) => (
                        <StyledH3 selected={selectedItemName=== data.name}
                        key={index} onClick={() => handleItemClick(data.name)}>
                            {data.name}
                            <StyledHr />
                        </StyledH3>
                    ))}
                </div>
            </div>
        </TodayRec>
        </>

    );
}

export default MainBody;