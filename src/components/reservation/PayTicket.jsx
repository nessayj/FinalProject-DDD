import React,{useState} from "react";
import styled from "styled-components";
import { Container } from "./SelectDate";
import { ImHome } from "react-icons/im";
import { useLocation, useNavigate } from "react-router-dom";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import Button from "../../util/Button";


const PriceQuantityWrapper = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin-bottom: 1rem;
  div{float: left;}
  button {
    background-color: #fff;
    border: none;
    margin: 1rem;
  }
  .wrapperHeader{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 0.3rem;
  }
  h4{
    margin: 0;
  }
  .container{
    display: ${props => (props.isExpanded ? 'flex' : 'none')}; /* 수정: container의 표시 상태를 조건부로 설정 */
    flex-direction: column;
    margin: 1rem 0;
  }
`;

const BuyerInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin-bottom: 1rem;
  span{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  input {
    width: calc(80% - 0.8rem);
    height: 30px;
    background-color: #F4F8FF;
    border: 1px solid #5EADF7;
    margin: 0 0 0 2rem;
    border-radius: .3rem;
    padding-left: .8rem;
}
input:focus{
    background-color: #5EADF7;
    outline: none;
    color: white;
    ::placeholder{
    color: #F4F8FF;
    }
}
p{
  width: 20%;
}
.wrapperHeader{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 0.3rem;
  }
  h4{
    margin: 0;
  }
  .container{
    display: ${props => (props.isExpanded ? 'flex' : 'none')}; /* 수정: container의 표시 상태를 조건부로 설정 */
    flex-direction: column;
    margin: 1rem 0;
  }
`;

const RightContainer =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const ReservationButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  height: 2rem;
  margin-top: 2rem;
`;



const PayTicket = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state;

    const goToSelectDate = () => {
        navigate(`/reservation/${data.id}`);
    }

    const handleGoToHome = () => {
        navigate(`/exhibitInfo/${data.id}`);
    }

      // 전체 Wrapper 열리고 닫히게 
    const [isExpandedInputInfo, setIsExpandedInputInfo] = useState(false);
    const [isExpandedPrice, setIsExpandedPrice] = useState(false);
    


    const handleHeaderClickInput = () => {
        setIsExpandedInputInfo(!isExpandedInputInfo);
    };
    const handleHeaderClickPrice = () => {
        setIsExpandedPrice(!isExpandedPrice);
    };
    
    return(
        <Container imgUrl={data.reservationData.imgUrl}>
    <div className="reservationBox">
    <div className="root">
        <ImHome/><p onClick={handleGoToHome}>전시 상세정보 페이지</p>
        <p onClick={goToSelectDate}>{data.rootData[0]}</p>
        <p>{data.rootData[1]}</p>
        <p>{data.rootData[2]}</p>
    </div>
    <div className="bodyContainer">
    <div className="infoBox">
               <div className="imgBox"/>
                <div className="textBox">
                    <div className="title">{data.reservationData.exhibitName}</div>
                    <div>{data.reservationData.startDate} ~ {data.reservationData.endDate}</div>
                    <div>{data.reservationData.exhibitLocation}</div>
                </div>       
        </div>
        <div className="rightBox">
        <RightContainer>
         
      <BuyerInfoWrapper isExpanded={isExpandedInputInfo}>
        <div className="wrapperHeader" onClick={handleHeaderClickInput}>
        <h4>예매정보입력</h4>
        <MdOutlineKeyboardArrowDown style={{ transform: isExpandedInputInfo ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
        </div>
        <div className="container">
        <span><p>예매자</p>
        <input
            type="text"
            name="name"
            defaultValue={data.buyerInfo.name}
            disabled
        /></span>
        <span><p>연락처</p>
        <input 
            type="text"
            name="contact"
            defaultValue={data.buyerInfo.contact}
            disabled
            /></span>
        <span><p>이메일</p><input 
            type="text"
            name="email"
            defaultValue={data.buyerInfo.email}
            disabled
            /></span>
            </div>
      </BuyerInfoWrapper>
      <PriceQuantityWrapper isExpanded={isExpandedPrice}>
      <div className="wrapperHeader" onClick={handleHeaderClickPrice}>
        <h4>가격 정보</h4>
        <MdOutlineKeyboardArrowDown style={{ transform: isExpandedPrice? 'rotate(180deg)' : 'rotate(0deg)' }}/>
        </div>
      <div className="container">
        <div>
            {data.deliveryMethod === 'onSite' && <span>현장수령</span>}
            {data.deliveryMethod === 'mobileTicket' && <span>모바일티켓</span>}
        </div>
        <div>
        티켓 가격 : {data.price}원
        </div>
        <div>
        수량 : {data.quantity}
        </div>
        <div>
        총 가격  : {data.totalPrice}원
        </div>
      </div>
      </PriceQuantityWrapper> 
      <ReservationButtonWrapper>
        <Button>이전 단계</Button>
        <div>
            {data.paymentMethod === 'kakaoPay' && <button className="kakaoBtn">카카오페이</button>}
            {data.paymentMethod === 'banking' && <button className="bankingBtn">무통장입금</button>}
        </div>
      </ReservationButtonWrapper>
      </RightContainer>
      </div>   
      </div>
      </div>
    </Container>
    );
}

export default PayTicket;