import axios from "axios";
const DDD_DOMAIN = "http://localhost:8111"; // 백엔드에 대한 주소
const HEADER = {"Content-type" : "application/json"}

const LoginApi = {

    login : async(email, password) => {
        console.log('입력받은 이메일' + email)
        console.log('입력받은 패스워드' + password)
        const loginCheck = {
            email : email,
            password : password
        };
        return await axios.post(DDD_DOMAIN + "/login", loginCheck, HEADER);
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
        
        return await axios.post(DDD_DOMAIN + "/login/signup", signupCheck, HEADER);


    }

    


};

export default LoginApi;

    