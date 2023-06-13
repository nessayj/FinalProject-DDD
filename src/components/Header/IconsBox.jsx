import React from "react";
import styled from "styled-components";
import {BsTicketPerforated} from 'react-icons/bs';
import {HiOutlineUser} from 'react-icons/hi';
import { useNavigate } from "react-router-dom";

const IconBox = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .ticket-icon {
        margin: 0.5rem;
    }

    .login-icon{
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        height: 2.5rem;
        width: 2.5rem;
        margin: 0.5rem;
        color: white;
        background-color: #5EADF7;
        border-radius: 2rem;
        cursor: pointer;
    }

    p {
        margin-right: 0.8rem;
        font-size: 1rem;
        font-weight: 550;
        cursor: pointer;
    }




`;



const Icons = () => {
    const navigate = useNavigate();

    const onClickToLogin = () => {
        navigate("/login");
    }



    return (
        <IconBox>
        <div className="ticket-icon">
        <BsTicketPerforated  size="30"/>
        </div>
        <div className="login-icon" onClick={onClickToLogin}>
        <HiOutlineUser size="27"/>
        </div>
        <p onClick={onClickToLogin}>로그인</p>
        
        </IconBox>


    );
}

export default Icons;