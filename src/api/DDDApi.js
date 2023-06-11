import axios from "axios";
const DDD_DOMAIN = "http://localhost:8111"; // 백엔드에 대한 주소

const DDDApi = {

    // 문의하기리스트 조회
    boardList: async(freeBoard_No) => { 
        const list = {
            freeBoard_No: freeBoard_No 
        };
        return await axios.get(DDD_DOMAIN + "/board_list", list);
    }
    
};

export default DDDApi;