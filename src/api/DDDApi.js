import axios from "axios";
const DDD_DOMAIN = "http://localhost:8111"; // 백엔드에 대한 주소
const HEADER = {"Content-type" : "application/json"}

const DDDApi = {

    // 자유게시판 카테고리별 리스트 조회 
    getFreeBoardsByCategory : async (category) => {
        return await axios.get(`${DDD_DOMAIN}/boardList/${category}`, HEADER);
    },

    // 특정 게시판 번호의 게시물 상세 조회
    getBoard: async(boardNo) => {
        return await axios.get(`${DDD_DOMAIN}/boardList/boardView/${boardNo}`, HEADER);
    },

    // 게시글 작성
    boardWrite: async (getId, category, region, title, imageUrl, contents ) => {
        console.log("getId : "+ getId, "category : " + category, "region: " + region, "title: " + title, "image: " + imageUrl, "contents: " + contents )
        const postObj = {
            id: getId,
            category: category,
            region: region,
            title: title,
            image: imageUrl,
            contents: contents
        };
        return await axios.post(DDD_DOMAIN + "/boardList/write", postObj, HEADER);
    },

    // 게시글 수정
//     editBoards: async (boardNo, freeBoardDto) => {
//         return await axios.put(`${DDD_DOMAIN}/boardList/boardView/${boardNo}`, freeBoardDto, HEADER);
// },

    editBoards: async (boardNo, freeBoardDto) => {
        try {
        const response = await axios.put(`${DDD_DOMAIN}/boardList/boardView/${boardNo}`, freeBoardDto, HEADER);
        return response.data;
        } catch (error) {
        throw error;
        }
    },


    // 게시글 삭제
    // delBoards: async (boardNo) => {
    //     return await axios.delete(`${DDD_DOMAIN}/boardList/boardView/${boardNo}`, HEADER);
    // },

    delBoards: async (boardNo) => {
        try {
          const response = await axios.delete(`${DDD_DOMAIN}/boardList/boardView/${boardNo}`, HEADER);
          return response.data;
        } catch (error) {
          throw error;
        }
      },



    // // 자유게시판 검색 목록 출력
    // searchList: async (keyword) => {
    //     return await axios.get(DDD_DOMAIN + `board_list/?keyword=${keyword}`);
    // },
    

    // 로그인
    login : async(email, password) => {
        console.log('입력받은 이메일' + email)
        console.log('입력받은 패스워드' + password)
        const loginCheck = {
            email : email,
            password : password
        };
        return await axios.post(DDD_DOMAIN + "/login/login", loginCheck, HEADER);
    },
    
    // 전시 리스트 출력
    exhibitionList : async() => {
        return await axios.get(DDD_DOMAIN + "/exhibitions/dbList");
    }, 
    
    // 전시 상세정보
    exhibitDetail : async(exhibitNo) => {
        return await axios.get(DDD_DOMAIN + `/exhibitions/${exhibitNo}`);
    },

};

export default DDDApi;