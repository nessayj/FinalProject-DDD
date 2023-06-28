import React,{useState} from "react";
import styled from "styled-components";
import { ImHome } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import Button from "../../util/Button";
import InputInfo from "./InputInfo";
import {RiKakaoTalkFill} from "react-icons/ri";

const PayContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    .header { 
        width: 100%;
        height: 170px;
        
    }
    .reservationBox{
        background-color: #F4F8FF;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 20px;
        gap: 1rem;
        border-radius: 10px;
    }
    .bodyContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .root{
        display: flex;
        align-items: center;
        gap: 0.2rem;
        flex-direction: row;
        text-align: left;
        width: 100%;
        p{
            cursor: pointer;
        }
    }
    .infoBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    margin: 20px;
   
    .imgBox{
        margin-top: 1rem;
        overflow: hidden;
        width: 13rem;
        height: 20rem;
        position: relative;
        background-image: url(${props => props.imgUrl});
        background-repeat: no-repeat;
        background-size:cover;
       
    }
    .textBox{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .title{
            margin-top: 10px;
            font-size: 1rem;
            font-weight: bold;
        }
        &>*{
            margin-bottom: 10px;
        }
    }
}
.rightBox{
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
        .btnContainer{
            width: 15rem;
            height: 2rem;
            display: flex;
            flex-direction: row;
            margin-top: 1rem;
            gap: 1rem;
        }
        .calendar-container{
            width: 20rem;
        }
    }
    

`

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
    margin: 1rem;
    p{
        font-weight: bold;
    }
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }
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
    background-color: #5EADF7;
    border: 1px solid #5EADF7;
    color: white;
    margin: 0 0 0 2rem;
    border-radius: .3rem;
    padding-left: .8rem;
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
    margin: 1rem;

  }
`;

