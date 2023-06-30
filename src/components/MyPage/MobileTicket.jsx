import React from 'react';
import styled from 'styled-components';
import CancelTicket from './CancelTicket';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';


const Modal = styled.div`
    width: 20vw;
    height: 64vh;
    min-width: 500px;
    min-height: 700px;
    /* height: 70vh; */
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    border-radius: 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ccc;

    .closeBtn{
        /* color: white; */
        font-size: 1.4rem;
        border-radius: 1rem;
        width: 2rem;
        height: 4rem;
        padding-bottom: .2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        /* left: 44%; */
        top: 2%;
        cursor: pointer;
    }

    .title{
        font-size: 3rem;
        /* background-color: red; */
        padding: 1.5rem 0 ;
    }
    .exhImg{
        width: 50%;
        height: 20rem;
        /* background-color: aqua; */
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
            border: 1px solid #ccc;
        }
    }
    .desc{
        text-align: center;
        padding: 1rem;
        span{
            /* background-color: red; */
            line-height: 2rem;
        }
        p{
            font-size: 0.5rem;
            color: red;
        }

    }
    .btnBlock{
            height: 30%;
            width: 90%;
            display: flex;
            justify-content: center;
            /* background-color: red; */

            button{
                width: 22%;
                height: 2.3rem;
                border-radius: 3rem;
                margin : 0rem .5rem;
                background-color: #5EADF7 ;
                border: 1px solid #F4F8FF;
                color: white;
                font-size: .8rem;
                cursor: pointer;
                /* float : right; */
                display: flex;
                justify-content:center;
                align-items: center;
                .link{
                    text-decoration: none;
                    color: inherit;
                }
            }
        }
`;


const MobileTicket = ({ reservationData, closeModal, openCancel }) => {
    console.log("발권타입 : " + reservationData.deliveryMethod);
    // 날짜를 가지고와서 yy년 mm월 dd일로 표시하기위해
    const formatSelectedDate = (date) => {
        if (date) {
        return dayjs(date).format('YYYY년 MM월 DD일');
        }
        return '';
    };
    return (
        <Modal>
            <div className='closeBtn' onClick={closeModal}>&times;</div>

            <div className='title'>TICKET</div>
            <div className='exhImg'>
                <img src={reservationData.imgUrl} alt='exhibition' />
            </div>
            <div className="desc">
                <span style={{ fontWeight: 'bold' }}> {reservationData.name}</span><br />
                <span> {reservationData.place}</span><br />
                <span>관람일 : </span>
                <span> {reservationData.visitDate && formatSelectedDate(reservationData.visitDate) }</span><br />
                {/* 바코드번호 */}
                <span> {(reservationData.imgUrl).slice(52, 62)}</span>
                {/* 현장 발권일 때는 현장에서 실물표 교환 후 관람가능하다는 주의 문구 출력 */}
                {reservationData.deliveryMethod === "onSite" && <p>* 현장발권일경우 관람 전 실물 티켓으로 교환 후 관람가능합니다.</p>}<br />
            </div>
            <div className='btnBlock'>
                <button>
                    <Link to={`/exhibitInfo/${reservationData.index}`} className='link'>상세정보</Link></button>
                <button onClick={openCancel}>예매취소</button>
            </div>
        </Modal>

    );
};

export default MobileTicket;
