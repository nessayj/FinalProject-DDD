import React, { useEffect, useState } from 'react';

const MuseumInfo = () => {
  const [operInstitutionNm, setOperInstitutionNm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'http://api.data.go.kr/openapi/tn_pubr_public_museum_artgr_info_api';
        const serviceKey = '서비스키';
        const queryParams = new URLSearchParams();
        queryParams.append('serviceKey', serviceKey);
        // ...기타 쿼리 파라미터 추가...

        const response = await fetch(`${url}?${queryParams.toString()}`);
        const xmlText = await response.text();

        // XML 파싱
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

        // operInstitutionNm 값 추출
        const operInstitutionNm = xmlDoc.querySelector('operInstitutionNm').textContent;
        setOperInstitutionNm(operInstitutionNm);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>operInstitutionNm: {operInstitutionNm}</h1>
    </div>
  );
}

export default MuseumInfo;
