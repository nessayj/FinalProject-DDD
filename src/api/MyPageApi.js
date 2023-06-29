import axios from "axios";
import Functions from "../util/Functions";

const DDD_DOMAIN = "http://localhost:8111"; // 백엔드에 대한 주소 //
const HEADER = { "Content-type": "application/json" };

const MyPageApi = {
    info: async (memberId) => {
        try {
        Functions.setAuthorizationHeader(); // 헤더에 토큰을 넣는 함수
        return await axios.get(DDD_DOMAIN + `/mypage/${memberId}`); // 요청 리턴
        } catch (error) {
        console.log("error입니다. ");
        //   await Functions.handleApiError(error);  // api 에러 401을 받으면 로컬에 저장된 리프레쉬 토큰을 보내 액세스 토큰을 재발급 받는 axios 요청을 보내는 함수(await 필수)
        //   return await axios.get(DDD_DOMAIN + `/mypage/info?email=${storageEmail}`); // 요청 재실행
        }
    },

    nickname: async (memberId, newNickname) => {
        try {
            Functions.setAuthorizationHeader(); // 헤더에 토큰을 넣는 함수
            return await axios.post(DDD_DOMAIN + `/mypage/${memberId}/nickname`, {
                id: memberId,
                nickname: newNickname
            }); // 요청 리턴
        } catch (error) {
            console.log("error입니다. ");
            //   await Functions.handleApiError(error);  // api 에러 401을 받으면 로컬에 저장된 리프레쉬 토큰을 보내 액세스 토큰을 재발급 받는 axios 요청을 보내는 함수(await 필수)
            //   return await axios.get(DDD_DOMAIN + `/mypage/info?email=${storageEmail}`); // 요청 재실행
        }
    },
    
};

export default MyPageApi;
