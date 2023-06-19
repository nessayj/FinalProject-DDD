import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { DisplayData } from './DisplayData';
import { useTranslation } from 'react-i18next';


const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  .title{
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: #050E3D;
  }

  .RollDiv {
    margin: 0 auto;
    width: 100vw;
    height: 50vh;
    overflow: hidden;
  }
  .RollDiv > div {
    display: flex;
    animation: slideAnimation 20s linear infinite;
  }
  .RollDiv > div > a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .RollDiv > div > a > img {
    margin-left: 1rem;
    width: 15rem;
    height: 20rem;
  }

  .RollDiv > div > a > p {
    font-weight: bold;
    font-size: 1rem;
  }

  @keyframes slideAnimation {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const RollDiv = () => {
  const {t} = useTranslation();
  const [anchors, setAnchors] = useState(DisplayData);

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setAnchors((prevAnchors) => {
        const updatedAnchors = [...prevAnchors, ...prevAnchors];
        return updatedAnchors;
      });
    }, 10000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    
    <SlideContainer>
      <div className='title'>
        <h2>{t('추천전시')}</h2>
      </div>
      <div className="RollDiv">
        <div>
        {anchors.map((anchor, index) => (
            <a key={index} href={anchor.href}>
                <img src={anchor.imgUrl} alt="" />
                <p>{anchor.name}</p>
            </a>
        ))}
        </div>
      </div>
    </SlideContainer>
    
  );
}

export default RollDiv;
