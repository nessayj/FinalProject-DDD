import React, { useState } from 'react';
import styled from 'styled-components';

const LocRankingContainer = styled.div`
    display: flex;
    margin: 1rem -1rem;
`;

const LocRankingImage = styled.img`
    width: calc(20% - 2rem);
    margin: 1rem;
`;

const LocationContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const LocationButton = styled.h4`
    margin: 0;
    margin-right: 10px;
    cursor: pointer;
    text-decoration: ${({ selected }) => selected ? 'underline' : 'none'};
    color: ${({ selected }) => selected ? 'black' : 'gray'};
    font-weight: ${({ selected }) => selected ? 'bold' : 'none'};
`;

const LocRanking = () => {
  const [selectedLocation, setSelectedLocation] = useState('seoul'); 

  const locationImages = {
    seoul: [
        "https://firebasestorage.googleapis.com/v0/b/final-ddd.appspot.com/o/%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B5%E1%84%92%E1%85%AC1.jpeg?alt=media&token=f4fa3f59-ef5a-406a-9dc7-6f4a0f3c0760&_gl=1*ynqlgj*_ga*MzE3NjcyODA1LjE2ODQyMDc5Njc.*_ga_CW55HF8NVT*MTY4NjQ5NzU1OS41LjEuMTY4NjQ5ODA1Ny4wLjAuMA..",
        "https://firebasestorage.googleapis.com/v0/b/final-ddd.appspot.com/o/%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B5%E1%84%92%E1%85%AC2.jpeg?alt=media&token=040f2f77-e447-42e9-8d5c-d9f8b8ad785a&_gl=1*vqi6u2*_ga*MzE3NjcyODA1LjE2ODQyMDc5Njc.*_ga_CW55HF8NVT*MTY4NjQ5NzU1OS41LjEuMTY4NjQ5ODA4My4wLjAuMA..",
        "https://firebasestorage.googleapis.com/v0/b/final-ddd.appspot.com/o/%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B5%E1%84%92%E1%85%AC3.jpeg?alt=media&token=0c62d83f-cad9-4931-96a4-d7d6d8e3cfa8&_gl=1*1o1nz3j*_ga*MzE3NjcyODA1LjE2ODQyMDc5Njc.*_ga_CW55HF8NVT*MTY4NjQ5NzU1OS41LjEuMTY4NjQ5ODA5Ny4wLjAuMA..",
        "https://firebasestorage.googleapis.com/v0/b/final-ddd.appspot.com/o/%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B5%E1%84%92%E1%85%AC4.jpeg?alt=media&token=65983a2b-cabf-433f-8043-f213791d6364&_gl=1*lcx369*_ga*MzE3NjcyODA1LjE2ODQyMDc5Njc.*_ga_CW55HF8NVT*MTY4NjQ5NzU1OS41LjEuMTY4NjQ5ODExMy4wLjAuMA..",
        "https://firebasestorage.googleapis.com/v0/b/final-ddd.appspot.com/o/%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B5%E1%84%92%E1%85%AC5.jpeg?alt=media&token=f3c51458-12bd-4350-a6ae-09e966e93e13&_gl=1*150mesx*_ga*MzE3NjcyODA1LjE2ODQyMDc5Njc.*_ga_CW55HF8NVT*MTY4NjQ5NzU1OS41LjEuMTY4NjQ5ODEyMi4wLjAuMA.."

    ],
    gyg: [
        "https://firebasestorage.googleapis.com/v0/b/final-ddd.appspot.com/o/%E1%84%80%E1%85%A7%E1%86%BC%E1%84%80%E1%85%B5%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B51.jpeg?alt=media&token=6cb09193-103a-4640-90ae-1fd2c93d60d7&_gl=1*147i054*_ga*MzE3NjcyODA1LjE2ODQyMDc5Njc.*_ga_CW55HF8NVT*MTY4NjUwMzk4OS42LjEuMTY4NjUwNDA0Mi4wLjAuMA..",
        "https://firebasestorage.googleapis.com/v0/b/final-ddd.appspot.com/o/%E1%84%80%E1%85%A7%E1%86%BC%E1%84%80%E1%85%B5%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B52.jpeg?alt=media&token=a4172e1c-5494-4737-9e52-4ba5d3033433&_gl=1*hckgkc*_ga*MzE3NjcyODA1LjE2ODQyMDc5Njc.*_ga_CW55HF8NVT*MTY4NjUwMzk4OS42LjEuMTY4NjUwNDA3Ni4wLjAuMA..",
        "https://firebasestorage.googleapis.com/v0/b/final-ddd.appspot.com/o/%E1%84%80%E1%85%A7%E1%86%BC%E1%84%80%E1%85%B5%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B53.jpeg?alt=media&token=41c23c72-2f6c-49c3-a2be-3c7d3a18a133&_gl=1*55l2lv*_ga*MzE3NjcyODA1LjE2ODQyMDc5Njc.*_ga_CW55HF8NVT*MTY4NjUwMzk4OS42LjEuMTY4NjUwNDA4OS4wLjAuMA..",
        "https://firebasestorage.googleapis.com/v0/b/final-ddd.appspot.com/o/%E1%84%80%E1%85%A7%E1%86%BC%E1%84%80%E1%85%B5%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B54.jpeg?alt=media&token=991f6444-096c-4613-9f0f-aa1891211989&_gl=1*cmjua2*_ga*MzE3NjcyODA1LjE2ODQyMDc5Njc.*_ga_CW55HF8NVT*MTY4NjUwMzk4OS42LjEuMTY4NjUwNDEwMi4wLjAuMA.."
    ],
    chw: [
        "https://firebasestorage.googleapis.com/v0/b/final-ddd.appspot.com/o/%E1%84%8E%E1%85%AE%E1%86%BC%E1%84%8E%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B51.jpeg?alt=media&token=3b38b70a-3e56-446d-84ee-35e40ea093e2&_gl=1*1j28sl8*_ga*MzE3NjcyODA1LjE2ODQyMDc5Njc.*_ga_CW55HF8NVT*MTY4NjUwMzk4OS42LjEuMTY4NjUwNDEyNS4wLjAuMA.."
    ],
    gje: [
        "https://firebasestorage.googleapis.com/v0/b/final-ddd.appspot.com/o/%E1%84%80%E1%85%AA%E1%86%BC%E1%84%8C%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B51.jpeg?alt=media&token=e6077ef1-e53b-413a-a0de-569560dad30e&_gl=1*5qlr6m*_ga*MzE3NjcyODA1LjE2ODQyMDc5Njc.*_ga_CW55HF8NVT*MTY4NjUwMzk4OS42LjEuMTY4NjUwNDE1OC4wLjAuMA.."
    ],
    bgn: [
        "https://firebasestorage.googleapis.com/v0/b/final-ddd.appspot.com/o/%E1%84%87%E1%85%AE%E1%84%89%E1%85%A1%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B51.jpeg?alt=media&token=8af518b5-8729-4077-961f-55a9b5f3fc3d&_gl=1*ovqev7*_ga*MzE3NjcyODA1LjE2ODQyMDc5Njc.*_ga_CW55HF8NVT*MTY4NjUwMzk4OS42LjEuMTY4NjUwNDM2Mi4wLjAuMA..",
        "https://firebasestorage.googleapis.com/v0/b/final-ddd.appspot.com/o/%E1%84%87%E1%85%AE%E1%84%89%E1%85%A1%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B52.jpeg?alt=media&token=5c0e5ae5-97f5-4708-88f9-534bb6e066c9&_gl=1*bvigzx*_ga*MzE3NjcyODA1LjE2ODQyMDc5Njc.*_ga_CW55HF8NVT*MTY4NjUwMzk4OS42LjEuMTY4NjUwNDM3My4wLjAuMA..",
        "https://firebasestorage.googleapis.com/v0/b/final-ddd.appspot.com/o/%E1%84%87%E1%85%AE%E1%84%89%E1%85%A1%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B53.jpeg?alt=media&token=8539c08b-5804-47f1-b6fb-dc005d7cc8d9&_gl=1*ivynhy*_ga*MzE3NjcyODA1LjE2ODQyMDc5Njc.*_ga_CW55HF8NVT*MTY4NjUwMzk4OS42LjEuMTY4NjUwNDM4NS4wLjAuMA.."
    ],
    dgb: [
        "https://firebasestorage.googleapis.com/v0/b/final-ddd.appspot.com/o/%E1%84%83%E1%85%A2%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B51.jpeg?alt=media&token=13636247-ee86-4fc1-b1a3-c375e246bf2e&_gl=1*ze1cpu*_ga*MzE3NjcyODA1LjE2ODQyMDc5Njc.*_ga_CW55HF8NVT*MTY4NjUwMzk4OS42LjEuMTY4NjUwNDQwMS4wLjAuMA.."
    ],
    jej: [
        "https://firebasestorage.googleapis.com/v0/b/final-ddd.appspot.com/o/%E1%84%8C%E1%85%A6%E1%84%8C%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B51.jpeg?alt=media&token=5b92b103-7730-41a1-a743-afdadf67a9da&_gl=1*yz1hcp*_ga*MzE3NjcyODA1LjE2ODQyMDc5Njc.*_ga_CW55HF8NVT*MTY4NjUwMzk4OS42LjEuMTY4NjUwNDQxOC4wLjAuMA.."
    ],
};

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div>
      <LocationContainer>
        <LocationButton selected={selectedLocation === 'seoul'} onClick={() => handleLocationClick('seoul')}>서울</LocationButton>
        <LocationButton selected={selectedLocation === 'gyg'} onClick={() => handleLocationClick('gyg')}>경기/인천</LocationButton>
        <LocationButton selected={selectedLocation === 'chw'} onClick={() => handleLocationClick('chw')}>충청/강원</LocationButton>
        <LocationButton selected={selectedLocation === 'gje'} onClick={() => handleLocationClick('gje')}>광주/전라</LocationButton>
        <LocationButton selected={selectedLocation === 'bgn'} onClick={() => handleLocationClick('bgn')}>부산/경남</LocationButton>
        <LocationButton selected={selectedLocation === 'dgb'} onClick={() => handleLocationClick('dgb')}>대구/경북</LocationButton>
        <LocationButton selected={selectedLocation === 'jej'} onClick={() => handleLocationClick('jej')}>제주</LocationButton>
      </LocationContainer>
      {selectedLocation && (
        <LocRankingContainer>
          {locationImages[selectedLocation].map((image, index) => (
            <LocRankingImage key={index} src={image} alt={`${selectedLocation} Ranking ${index + 1}`} />
          ))}
        </LocRankingContainer>
      )}
    </div>
  );
};

export default LocRanking;
