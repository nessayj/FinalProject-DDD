import React, { useState } from "react";
import MyPageBG from "../components/MyPage/MyPageBG";
import EditMemberMain from "../components/MyPage/EditMemberMain";
import Header from "./main/Header";

const MyPage = () => {
    const [showPage, setShowPage ] = useState(1)

    return(
        <>

        <MyPageBG/>

        
        </>
    );
}

export default MyPage;