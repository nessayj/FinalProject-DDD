import React from "react";
import styled from "styled-components";
import {CiLogin} from "react-icons/ci";
import {BiKey} from "react-icons/bi";
import AdminImg from "../../resources/프로필.png";

const Navcontainer = styled.div`
    width: 20vw;
    height: 100vh;
    background-color: #050E3D;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .admin-login{
        margin-bottom: 1.5rem;
        >h2{
        text-align: center;
        }
        >div {
        font-size: 1.5rem;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        }
        .photo-container > img{
            width: 5.5rem;
            border-radius: 50%;
        }
    }

    .list-container{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        cursor: pointer;
        >h2 {
            width: 100%;
            padding: 1.5rem;
            margin: 0;
            transition: background-color 0.3s, color 0.3s; 
            &.active {
                background-color: white;
                color: #050e3d;
            }
        }

        h2:hover {
        background-color: white;
        color: #050e3d; 
        }
        
    }

    .menu {
        width: 100%;
        
    }
`;




const AdminNav = ({activeMenuItem, setCurrentMenuItem}) => {
    const handleMenuItem = (menuItem) => {
        setCurrentMenuItem(menuItem);
    };



    return(
        <Navcontainer>
            <div className="admin-login">
                <div className="photo-container">
                    <img src={AdminImg} alt="관리자프로필" />
                </div>
                <h2>ADMIN</h2>
                <div>
                <CiLogin/>
                <BiKey/>
                </div>
            </div>
            <div className="menu">
            <div className="list-container">
            <h2
                className={activeMenuItem === "dashboard" ? "active" : ""}
                onClick={() => handleMenuItem("dashboard")}
            >대시보드</h2>
            <h2
                className={activeMenuItem === "members" ? "active" : ""}
                onClick={() => handleMenuItem("members")}
            >회원관리</h2>
            <h2
                className={activeMenuItem === "reservation" ? "active" : ""}
                onClick={() => handleMenuItem("reservation")}
            >예매관리</h2>
            <h2
                className={activeMenuItem === "boards" ? "active" : ""}
                onClick={() => handleMenuItem("boards")}
            >게시판관리</h2>
            <h2
                className={activeMenuItem === "exhibitions" ? "active" : ""}
                onClick={() => handleMenuItem("exhibitions")}
            >전시관리</h2>
            <h2
                className={activeMenuItem === "ads" ? "active" : ""}
                onClick={() => handleMenuItem("ads")}
            >광고관리</h2>
            </div>
            </div>
        </Navcontainer>
    );
}

export default AdminNav;