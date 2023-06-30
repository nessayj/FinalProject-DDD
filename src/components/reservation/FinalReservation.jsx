import React from "react";
import styled from "styled-components";
import Button from "../../util/Button";
import { ImHome } from "react-icons/im";
import { Container } from "./SelectDate";


const FinalReservation = ({props}) => {


    return(
        <>
        <Container  imgUrl ={props.imgUrl}>
            <div className="reservationBox">
                <div className="root">
                <ImHome/><p onClick={props.handleCancle}>전시 상세정보 페이지</p>
                <p>{props.rootData[0]}</p>
                <p>{props.rootData[1]}</p>
                <p>{props.rootData[2]}</p>
                <p>{props.rootData[3]}</p>
                </div>
                <div className="bodyContainer">
               <div className="infoBox">
               <div className="imgBox"/>
                <div className="textBox">
                    <div className="title">{props.exhibitName}</div>
                    <div>{props.startDate} ~ {props.endDate}</div>
                    <div>{props.exhibitLocation}</div>
                </div>
               </div>
               <div className="rightBox">
               <div className="btnContainer">
               {props.deliveryMethod === "mobileTicket" && <Button >모바일티켓</Button>}
               {props.deliveryMethod === "onSite" && <Button >현장발권용티켓</Button>}
               <Button >예매확인</Button>
               </div>
               </div>
               </div>
            </div>
        </Container>
        </>
    )
}

export default FinalReservation;