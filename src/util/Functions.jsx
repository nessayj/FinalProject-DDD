import axios from "axios";

const KH_DOMAIN = "http://localhost:8111"


// 이 프로젝트 전역에서 두루 쓰이는 함수를 모아놓았습니다.
const Functions = {
    getMemberId : () => {
      return window.localStorage.getItem("memberId")
    },
    getLoginStatus : () => {
      return window.localStorage.getItem("isLogin")
    },


    fetchMemberDate : async (memberId, setMemberData, MyPageApi) => { 
      try {
        const memberInfoResponse = await MyPageApi.info(memberId);
        setMemberData(memberInfoResponse.data)
        if (memberInfoResponse.status === 200 && setMemberData){
        }
      } catch (e) {
        console.log(e);
      }
    },

    //accessToken 세터
    setAccessToken : (accessToken) => {
        window.localStorage.setItem("accessToken", accessToken);
      },
    //accessToken 게터
    getAccessToken : () => {
        // console.log('겟엑세스토큰함수 작동여부')
        // console.log( '2번째 줄 ' + window.localStorage.getItem("accessToken"))
        return window.localStorage.getItem("accessToken");
      },
    //refreshToken 세터
    setRefreshToken : (refreshToken) => {
        window.localStorage.setItem("refreshToken", refreshToken);
    },
    //refreshToken 게터
    getRefreshToken : () =>{
        return window.localStorage.getItem("refreshToken");
    },

    //  헤더에 AccessToken 설정하는 함수
    setAuthorizationHeader : () => {
        const accessToken = Functions.getAccessToken();
        console.log(`Setting Authorization Header with token: ${accessToken}`);
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        axios.defaults.headers.common['Content-Type'] = 'application/json';

      },

    // 토큰 재발급 함수
    tokenRenewal: async() => {
        try {
            // console.log('토큰 재발급 함수의 펑션 리프레시' + Functions.getRefreshToken())  // 정상 출력
            // console.log('funtions . 첫번째 엑세스토큰' + Functions.getAccessToken())  // 정상 출력

            const token = {
                refreshToken : Functions.getRefreshToken()
            }

            // console.log(`재발급 함수의 리프레시토큰 ${token.refreshToken.slice(-5)}`) // 재발급 함수의 리프레시토큰 [object Object]
            
            const rsp = await axios.post(KH_DOMAIN + "/login/auth/token", token)
            // console.log(`재발급 함수의 rsp 값 ${rsp}`)
            Functions.setAccessToken(rsp.data.accessToken); 
            // console.log('funtions . 두번째 엑세스토큰' + Functions.getAccessToken())  // 정상 출력
            Functions.setAuthorizationHeader();
            // console.log(`재발급 함수의 rsp의 엑세스토큰 값 ${rsp.data.accessToken.slice(-5)}`)

        } catch (error) {
            console.error('토큰 재발급 중 오류 발생:', error);
            // 에러 처리 로직을 여기에 추가하세요. 예를 들면 사용자에게 에러 메시지를 표시하는 것 등.
        }
    },

    

    handleApiError: async(error) => {
      if (error.response && error.response.status === 401) {
        // 토큰이 만료되었거나 유효하지 않은 경우
        await Functions.tokenRenewal();
        // console.log('에러 핸들 리프레시토큰 :.' + Functions.getRefreshToken())
        // console.log('에러 핸들 엑세스토큰:.' + Functions.getAccessToken())
        // Functions.setAuthorizationHeader();
        // console.log('핸들에 펑션 어떻게 ' + Functions.setAuthorizationHeader())

      } else {
        // 그 외의 오류 처리
        console.error('API 요청 오류:', error);
        // window.location.href = '/login';
      }
    }

}



export default Functions;