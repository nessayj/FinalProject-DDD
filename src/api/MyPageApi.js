import axios from "axios";
import Functions from "../util/Functions";

const DDD_DOMAIN = "http://localhost:8111"; // 백엔드에 대한 주소 //
const HEADER = { "Content-type": "application/json" };

const updateProfileField = async (memberId, fieldName, fieldValue) => {
    try {
      Functions.setAuthorizationHeader(); // 헤더에 토큰을 넣는 함수
      return await axios.post(DDD_DOMAIN + `/mypage/${memberId}/${fieldName}`, {
        id: memberId,
        [fieldName]: fieldValue
      });
    } catch (error) {
      console.log("error입니다. ");
      // await Functions.handleApiError(error);  // api 에러 401을 받으면 로컬에 저장된 리프레쉬 토큰을 보내 액세스 토큰을 재발급 받는 axios 요청을 보내는 함수(await 필수)
      // return await axios.get(DDD_DOMAIN + `/mypage/info?email=${storageEmail}`); // 요청 재실행
    }
  };

const MyPageApi = {

    // 회원 정보 가져오기 
    info: async (memberId) => {
        try {
        Functions.setAuthorizationHeader(); // 헤더에 토큰을 넣는 함수
        return await axios.get(DDD_DOMAIN + `/mypage/${memberId}`); // 요청 리턴
        } catch (error) {
        console.log("error입니다. ");
        }
    },

    // 정보 변경 닉네임 중복 체크
    nicknamedup: async (memberId, inputNick) => {
        const nicknamedupCheck = {
        nickname: inputNick,
        }
        return await axios.post(DDD_DOMAIN + `/mypage/${memberId}/nicknamedup`, nicknamedupCheck, HEADER);
    },

    // 닉네임 변경
    nickname: (memberId, inputNick) => updateProfileField(memberId, 'nickname', inputNick),

    // 이름 변경
    name: (memberId, inputName) => updateProfileField(memberId, 'name', inputName),

    // 연락처 변경
    tel: (memberId, inputTel) => updateProfileField(memberId, 'tel', inputTel),

    // 인스타그램 변경
    instagram: (memberId, inputInst) => updateProfileField(memberId, 'instagram', inputInst),

    // 소개글 변경
    instroduce: (memberId, inputIntro) => updateProfileField(memberId, 'introduce', inputIntro),


        // // 닉네임 변경
        // nickname: async (memberId, inputNick) => {
        //     try {
        //         Functions.setAuthorizationHeader(); // 헤더에 토큰을 넣는 함수
        //         return await axios.post(DDD_DOMAIN + `/mypage/${memberId}/nickname`, {
        //             id: memberId,
        //             nickname: inputNick
        //         });
        //     } catch (error) {
        //         console.log("error입니다. ");
        //         //   await Functions.handleApiError(error);  // api 에러 401을 받으면 로컬에 저장된 리프레쉬 토큰을 보내 액세스 토큰을 재발급 받는 axios 요청을 보내는 함수(await 필수)
        //         //   return await axios.get(DDD_DOMAIN + `/mypage/info?email=${storageEmail}`); // 요청 재실행
        //     }
        // },

        // // 이름 변경
        // name: async (memberId, inputName) => {
        //     try {
        //         Functions.setAuthorizationHeader(); // 헤더에 토큰을 넣는 함수
        //         return await axios.post(DDD_DOMAIN + `/mypage/${memberId}/name`, {
        //             id: memberId,
        //             name: inputName
        //         });
        //     } catch (error) {
        //         console.log("error입니다. ");
        //         //   await Functions.handleApiError(error);  // api 에러 401을 받으면 로컬에 저장된 리프레쉬 토큰을 보내 액세스 토큰을 재발급 받는 axios 요청을 보내는 함수(await 필수)
        //         //   return await axios.get(DDD_DOMAIN + `/mypage/info?email=${storageEmail}`); // 요청 재실행
        //     }
        // },

    
};

export default MyPageApi;
