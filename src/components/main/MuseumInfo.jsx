import React,{useEffect} from "react";
import styled from "styled-components";

const MuseumInfo = () => {
    useEffect(() => {
        const fetchData = async () => {
          try {
            const url = 'http://api.data.go.kr/openapi/tn_pubr_public_museum_artgr_info_api';
            const serviceKey = '서비스키';
            const queryParams = new URLSearchParams();
            queryParams.append('serviceKey', serviceKey);
            queryParams.append('pageNo', '1');
            queryParams.append('numOfRows', '100');
            queryParams.append('type', 'xml');
            queryParams.append('fcltyNm', '');
            queryParams.append('fcltyType', '');
            queryParams.append('rdnmadr', '');
            queryParams.append('lnmadr', '');
            queryParams.append('latitude', '');
            queryParams.append('longitude', '');
            queryParams.append('operPhoneNumber', '');
            queryParams.append('operInstitutionNm', '');
            queryParams.append('homepageUrl', '');
            queryParams.append('fcltyInfo', '');
            queryParams.append('weekdayOperOpenHhmm', '');
            queryParams.append('weekdayOperColseHhmm', '');
            queryParams.append('holidayOperOpenHhmm', '');
            queryParams.append('holidayCloseOpenHhmm', '');
            queryParams.append('rstdeInfo', '');
            queryParams.append('adultChrge', '');
            queryParams.append('yngbgsChrge', '');
            queryParams.append('childChrge', '');
            queryParams.append('etcChrgeInfo', '');
            queryParams.append('fcltyIntrcn', '');
            queryParams.append('trnsportInfo', '');
            queryParams.append('phoneNumber', '');
            queryParams.append('institutionNm', '');
            queryParams.append('referenceDate', '');
            queryParams.append('instt_code', '');
            const response = await fetch(`${url}?${queryParams.toString()}`);
            const data = await response.text();
            console.log(data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
    
      return <div>Hello React!</div>;
}

export default MuseumInfo;
