import React from "react";
import styled from "styled-components";
import {HiOutlineTicket} from 'react-icons/hi';
import { BsPersonCircle } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const IconBox = styled.div`
    
    display: flex;
    align-items: center;
    height: 5vh;

    .ticket-icon {
        margin: 0.3rem 0.6rem 0 0.6rem;
        font-size: 1.5rem;
    }

    .login-icon{
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        height: 2rem;
        width: 2rem;
        margin: 0.5rem;
        border-radius: 2rem;
        cursor: pointer;
        font-size: 1.4rem;
    }

    p {
        margin-right: 0.8rem;
        font-size: 1rem;
        font-weight: 550;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        .ticket-icon,
        .login-icon {
            height: 60%;
            width: 60%;
            font-size: 1.6rem;
            background-color: #fff;
            color: #050E3D;
        }

        p {
            display: none;
        }
    }
`;



const Icons = () => {
    const navigate = useNavigate();

    const onClickToLogin = () => {
        navigate("/login");
    }
    const {t} = useTranslation();

    return (
        <IconBox>
        <div className="ticket-icon">
        <HiOutlineTicket/>
        </div>
        <div className="login-icon" onClick={onClickToLogin}>
        <BsPersonCircle/>
        </div>
        </IconBox>


    );
}

export default Icons;