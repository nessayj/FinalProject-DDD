import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../util/Button";
import {ImHome} from "react-icons/im";
import { useNavigate } from "react-router-dom";
import SelectDate from "./SelectDate";
import { Container } from "./SelectDate";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";

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

const DeliveryMethodWrapper = styled.div`
width: 100%;
  flex-direction: column;
  display: flex;
  gap: 0.2rem;
  margin-bottom: 1rem;
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
    flex-direction: row;
    align-items: center;
    margin: 1rem 0;
  }
`;

const PaymentMethodWrapper = styled.div`
  
  width: 100%;
  flex-direction: column;
  display: flex;
  gap: 0.2rem;
  margin-bottom: 1rem;
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
    flex-direction: row;
    align-items: center;
    margin: 1rem 0;
  }
`;

const ReservationButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  height: 2rem;
  margin-top: 2rem;
`;
const RightContainer =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;
const DeliveryMethodRadio = styled.input`
  margin: 1rem;
  
`;


const InputInfo = ({rootData, reservationData}) => {
  // 예매 관련 상태 및 함수
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  let price = 0;
  // 넘어오는 가격의 값이 문자열일경우와 그냥 숫자일 경우 다르게 처리
  if (typeof reservationData.exhibitPrice === 'string') {
    const priceString = reservationData.exhibitPrice.replace(/[^0-9]/g, '');
    // 문자부분제거 후 앞 4자리숫자만 사용하여 티켓값 추출
    const trimmedPriceString = priceString.substring(0, 4);
    // 무료일경우 0값출력
    if (trimmedPriceString !== '') {
      price = parseFloat(trimmedPriceString);
    }
  } else if (typeof reservationData.exhibitPrice === 'number') {
    price = reservationData.exhibitPrice;
  }
  const [totalPrice, setTotalPrice] = useState(price * quantity);
  
  const [buyerInfo, setBuyerInfo] = useState({
    name: "",
    contact: "",
    email: "",
  });
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  // 수량에 따른 가격변화
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice(price * (quantity-1));
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    setTotalPrice(price * (quantity+1));
  };
  // 수령방법
  const handleDeliveryMethodChange = (e) => {
    setDeliveryMethod(e.target.value);
  };
  // 결제방법
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  // 예매자 정보
  const handleBuyerInfoChange = (e) => {
    const { name, value } = e.target;
    setBuyerInfo((prevBuyerInfo) => ({
      ...prevBuyerInfo,
      [name]: value,
    }));
  };

  // 예매하기 버튼 클릭 핸들러
  const handleReservation = () => {
    navigate("/payment");
  };

  // 전체 Wrapper 열리고 닫히게 
  const [isExpandedDeliever, setIsExpandedDeliever] = useState(false);
  const [isExpandedPayment, setIsExpandedPayment] = useState(false);
  const [isExpandedInputInfo, setIsExpandedInputInfo] = useState(false);
  const [isExpandedPrice, setIsExpandedPrice] = useState(false);
  


  const handleHeaderClick = () => {
    setIsExpandedDeliever(!isExpandedDeliever);
  };
  const handleHeaderClickPay = () => {
    setIsExpandedPayment(!isExpandedPayment);
  };
  const handleHeaderClickInput = () => {
    setIsExpandedInputInfo(!isExpandedInputInfo);
  };
  const handleHeaderClickPrice = () => {
    setIsExpandedPrice(!isExpandedPrice);
  };


  // 전시상세정보페이지로 다시 이동
  const handleGoToHome = () => {
    navigate(-1)
  }
  //이전단계이동
  const handleGoBack = () => {
    navigate(<SelectDate/>)
  }

  return (
    <Container imgUrl ={reservationData.imgUrl}>
    <div className="reservationBox">
    <div className="root">
        <ImHome/><p onClick={handleGoToHome}>전시 상세정보 페이지</p>
        <p onClick={handleGoBack}>{rootData[0]}</p>
        <p>{rootData[1]}</p>
    </div>
    <div className="bodyContainer">
    <div className="infoBox">
               
               <div className="imgBox"/>
                <div className="textBox">
                    <div className="title">{reservationData.exhibitName}</div>
                    <div>{reservationData.startDate} ~ {reservationData.endDate}</div>
                    <div>{reservationData.exhibitLocation}</div>
                </div>       
        </div>
        <div className="rightBox">
        <RightContainer>
         
      <BuyerInfoWrapper isExpanded={isExpandedInputInfo} >
        <div className="wrapperHeader">
        <h4 onClick={handleHeaderClickInput}>예매정보입력</h4>
        <MdOutlineKeyboardArrowDown style={{ transform: isExpandedInputInfo ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
        </div>
        <div className="container">
        <span><p>예매자</p><input 
              type="text"
              name="name"
              value={buyerInfo.name}
              onChange={handleBuyerInfoChange}/></span>
        <span><p>연락처</p><input 
              type="text"
              name="contact"
              value={buyerInfo.contact}
              onChange={handleBuyerInfoChange} /></span>
        <span><p>이메일</p><input 
              type="text"
              name="email"
              value={buyerInfo.email}
              onChange={handleBuyerInfoChange} /></span>
              </div>
      </BuyerInfoWrapper>
      <PriceQuantityWrapper isExpanded={isExpandedPrice} >
      <div className="wrapperHeader">
        <h4 onClick={handleHeaderClickPrice}>가격 정보</h4>
        <MdOutlineKeyboardArrowDown style={{ transform: isExpandedPrice? 'rotate(180deg)' : 'rotate(0deg)' }}/>
        </div>
      <div className="container">
        <div>
        가격 : {reservationData.exhibitPrice}
        </div>
        <div>
            수량 :
            <button onClick={handleDecrease}>-</button>
            {quantity}
            <button onClick={handleIncrease}>+</button>
        </div>
        <div >
            총 가격 : {totalPrice}원
        </div>
        </div>
        </PriceQuantityWrapper>  
      <DeliveryMethodWrapper isExpanded={isExpandedPayment} onClick={handleHeaderClickPay}>
        <div className="wrapperHeader">
        <h4>수령 방법</h4>
        <MdOutlineKeyboardArrowDown style={{ transform: isExpandedPayment ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
        </div>
        <div className="container">
      <DeliveryMethodRadio
        type="radio"
        id="onSite"
        name="deliveryMethod"
        value="onSite"
        checked={deliveryMethod === 'onSite'}
        onChange={handleDeliveryMethodChange}
      />
      <label htmlFor="onSite">현장수령</label>
      <DeliveryMethodRadio
        type="radio"
        id="mobileTicket"
        name="deliveryMethod"
        value="mobileTicket"
        checked={deliveryMethod === 'mobileTicket'}
        onChange={handleDeliveryMethodChange}
      />
      <label htmlFor="mobileTicket">모바일티켓</label>
      </div>
      </DeliveryMethodWrapper>
      <PaymentMethodWrapper isExpanded={isExpandedDeliever} onClick={handleHeaderClick}>
      <div className="wrapperHeader">
        <h4>가격 정보</h4>
        <MdOutlineKeyboardArrowDown style={{ transform: isExpandedDeliever ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
        </div>
        <div className="container">
      <DeliveryMethodRadio
        type="radio"
        id="banking"
        name="payMethod"
        value="banking"
        checked={paymentMethod === 'banking'}
        onChange={handlePaymentMethodChange}
      />
      <label htmlFor="banking">무통장입금</label>
      <DeliveryMethodRadio
        type="radio"
        id="kakaoPay"
        name="payMethod"
        value="kakaoPay"
        checked={paymentMethod === 'kakaoPay'}
        onChange={handlePaymentMethodChange}
      />
      <label htmlFor="kakaoPay">카카오페이</label>
      </div>
      </PaymentMethodWrapper>
      <ReservationButtonWrapper>
        <Button>이전 단계</Button>
        <Button onClick={handleReservation}>결제 하기</Button>
      </ReservationButtonWrapper>
      </RightContainer>
      </div>   
      </div>
      </div>
    </Container>
  );
};

export default InputInfo;
