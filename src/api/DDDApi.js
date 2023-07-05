import axios from "axios";
const DDD_DOMAIN = "http://localhost:8111"; // 백엔드에 대한 주소
const HEADER = {"Content-type" : "application/json"}

const DDDApi = {

    // 자유게시판 카테고리별 리스트 조회 
    getFreeBoardsByCategory : async (category) => {
        return await axios.get(`${DDD_DOMAIN}/boardList/${category}`, HEADER);
    },

    // 특정 게시판 번호의 게시물 상세 조회(+댓글 포함)
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
    editBoards: async (boardNo, updateBoard) => {
        return await axios.put(`${DDD_DOMAIN}/boardList/boardView/${boardNo}`, updateBoard, HEADER);
    },


    // 게시글 삭제
    delBoards: async (boardNo) => {
        return await axios.delete(`${DDD_DOMAIN}/boardList/boardView/${boardNo}`, HEADER);
    },



    // 자유게시판 검색 목록 출력
    searchListLoad: async (keyword) => {
        const url = `${DDD_DOMAIN}/boardList/searchList?keyword=${keyword}`;
        console.log(url); // 해당 페이지 url 확인 위해
        return await axios.get(url, HEADER);
        // return await axios.get(DDD_DOMAIN + `/boardList/searchList?keyword=${keyword}`, HEADER); 
    },

    // 댓글 작성
    commentWrite: async (comment, getId, boardNo) => {
        const commentObj = {
            comment: comment,
            getId: getId,
            boardNo: boardNo
        }
        return await axios.post(DDD_DOMAIN + "/comments/commentWrite", commentObj, HEADER);
    },

    // 댓글 삭제 
    commentDelete : async (commentNo) => {
        return await axios.delete(`${DDD_DOMAIN}/comments/commentDelete/${commentNo}`, HEADER); 
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

    // 예매정보저장
    bookTicket: async(getId, exhibitNo, selectedDate,
        bookedName, bookedContact, bookedEmail, deliveryMethod) => {
            console.log("선택한날짜 : " + selectedDate);
            console.log("번호 " + exhibitNo, " 아이디 " + getId, ", 방문날짜 " + selectedDate, ", 예매자: " + bookedName, ", 전번 " + bookedContact , ", 이메일 " + bookedEmail
        +", 수령방법 : " + deliveryMethod);
        const booking = {
            id: getId,
            exhibitNo: exhibitNo,
            visitDate: selectedDate,
            bookedName: bookedName,
            bookedEmail: bookedEmail,
            bookedTel: bookedContact,
            getTicket: deliveryMethod
        };
        return await axios.post(DDD_DOMAIN + "/booking/newTicket", booking);
    },

    // 결제정보저장(무통장)
    bankingPayment: async(getId, bookingId, totalPrice, ticketCnt) =>{
        return await axios.post(DDD_DOMAIN + `/pay/banking?id=${getId}&bookingId=${bookingId}&paidPrice=${totalPrice}&paymentCnt=${ticketCnt}`);
    },

    // 카카오페이결제요청
    kakaopayReady: async(getId, exhibitNo, ticketCnt, totalPrice, bookingId) => {
        return await axios.post(DDD_DOMAIN + `/pay/kakaoReady?id=${getId}&exhibitNo=${exhibitNo}&quantity=${ticketCnt}&price=${totalPrice}&bookingId=${bookingId}`);
    },

    // 카카오페이결제성공(db저장)
    kakaopaySuccess: async(getId, pg_token, bookingId) => {
        return await axios.get(DDD_DOMAIN + `/pay/kakaoSuccess?id=${getId}&pg_token=${pg_token}&bookingId=${bookingId}`);
    }







};

export default DDDApi;