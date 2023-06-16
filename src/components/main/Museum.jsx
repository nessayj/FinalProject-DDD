import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const MuseumContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    .museum-title {
        margin-right: 2rem;
        @media (max-width: 768px) {
            font-size: 1.3rem;
            margin: 2rem;
        }
        
    }
    .museum-list {
        display: flex;
        flex-direction: row;
        @media (max-width: 768px) {
            font-size: 0.8rem;
        }
    }

    .museum-detail {
        margin-top: 2rem;
    }

`;

const MuseumClick = styled.h3`
    margin: 0;
    margin-right: 10px;
    cursor: pointer;
    text-decoration: ${({ selected }) => selected ? 'underline' : 'none'};
    color: ${({ selected }) => selected ? '#050E3D' : 'gray'};
    font-weight: ${({ selected }) => selected ? 'bold' : 'none'};

`;

const DetailContainer = styled.div`
    display: flex;
    margin: 1rem -1rem;
    .sub-detail-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        
    }

    .info-container{
        > h3{
            margin-bottom: 5rem;
        }
        @media (max-width: 768px) {
            font-size: 0.9rem;
            p{
                display: none;
            }
        }

    }
`;

const Image = styled.img`
    width: 50%;
    height: 100%;
    margin-right: 4rem;
    @media (max-width: 768px) {
        width: 20%;
        margin: 2rem;
    }

`;

const museumDetail = [
    {
        "id" : "national",
        "name" : "국립중앙박물관",
        "img" : "https://firebasestorage.googleapis.com/v0/b/final-ddd.appspot.com/o/%E1%84%80%E1%85%AE%E1%86%A8%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%87%E1%85%A1%E1%86%A8.jpeg?alt=media&token=0f0f43c4-f8e8-4fad-8948-3b331c178ccf",
        "location" : "04383 서울시 용산구 서빙고로 137 (용산동6가 168-6)",
        "price" : "무료"
    },
    {
        "id" : "modern",
        "name" : "국립현대미술관",
        "img" : "https://firebasestorage.googleapis.com/v0/b/final-ddd.appspot.com/o/%E1%84%80%E1%85%AE%E1%86%A8%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%87%E1%85%A1%E1%86%A8.jpeg?alt=media&token=0f0f43c4-f8e8-4fad-8948-3b331c178ccf",
        "location" : "04383 서울시 용산구 서빙고로 137 (용산동6가 168-6)",
        "price" : "가격상이"
    },
    {
        "id" : "leeum",
        "name" : "리움미술관",
        "img" : "https://firebasestorage.googleapis.com/v0/b/final-ddd.appspot.com/o/%E1%84%80%E1%85%AE%E1%86%A8%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%87%E1%85%A1%E1%86%A8.jpeg?alt=media&token=0f0f43c4-f8e8-4fad-8948-3b331c178ccf",
        "location" : "04383 서울시 용산구 서빙고로 137 (용산동6가 168-6)",
        "price" : "가격상이"
    }
]

const MuseumInfo = () => {
    const [view, setView] = useState('national');
    const handleMuseumClick = (name) => {
        setView(name);
    }
    const {t} = useTranslation();



    return(
        <>
        <MuseumContainer>
        <div className="museum-title">
            <h2>{t("inform of museum")}</h2>
        </div>
        <div className="museum-list">
            <MuseumClick selected={view === 'national'} onClick={() => handleMuseumClick('national')}>{t('nationalMuseum')}</MuseumClick>
            <MuseumClick selected={view === 'modern'} onClick={() => handleMuseumClick('modern')}>{t('modernMuseum')}</MuseumClick>
            <MuseumClick selected={view === 'leeum'} onClick={() => handleMuseumClick('leeum')}>{t('leeum')}</MuseumClick>
        </div>
        </MuseumContainer>
        {view && (
        <DetailContainer>
          {museumDetail
            .filter((museum) => museum.id === view)
            .map((museum) => (
              <div key={museum.id} className="sub-detail-container">
                <Image src={museum.img} alt={museum.name} />
                <div className="info-container">
                <h3>{museum.name}</h3>
                <p>{museum.location}</p>
                <p>{museum.price}</p>
                <button>바로가기</button>
                </div>
              </div>
            ))}
        </DetailContainer>
      )}
        </>
    );
}

export default MuseumInfo;