const RightContainer =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const PolicyWrapper = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin-bottom: 1rem;
    .agreePersonal{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .agreeAll{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .agreeCancle{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .agreeProvideInfo{
        display: flex;
        flex-direction: row;
        align-items: center;
        
    }
    .container{
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

    
`;

const ReservationButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  height: 2rem;
  margin-top: 2rem;
  .kakaoBtn{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

`;

// 이용약관동의
const PolicyCheckbox = ({ label, checked, onChange }) => {
    return (
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        {label}
      </label>
    );
  };
  


const PayTicket = ({data}) => {
    const navigate = useNavigate();

    // InputInfo로 돌아가기위해 
    const [showInputInfo, setShowInputInfo] = useState(false);
    const goToInputInfo = () => {
        setShowInputInfo(true);
    }



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

    // 약관동의
    const [agreeAll, setAgreeAll] = useState(false);
    const [agreeCancel, setAgreeCancel] = useState(false);
    const [agreePersonal, setAgreePersonal] = useState(false);
    const [agreeProvideInfo, setAgreeProvideInfo] = useState(false);
    
    const handleAgreeAllChange = (e) => {
        const checked = e.target.checked;
        setAgreeAll(checked);
        setAgreeCancel(checked);
        setAgreePersonal(checked);
        setAgreeProvideInfo(checked);
      };
    
      const handleAgreeCancelChange = (e) => {
        setAgreeCancel(e.target.checked);
      };
    
      const handleAgreePersonalChange = (e) => {
        setAgreePersonal(e.target.checked);
      };
    
      const handleAgreeProvideInfoChange = (e) => {
        setAgreeProvideInfo(e.target.checked);
      };

      // 약관동의 열리고 닫히게
      const [isOpenCancle, setIsOpenCancle] = useState(false);
      const [isOpenPersonal, setIsOpenPersonal] = useState(false);
      const [isOpenProvide, setIsOpenProvide] = useState(false);

        const handleOpenCancle = () => {
            setIsOpenCancle(!isOpenCancle);
        };
        const handleOpenPersonal= () => {
            setIsOpenPersonal(!isOpenPersonal);
        };
        const handleOpenProvide= () => {
            setIsOpenProvide(!isOpenProvide);
        };

    return(
        <>
       {showInputInfo ? (
        <InputInfo
          reservationData={data.reservationData}
          rootData={data.rootData}
          id={data.id}
          price={data.price}
          totalPrice={data.totalPrice}
          quantity={data.quantity}
          buyerInfo={data.buyerInfo}
          deliveryMethod={data.deliveryMethod}
          paymentMethod={data.paymentMethod}
        />
      ) : (
    <PayContainer imgUrl={data.reservationData.imgUrl}>
    <div className="reservationBox">
    <div className="root">
        <ImHome/><p onClick={handleGoToHome}>전시 상세정보 페이지</p>
        <p onClick={goToSelectDate}>{data.rootData[0]}</p>
        <p onClick={goToInputInfo}>{data.rootData[1]}</p>
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
        <h4>예매정보확인</h4>
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
        <h4>가격정보 및 수령방법 확인</h4>
        <MdOutlineKeyboardArrowDown style={{ transform: isExpandedPrice? 'rotate(180deg)' : 'rotate(0deg)' }}/>
        </div>
      <div className="container">
        <div>
            <p>티켓수령방법 :</p> 
            {data.deliveryMethod === 'onSite' && <span>현장수령</span>}
            {data.deliveryMethod === 'mobileTicket' && <span>모바일티켓</span>}
        </div>
        <div>
            <p>티켓 가격 :</p> {data.price}원
        </div>
        <div>
            <p>수량 :</p>
        {data.quantity}
        </div>
        <div>
            <p>총 가격  : </p>
        {data.totalPrice}원
        </div>
      </div>
      </PriceQuantityWrapper> 
      <PolicyWrapper>
        <div className="agreeAll">
            <PolicyCheckbox
            checked={agreeAll}
            onChange={handleAgreeAllChange}
            />
            <p>전체 동의</p>
        </div>
        <div className="agreeCancle">
            <PolicyCheckbox
            checked={agreeCancel}
            onChange={handleAgreeCancelChange}
            />
            <div className="container" onClick={handleOpenCancle}>
            <p>취소기한 확인 및 동의(필수)</p>
            <MdOutlineKeyboardArrowDown style={{ transform: isOpenCancle ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
            </div>
            {isOpenCancle &&  
            <div className="agreement">
                예매일: 수수료 0%
            </div>}
           
        </div>
        <div className="agreePersonal">
            <PolicyCheckbox
            checked={agreePersonal}
            onChange={handleAgreePersonalChange}
            /> 
            <div className="container" onClick={handleOpenPersonal}>
            <p>개인정보 수집 및 이용동의(필수)</p>
            <MdOutlineKeyboardArrowDown style={{ transform: isOpenPersonal? 'rotate(180deg)' : 'rotate(0deg)' }}/>
            </div>
        </div>
        <div className="agreeProvideInfo">
            <PolicyCheckbox
            checked={agreeProvideInfo}
            onChange={handleAgreeProvideInfoChange}
            />
            <div className="container" onClick={handleOpenProvide}>
            <p>제 3자 정보 제공동의(선택)</p>
            <MdOutlineKeyboardArrowDown style={{ transform: isOpenProvide? 'rotate(180deg)' : 'rotate(0deg)' }}/>
            </div>
        </div>
      </PolicyWrapper>
      <ReservationButtonWrapper>
       <Button onClick={goToInputInfo}>이전 단계</Button>
        {data.paymentMethod === 'kakaoPay' && <Button className="kakaoBtn"><RiKakaoTalkFill/><p>카카오페이</p></Button>}
        {data.paymentMethod === 'banking' && <Button className="bankingBtn">무통장입금</Button>}
      </ReservationButtonWrapper>
      </RightContainer>
      </div>   
      </div>
      </div>
    </PayContainer>)}
    </>
    );
}

export default PayTicket;