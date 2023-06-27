import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../util/Button";
import {ImHome} from "react-icons/im";
import { useNavigate } from "react-router-dom";
import SelectDate from "./SelectDate";
import { Container } from "./SelectDate";
import Input  from "./Input";

const ReservationWrapper = styled.div`
  // 스타일링 설정
`;

const InfoWrapper = styled.div`
  // 스타일링 설정
`;

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
  h4{
    margin: 0 0 1rem 0;
  }
  .container{
    display: flex;
    flex-direction: column;
  }
`;

const BuyerInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
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
h4{
    margin: 0;
  }
  .container{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const DeliveryMethodWrapper = styled.div`
width: 100%;
  flex-direction: column;
  display: flex;
  gap: 0.2rem;
  h4{
    margin: 0;
    border: 1px solid black;
  }
  .container{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const PaymentMethodWrapper = styled.div`
  
  width: 100%;
  flex-direction: column;
  display: flex;
  gap: 0.2rem;
  h4{
    margin: 0;
  }
  .container{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const ReservationButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  height: 2rem;
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

const DeliveryMethodLabel = styled.label`
  /* 스타일링 설정 */
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
    // 예매 처리 로직
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
         
      <BuyerInfoWrapper>
      <h4>예매 정보</h4>
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
      </BuyerInfoWrapper>
      <PriceQuantityWrapper>
      <h4>가격 정보</h4>
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
      <DeliveryMethodWrapper>
        <h4>수령 방법</h4>
        <div className="container">
      <DeliveryMethodRadio
        type="radio"
        id="onSite"
        name="deliveryMethod"
        value="onSite"
        checked={deliveryMethod === 'onSite'}
        onChange={handleDeliveryMethodChange}
      />
      <DeliveryMethodLabel htmlFor="onSite">현장수령</DeliveryMethodLabel>
      <DeliveryMethodRadio
        type="radio"
        id="mobileTicket"
        name="deliveryMethod"
        value="mobileTicket"
        checked={deliveryMethod === 'mobileTicket'}
        onChange={handleDeliveryMethodChange}
      />
      <DeliveryMethodLabel htmlFor="mobileTicket">모바일티켓</DeliveryMethodLabel>
      </div>
      </DeliveryMethodWrapper>
      <PaymentMethodWrapper>
      <h4>결제정보</h4>
        <div className="container">
      <DeliveryMethodRadio
        type="radio"
        id="banking"
        name="payMethod"
        value="banking"
        checked={paymentMethod === 'banking'}
        onChange={handlePaymentMethodChange}
      />
      <DeliveryMethodLabel htmlFor="banking">무통장입금</DeliveryMethodLabel>
      <DeliveryMethodRadio
        type="radio"
        id="kakaoPay"
        name="payMethod"
        value="kakaoPay"
        checked={paymentMethod === 'kakaoPay'}
        onChange={handlePaymentMethodChange}
      />
      <DeliveryMethodLabel htmlFor="kakaoPay">카카오페이</DeliveryMethodLabel>
      </div>
      </PaymentMethodWrapper>
      <ReservationButtonWrapper>
        <Button>이전 단계</Button>
        <Button>결제 하기</Button>
      </ReservationButtonWrapper>
      </RightContainer>
      </div>   
      </div>
      </div>
    </Container>
  );
};

export default InputInfo;
