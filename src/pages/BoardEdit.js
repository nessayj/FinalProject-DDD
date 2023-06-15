import styled from "styled-components";
import { useState, useEffect } from 'react';
import EditHeader from "../components/Board/EditHeader";
import TextField from "../components/Board/TextField";
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DDDApi from "../api/DDDApi";



const EditWrap = styled.div`
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: center;

    .btn_area {
        text-align: right;
        margin-right: .9em;
 
        .editbtn { // 수정 버튼 속성
                margin-top: 1em;
                padding: 10px 1.6em;
                border-radius: 15px;
                border: none;
                color: white;
                background-color: #050E3D;
                transition: all .1s ease-in;
                font-weight: 600;
                font-size: 14px;
                cursor: pointer;
        
                &:hover {background-color: #5EADF7;
                    color: #F4F8FF;}
            }
            .backbtn { // 취소 버튼 속성
                margin-top: 1em;
                padding: 10px 1.6em;
                border-radius: 15px;
                border: none;
                color: white;
                background-color: #050E3D;
                transition: all .1s ease-in;
                font-weight: 600;
                font-size: 14px;
                cursor: pointer;
                margin-right: 16px;

                &:hover {background-color: #FA6060;
                    color: #F4F8FF;}

            }
            button:nth-child(1) {
                margin-right: 16px;
            }
                
    }

    
`;


const BoardEdit = () => {

    // 로그인 구현될 경우 코드 재체크 예정
    const navigate = useNavigate();
    const getId = window.localStorage.getItem("userId"); // 로그인한 아이디로 가져오기
    const params = useParams();
    const freeBoard_No = params.no; 
    const [boardload, setBoardLoad] = useState(""); 
    const [category, setCategory] = useState("");
    const [region, setRegion] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [image, setImage] = useState("");
    const [comment, setComment] = useState("");


    useEffect(() => {
        const boardData = async () => {
            try {
                const response = await DDDApi.boardView(freeBoard_No);
                // 다른 사용자의 게시물 Edit 페이지에 접속 못하도록 방지

                if (response.data.length === 0) {
                    console.log('데이터 없음');
                    return;
                }

                const writerId = response.data[0].writerId;
                if(getId !== writerId) { 
                    alert("본인의 글만 수정할 수 있습니다.")
                    navigate('/board_view');
                    return; 
                } 
                setBoardLoad(response.boardload);
                setCategory(response.data[0].category);
                setRegion(response.data[0].region);
                setTitle(response.data[0].title);
                setImage(response.data[0].image);
                setContents(response.data[0].contents);
                
                

            } catch (e) {
                console.log(e);
            }
        };
        boardData();
    }, [getId, freeBoard_No, navigate]);


    // 해당 게시물 번호에 해당하는 Edit 페이지로 이동
    const onClickEdit = async() => {
        if (title.length === 0 || contents.length === 0 ) {
            setComment("제목과 내용을 입력해 주세요");
            // setModalOpen(true); 
        } else {
            await DDDApi.boardEdit(freeBoard_No, category, region, title, image, contents);
            const link = "/board_view" + freeBoard_No;
            navigate(link);
        }
    }
   
    
    return(
        <EditWrap>
            <EditHeader/>
            <TextField/>
            <div className="btn_area">
                <button className="editbtn" onClick={onClickEdit}>수정하기</button>
                <Link to={`/board_view/${freeBoard_No}`}><button className="backbtn">취소하기</button></Link>
            </div>
        </EditWrap>
    )
};

export default BoardEdit;