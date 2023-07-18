import axios from "axios";
const DDD_DOMAIN = "http://localhost:8111"; // 백엔드에 대한 주소
const HEADER = {"Content-type" : "application/json"}

const DDDApi = {

    // 자유게시판 카테고리별 리스트 조회 
    getFreeBoardsByCategory : async (category) => {
        // return await axios.get(`boardList/${category}`, HEADER);
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
        return await axios.post( DDD_DOMAIN + "/boardList/write", postObj , HEADER);
    },

    // 이전글 & 다음 게시글 조회 (최종)
    getPrevAndNextBoard: async (currentBoardNo) => {
        try {
          const response = await axios.get(`${DDD_DOMAIN}/boardList/${currentBoardNo}/navigate`, HEADER);
          console.log(response.data); // 응답 데이터 출력
          return response; // 응답 반환
        } catch (error) {
          console.log(error); // 에러 로그 출력
          throw error; // 에러 throw
        }
    },


    // 게시글 수정
    editBoards: async (boardNo, category, region, title, contents, imageUrl) => {
        const editObj = {
            boardNo: boardNo,
            category: category,
            region: region,
            title: title,
            contents: contents,
            image: imageUrl
        };
        return await axios.post(`${DDD_DOMAIN}/boardList/boardView/${boardNo}`, editObj, HEADER);
    },


    // 게시글 삭제
    delBoards: async (boardNo) => {
        return await axios.delete(`${DDD_DOMAIN}/boardList/boardView/${boardNo}`, HEADER);
    },

    // 자유게시판 검색 목록 출력(2차 수정)
    searchListLoad: async (keyword) => {
        return await axios.get(`${DDD_DOMAIN}/boardList/searchList?keyword=${keyword}`, HEADER);
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

    // 마이페이지 내 게시글 조회
    getBoardsByMember: async (memberId) => {
        return await axios.get(`${DDD_DOMAIN}/boardList/members/${memberId}/boards`, HEADER);
    }, 
    
    // 마이페이지 내 댓글 조회
    commentLoad: async (memberId) => {
        return await axios.get(`${DDD_DOMAIN}/comments/members/${memberId}/comments`, HEADER);
    },


    // 로그인
    login : async(email, password) => {
        console.log('입력받은 이메일' + email)
        console.log('입력받은 패스워드' + password)
        const loginCheck = {
            email : email,
            password : password
        };
        return await axios.post( DDD_DOMAIN + "/login/login", loginCheck, HEADER);
    },
    
    // 전시 리스트 출력
    exhibitionList : async() => {
        // return await axios.get(DDD_DOMAIN + "/exhibitions/dbList");
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

    // 전시상세 한줄평작성
    writeExhibitComment: async(getId, exhibitNo, stars, comment) => {
        return await axios.post(DDD_DOMAIN + `/exhibitComment/write?id=${getId}&exhibitNo=${exhibitNo}&starRates=${stars}&comment=${comment}`);
    },

    // 전시상세 한줄평출력
    commentList: async(exhibitNo) =>{
        return await axios.get(DDD_DOMAIN + `/exhibitComment/list?exhibitNo=${exhibitNo}`);
    }


};

export default DDDApi;