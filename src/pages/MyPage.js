import React from "react";
import MyPageBG from "../components/MyPage/MyPageBG";

const MyPage = () => {
    const removeLocalstorage = () =>{
        localStorage.removeItem("isLogin");
        localStorage.removeItem("storageEmail");
        localStorage.removeItem("memberId");
        localStorage.removeItem("accessToken");
    }

    return(
        <>
        <button onClick={removeLocalstorage}>로그아웃</button>
            <MyPageBG/>
            
        </>
    );
}

export default MyPage;