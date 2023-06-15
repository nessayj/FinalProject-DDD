import styled from 'styled-components';
import { useState } from 'react';
import WriteHeader from '../components/Board/WriteHeader';
import TextField from '../components/Board/TextField';
import { Link } from 'react-router-dom';



const WriteWrap = styled.div`
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    /* border: 1px solid black; */

    .btn_area {
        text-align: right;
        margin-right: .9em;
 
        .savebtn { // 등록 버튼 속성
                /* display :inline-block; */
                cursor: pointer;
                margin-top: 1em;
                padding: 10px 1.6em;
                border-radius: 15px;
                border: none;
                color: white;
                background-color: #050E3D;
                transition: all .1s ease-in;
                font-weight: 600;
                font-size: 14px;
        
                
                &:hover {background-color: #5EADF7;
                    color: #F4F8FF;}
            }
            .cancelbtn { // 취소버튼 속성
                cursor: pointer;
                margin-top: 1em;
                padding: 10px 1.6em;
                border-radius: 15px;
                border: none;
                color: white;
                background-color: #050E3D;
                transition: all .1s ease-in;
                font-weight: 600;
                font-size: 14px;

                &:hover {background-color: #FA6060;
                    color: #F4F8FF;}

            }
            button:nth-child(1) {
                margin-right: 16px;
            }
                
    }

    
`;


const BoardWrite = () => {

    const [save, setSave] = useState();

    const onClickSave = (e) => {
        setSave(e.target.value)
    }

    
    return(
        <WriteWrap>
            <WriteHeader/>
            <TextField/>
            <div className="btn_area">
                <button className="savebtn" onClick={onClickSave}>저장하기</button>
                <Link to='/boardList'><button className="cancelbtn">취소하기</button></Link>
            </div>
        </WriteWrap>
    )
};

export default BoardWrite;