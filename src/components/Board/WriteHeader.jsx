import styled from "styled-components";
import { useState } from "react";


const Wrap = styled.div`
    width: 75em; // 1200px
    /* height: 100vh; */
    margin: 0 auto;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
`;

const Section = styled.div`
    width: 1140px;
    float: center;
    position: relative;
    display: flex;
    flex-direction: column;
    
    div { // 헤더 및 카테고리 박스
        width: 100%;
        padding: 10px 30px;
    }
    .board_header { // 게시물 작성 영역    
        h2 {
            font-size: 1.8em;
            margin-top: 30px;
            font-weight: 900;
        }
    }

    table {
        border-collapse: collapse; 
        width: 100%;
        background-color: #4555AE;
        border-bottom: solid 1px #4555AE;
        text-align: center;
        tr:nth-child(2n) td {background-color: #f9f9f9;}
        th {padding: 10px; color: white;}
        td {padding: 10px; background-color: white; border-left: solid 1px #bbb; border-top: solid 1px #ddd;}
        td:first-child {border-left: none; width: 115px;
            
            select { // 게시판 카테고리 셀렉박스
                text-align:center;
                background: none;
                border: none;
                outline: none;
                font-size: 16px;
                font-weight: 600;
            }
        }
        td:nth-child(2) {width: 100px; text-align: left; padding-left: 20px;
        
            select{ // 지역선택 카테고리 셀렉박스
                text-align:center; 
                background: none;
                border: none;
                outline: none;
                font-size: 16px;
                font-weight: 600;
            }
        }  
        
        td:nth-child(3) {width: 41em; text-align: left; padding-left: 20px;
        
        }

    }
    .input_title {
        font-size: 20px;
        width: 100%;
        height: 30px;
        outline: none;
        display: block;
        margin-bottom: 30px;
        padding-left: 15px;
        margin: 0 auto;
        border: none;
        background: none;
        &:focus {border: none; background:none;}
    }

    .addBoard-wrapper{
            margin-top: 1rem;
            display: flex;
            flex-direction: column-reverse; // 업로드된 이미지 아래로 향하게 설정
            align-items: center;
            justify-content: center;
            width: 100%;
        }
        .imgcontainer {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 12px;
        }

        img {
            width: 50%; /* 이미지의 최대 가로 너비를 설정 */
            height: 50%; /* 이미지의 최대 세로 높이를 설정 */
            /* object-fit: cover; */
            /* align-self: flex-start; */
        }

        .imguploaderBtn {
            

            button {
                font-size: 14px;
                cursor: pointer;
                border-radius: 10px;
                border: none;
                color: white;
                background-color: #050E3D;
                transition: all .1s ease-in;
                font-weight: bold;
                float: left;
                padding: .5em 1.3em;
                &:hover {background-color: #5EADF7; color: #F4F8FF;}
                }
        }
`;


const WriteHeader = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [region, setRegion] = useState("");
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] =useState("");


    // 게시판 카테고리 선택 
    const onChangerCtg = (e) => {
        setCategory(e.target.value)
    }

    // 지역 선택 
    const onChangeregion = (e) => {
        setRegion(e.target.value)
    }

    // 게시글 제목 변경
    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    // 이미지 미리보기
    const previewImage = (e) => {
        e.preventDefault();
    
    
    const fileReader = new FileReader();
    if (e.target.files[0]) {
        fileReader.readAsDataURL(e.target.files[0]);
    }
        fileReader.onload = () => {
            setPreviewUrl(fileReader.result);
            setImage({
                image_file: e.target.files[0],
                previewUrl: fileReader.result,
            });
        };
    };


    return(
        <>
        {/* <Main/> */}
        <Wrap>
            <Section className="section">
            <div className="board_header">
                    <div className="boardtitle">
                        <h2>자유 게시판</h2>  
                    </div>
                    <table>
                        <tr>
                            <th colSpan={3}>게시물 작성</th>
                        </tr>
                        <tr>
                            <td>
                                <select name="category" onChange={onChangerCtg}>
                                    <option value="" selected>카테고리</option>
                                    <option value="추천수다">추천수다</option>
                                    <option value="질문하기">질문하기</option>
                                    <option value="동행찾기">동행찾기</option>
                                </select>
                            </td>

                            <td>
                                <select name="category" onChange={onChangeregion}>
                                    <option value="" selected>지역선택</option>
                                    <option value="서울">서울</option>
                                    <option value="경기/인천">경기/인천</option>
                                    <option value="충청">충청</option>
                                    <option value="강원">강원</option>
                                    <option value="경상도">경상도</option>
                                    <option value="전라/제주">전라/제주</option>
                                </select>
                            </td>

                            <td>
                                <input className="input_title" 
                                type='text' 
                                placeholder='제목을 입력해주세요 :)' 
                                value={title} 
                                onChange={onChangeTitle} 
                                name='title' 
                                maxLength={40}/>
                            </td>
                            <td>
                            <div className="imguploaderBtn">
                                <button>
                                <input type="file" id="file-upload" onChange={previewImage} style={{display: "none"}}/>
                                <label htmlFor="file-upload">사진 업로드</label>
                                </button>
                            </div>
                            </td>
                        </tr>
                    </table> 
                    <div className="addBoard-wrapper">
                        {previewUrl && <img src={previewUrl}/>}
                    </div>
                    </div>
            </Section>
        </Wrap>
    </>
    )
};
export default WriteHeader;