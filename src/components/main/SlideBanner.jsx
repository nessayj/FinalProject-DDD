import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { DisplayData } from './DisplayData';

const SlideContainer = styled.div`
  .RollDiv {
    margin: 0 auto;
    width: 100vw;
    height: 50vh;
    overflow: hidden;
  }
  .RollDiv > div {
    display: flex;
    animation: slideAnimation 15s linear infinite;
  }
  .RollDiv > div > a {
    display: inline-flex;
    align-items: center;
  }
  .RollDiv > div > a > img {
    width: 20rem;
    height: 25rem;
  }

  .RollDiv > div > a > p {
    font-weight: border;
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

function RollDiv() {
  const [anchors, setAnchors] = useState(DisplayData);

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setAnchors((prevAnchors) => {
        const updatedAnchors = [...prevAnchors, ...prevAnchors];
        return updatedAnchors.slice(1);
      });
    }, 5000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <SlideContainer>
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
