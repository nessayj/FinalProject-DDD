import axios from "axios";
import { getToken } from "../store"; // token값 받아오기
//const HEADER = {"Content-type" : "application/json"}
const DDD_DOMAIN = "http://localhost:8111"; // 백엔드에 대한 주소
const HEADER = {"Content-type" : "application/json"}



const LoginApi = {
    login : async(email, password) => {

        const loginCheck = {
            email : email,
            password : password
        };
        return await axios.post(`${DDD_DOMAIN}/login/`, loginCheck, HEADER); // config 부분 같이 날리기
    },
    
    signup : async(inputEmail, inputPwd, inputNick, inputName, inputTel, inputIns) => {
        const signupCheck = {
            email: inputEmail,
            password: inputPwd, 
            nickname: inputNick, 
            name: inputName, 
            tel: inputTel, 
            instagram: inputIns
        }
        
        return await axios.post(DDD_DOMAIN + "/login/signup", signupCheck);
    },
    
    findPassword : async(inputEmail) => {
        const findPasswordCheck = {
            email : inputEmail
        }
    return await axios.post(DDD_DOMAIN + "/login/forgot", findPasswordCheck);
    },

    emailSend : async(inputEmail) => {
        const emailSendCheck = {
            email : inputEmail
        }
    return await axios.post(DDD_DOMAIN + "/login/check-email-token?", emailSendCheck);
    },
    
    emaildup :async(inputEmail) => {
        const emaildupCheck = {
            email: inputEmail
        }
        return await axios.post(DDD_DOMAIN + "/login/emaildup", emaildupCheck);
    },

    nicknamedup :async(inputNick) => {
        const nicknamedupCheck = {
            nickname: inputNick, 
        }
        return await axios.post(DDD_DOMAIN + "/login/nicknamedup", nicknamedupCheck);
    }


    


};

export default LoginApi;

    