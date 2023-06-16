import React from "react";
import styled from "styled-components";
import {BsTicketPerforated} from 'react-icons/bs';
import {HiOutlineUser} from 'react-icons/hi';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const IconBox = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .ticket-icon {
        margin: 0.3rem 0.6rem 0 0.6rem;
        font-size: 1.9rem;
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
        font-size: 1.7rem;
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
        <BsTicketPerforated/>
        </div>
        <div className="login-icon" onClick={onClickToLogin}>
        <HiOutlineUser/>
        </div>
        <p onClick={onClickToLogin}>{t('login')}</p>
        </IconBox>


    );
}

export default Icons;