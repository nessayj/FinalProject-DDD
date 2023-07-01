import styled from 'styled-components';
import { useState, useEffect } from 'react';
import WriteHeader from '../components/Board/WriteHeader';
import TextField from '../components/Board/TextField';
import { Link } from 'react-router-dom';
import DDDApi from '../api/DDDApi';



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
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [region, setRegion] = useState(null);
    const [image, setImage] = useState(null);
    const [contents, setContents] = useState("");

    // const getId = localStorage.getItem("Id");

    const author = localStorage.getItem("Id");

    useEffect(() => {
        if (title.length === 0 || category.length === 0 || contents.length === 0) {
        
            return; 
        }
          alert("제목, 카테고리, 내용을 모두 입력해 주세요.");
        
    }, [title, category, contents]);


    const onClickSave = async () => {

    const resultNo = await DDDApi.boardWrite(author, category, region, title, image, contents);
    const linkNo = resultNo.data;
    console.log("Result Number:", linkNo);
    if (linkNo) {
        alert("문의글 작성이 완료되었습니다.");
    }
};
  

    
    return(
        <WriteWrap>

            <WriteHeader
            setTitle={setTitle}
            setCategory={setCategory}
            setRegion={setRegion}
        />
        <TextField setContent={setContents} />
        <div className="btn_area">
            <button className="savebtn" onClick={onClickSave}>등록하기</button>
            <Link to='/boardList'>
                <button className="cancelbtn">취소하기</button>
            </Link>
        </div>

        </WriteWrap>
    )
};

export default BoardWrite;
