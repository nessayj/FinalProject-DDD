import React, {useState, useEffect} from "react";
import { DisplayData } from "./DisplayData";
import styled from "styled-components";

const TodayRecStyle = styled.div`
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

const StyledHr = styled.hr`
  width: 15rem;
  height: 1px;
  background-color: white;
`;
const StyledH3 = styled.h3`

    color: ${({ selected }) => (selected ? '#050E3D' : 'white')};
`;
const TodayRec = () => {
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



    return (
        <TodayRecStyle>
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
        </TodayRecStyle>


    );
}

export default TodayRec;