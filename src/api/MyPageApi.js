import axios from "axios";
const DDD_DOMAIN = "http://localhost:8111"; // 백엔드에 대한 주소
const HEADER = {"Content-type" : "application/json"}





const MyPageApi = {
    info : async(storageEmail) => {

        // token 값 설정
        const accessToken = window.localStorage.getItem('accessToken')
        // header 추가
        const config = {
            headers : {
                Authorization: `Bearer ${accessToken}`,
                ...HEADER, 
            },
            params : {
                email : storageEmail,
            },
        };

        return await axios.get(DDD_DOMAIN + "/mypage/info",  config); // config 부분 같이 날리기
    },
    
}

export default MyPageApi;
