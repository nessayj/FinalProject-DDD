import styled from "styled-components";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import profile from "./../resources/프로필.png";
import BoardComment from "../components/Board/BoardComment";


const ViewWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4px;

`;

const Section = styled.div`
    width: 1140px;
    float: center;
    position: relative;
    display: flex;
    flex-direction: column;

    .board_header {
        h2 {
            padding: 10px 16px;
            font-size: 1.8em;
            margin-top: 30px;
            font-weight: 900;
            font-family: 'Pretendard-regular';
        }
    }

    .sub_category { 
        display: flex; 
        align-items: center;
        margin-bottom: 5px;
        margin-right: 30px;
    }

    .editBtn {
        margin-left: auto;  // 오른쪽으로 이동
        margin-right: 20px;
        display: flex;
        flex-direction: row;  // 가로 방향으로 정렬
        align-items: center;

        .upBtn { // 수정하기 버튼
            padding: 10px 1.6em;
            border: none;
            border-radius: 10px;
            background-color: #050e3d;
            color: white;
            cursor: pointer;
            margin-left: 15px;
            transition: all .1s ease-in;

            &:hover {background-color: #5EADF7;
                    color: #F4F8FF;}
            }
    
        .delBtn { // 삭제하기 버튼
                padding: 10px 1.6em;
                border: none;
                border-radius: 10px;
                background-color: #050e3d;
                color: white;
                cursor: pointer;
                margin-left: 15px;
                transition: all .1s ease-in;

            &:hover {background-color: #FA6060;
                    color: #F4F8FF;}
            }

    }

    @media (max-width: 600px) { 
    
    .editBtn {

        .upBtn, .delBtn {
        padding: 0.7em 1.5em; 
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        }
    }
}
    
    .dateview {
        display: flex;
        font-weight: bold;
        margin-right : 75px;

        .write_date {
            flex:1;
            text-align: right;
            margin-right: 50px;
            margin-bottom:2px;
        }
    }

    .authorinfo {
        display: flex;
        align-items: center;

        img {
            width: 2em;
            height: 2em;
            border-radius: 50%;
            margin-left: .3em;
        }

        .author {
            margin-left: .5em
        }   
    }
    .title {
        width: 100%;
        padding: 8px;
        font-size: 1.2em;
       
    }

    .comment_title {
        margin-top : 1em;
    }

`;

const TitleView = styled.h3`
    width: 93%;
    margin-left: 4px;
    padding: 12px;
    font-size: 1.3em;
    border: 1px solid #ccc;
    border-radius: 12px;
`;

const Contents = styled.div`
    width: 92%;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 12px;
    padding: 30px 18px;
    margin-top: 20px;
    min-height: 400px;
    /* max-height: 800px;*/ 

    .image_area {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
    }

    img {
        width: 50%; /* 이미지의 최대 가로 너비를 설정 */
        height: 50%; 
        border-radius: 12px;
        align-items: center;
        justify-content: center;
    }
    .text_area {
        margin: 12px;
    }
`;

const Boardview = () => {


    return(
        <ViewWrap>
            <Section className="section">
            <div className="board_header">
                <div className="boardtitle"><h2>자유 게시판</h2></div> 
                
                <div className="sub_category">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-readonly-label">카테고리</InputLabel>
                    <Select
                    labelId="demo-simple-select-readonly-label"
                    id="demo-simple-select-readonly"
                    value="추천수다"
                    label="카테고리"
                    inputProps={{ readOnly: true }}
                    sx={{ height: '2.5em' }}>
                    <MenuItem value="추천수다">추천수다</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-readonly-label">지역선택</InputLabel>
                    <Select
                    labelId="demo-simple-select-readonly-label"
                    id="demo-simple-select-readonly"
                    value="서울"
                    label="지역선택"
                    inputProps={{ readOnly: true }}
                    sx={{ height: '2.5em' }}>
                    <MenuItem value="서울">서울</MenuItem>
                    </Select>
                </FormControl>
                <div className="editBtn">
                    <button className="upBtn">수정하기</button>
                    <button className="delBtn">삭제하기</button>
                </div>
                </div>
                <TitleView>게시글 제목</TitleView>
                
                <div className="authorinfo">
                    <img src={profile} alt="프로필 이미지" />
                    <div className="author">작성자</div>
                </div>
                
                <div className="dateview">
                    <div className="write_date">작성일 :</div>
                    <div className="views">조회수 :</div>
                </div>
                
                <Contents>
                    <div className="image_area">
                        <img src={profile} alt="프로필 이미지" />
                    </div>
                    <div className="text_area"> 
                        안녕하세요~<br /> 
                        주말에 친구들과 전시회를 가려고 하는데 재밌게 즐길 수 있을 만한 전시회 있을까요?<br /> 
                        작품 구경도 하면서 사진도 자유롭게 찍을 수 있는 
                        서울에 가볼만한 전시회 추천 부탁드립니다 :D <br />
                        감사합니다.<br />
                    </div>
                </Contents>
            </div>

            <div className="comment_title"><h2>Comment</h2></div>
            <BoardComment/>
            </Section>
        </ViewWrap>
    )
};
export default Boardview;