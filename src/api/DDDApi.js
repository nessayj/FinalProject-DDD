import axios from "axios";
const DDD_DOMAIN = "http://localhost:8111"; // 백엔드에 대한 주소
const HEADER = {"Content-type" : "application/json"}

const DDDApi = {

    // 자유게시판 목록 조회
    boardList: async(freeBoard_No) => { 
        const list = {
            freeBoard_No: freeBoard_No 
        };
        return await axios.get(DDD_DOMAIN + "/board_list", list);
    },
    
    // 특정 게시판 번호의 게시물 내용 불러오기
    boardView: async(freeBoard_No) => {
        return await axios.get(DDD_DOMAIN + `/board_list/board_view?freeBoard_No=${freeBoard_No}`);
    },

    // 게시글 수정
    boardEdit: async(freeBoard_No, category, region, title, image, contents) => {
        const editObj = {
            freeBoard_No: freeBoard_No,
            boardCtg : category,
            boardregion : region, 
            title: title,
            boardImg : image,
            boardContents : contents
        };
        return await axios.post(DDD_DOMAIN + "/board_edit", editObj);
    },

    // 자유게시판 검색 목록 출력
    searchList: async (keyword) => {
        return await axios.get(DDD_DOMAIN + `board_list/?keyword=${keyword}`);
    },

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