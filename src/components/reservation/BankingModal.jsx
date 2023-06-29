import React, { useState, useEffect } from 'react';
import Button from '../../util/Button';
import styled from 'styled-components';
import { Checkbox, FormControlLabel } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const ModalStyle = styled.div`
  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .openModal {
    display: flex;
    align-items: center;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-bg-show 0.8s;
  }
    section {
        width: 80%;
        height: 20rem;
        box-sizing: border-box;
        margin: 0 auto;
        border-radius: 0.5rem;
        background-color: #fff;
        /* 팝업이 열릴때 스르륵 열리는 효과 */
        animation: modal-show 0.3s;
        overflow: hidden;
    }
    section > header {
        position: relative;
        padding: 16px 64px 16px 16px;
        font-weight: 700;
    }
    section > header button {
        position: absolute;
        top: 2px;
        right: 15px;
        width: 30px;
        float: left;
        font-size: 30px;
        font-weight: 900;
        text-align: center;
        color: #999;
        background-color: transparent;
        outline: none;
        cursor: pointer;
        border: 0;
    }

    .btnContainer{
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin: 0 auto;
        height: 2rem;
        width: 60%;
        
    }

    .bankingInfo{
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin-left: 2rem;
    }
    .pContainer{
        margin-right: 1rem;
        .p2{
            font-size: 0.5rem;
            color: red;
        }
    }
    .p1{
        margin-left: 3rem;
    }
    h3{
        margin-left: 2rem;
    }
`;


const ModalBankingPayment = ({ totalPrice, close, open, exhibitName }) => {
  const [selectedBank, setSelectedBank] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [accountNumber, setAccountNumber] = useState('');
  const [paymentDeadline, setPaymentDeadline] = useState('');

  // 은행 선택 핸들러
  const handleBankChange = (e) => {
    setSelectedBank(e.target.value);

    // 선택한 은행에 따라 계좌번호 설정
    let generatedAccountNumber = '';
    if (e.target.value === '국민은행') {
      generatedAccountNumber = '국민-11111-11111 (주)DDD';
    } else if (e.target.value === '우리은행') {
      generatedAccountNumber = '우리-11111-11111 (주)DDD';
    } else if (e.target.value === '신한은행') {
      generatedAccountNumber = '신한-11111-11111 (주)DDD';
    } else if (e.target.value === '카카오뱅크') {
      generatedAccountNumber = '카뱅-11111-11111 (주)DDD';
    } else if (e.target.value === '우체국') {
      generatedAccountNumber = '우체국-11111-11111 (주)DDD';
    }
    setAccountNumber(generatedAccountNumber);
  };

  // 동의 체크박스 핸들러
  const handleAgreementChange = (event) => {
    setAgreed(event.target.checked);
  };

  // 입금기한 출력
  useEffect(() => {
    if (open) {
      // 오늘 날짜로부터 +2일 뒤의 날짜와 시간을 계산
      const deadline = new Date();
      deadline.setDate(deadline.getDate() + 2);
      deadline.setHours(23, 59, 0, 0);

      // 날짜와 시간을 원하는 형식으로 변환
      const formattedDeadline = deadline.toLocaleString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });

      setPaymentDeadline(formattedDeadline);
    }
  }, [open]);

  return (
    <ModalStyle>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open && (
          <section>
            <header>
              <button onClick={close}>&times;</button>
            </header>
            <main>
                <h3>{exhibitName}</h3>
                <p className='p1'>결제할 금액 : {totalPrice}</p>
                <div className='bankingInfo'>
                <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                <InputLabel id="demo-select-small-label">계좌번호</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={selectedBank}
                    label="Banking"
                    onChange={handleBankChange}
                >
                    <MenuItem value="">
                    <em></em>
                    </MenuItem>
                    <MenuItem value="국민은행">국민은행</MenuItem>
                    <MenuItem value="우리은행">우리은행</MenuItem>
                    <MenuItem value="신한은행">신한은행</MenuItem>
                    <MenuItem value="카카오뱅크">카카오뱅크</MenuItem>
                    <MenuItem value="우체국">우체국</MenuItem>
                </Select>
                </FormControl>
                {selectedBank && (
                <div className='pContainer'>
                <p>계좌번호: {accountNumber}</p>
                <p className='p2'>입금 기한: 위 계좌번호로 {paymentDeadline}까지 입금해주세요.</p>
                </div>)}
                </div>
                <FormControlLabel
                sx={{margin: '1rem'}}
                control={<Checkbox checked={agreed} onChange={handleAgreementChange} />}
                label="결제에 동의합니다."
                />
                <div className="btnContainer">
                <Button onClick={close}>취소</Button>
                <Button onClick={close} disabled={!agreed}>확인</Button>
                </div>
            </main>
          </section>
        )}
      </div>
    </ModalStyle>
  );
};

export default ModalBankingPayment;
