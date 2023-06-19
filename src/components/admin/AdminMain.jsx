import React, { useState } from "react";
import styled from "styled-components";
import AdminNav from "./AdminNav";
import Header from "../header/Header";
import DashBoard from "./Dashboard";
import Members from "./Members";

const AdminmainContainer = styled.div`
    display: flex;
    flex-direction: row;
    


`


const AdminMain = () => {
    const [currentMenuItem, setCurrentMenuItem] = useState("dashboard");






    return(
        <>
        <Header/>
        <AdminmainContainer>
        
        <AdminNav activeMenuItem={currentMenuItem} setCurrentMenuItem={setCurrentMenuItem}/>
        {currentMenuItem === "dashboard" && <DashBoard/>}
        {currentMenuItem === "members" && <Members/>}
        
        
        </AdminmainContainer>
        </>
    );
}

export default AdminMain;