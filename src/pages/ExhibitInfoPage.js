import React from "react";
import { useParams } from "react-router-dom";
import exhibitionData from "../components/exhibition/exhibitionData";
import { useEffect } from "react";
import { useState } from "react";
const ExhibitInfoPage = () => {

    const { id } = useParams();
    const [exData, setExData] = useState(null);

    useEffect(() => {
      const dataInfo = () => {
        console.log(typeof(id));
        const foundData = exhibitionData.find((item) => item.index === parseInt(id));
        setExData(foundData);
      };
  
      dataInfo();
    }, [id]);
  
    useEffect(() => {
      if (exData) {
        console.log(exData);
      }
    }, [exData]);
  
    return <>{exData ? console.log(exData):"없음"}</>;
  };


export default ExhibitInfoPage;