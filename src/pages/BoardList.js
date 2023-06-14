import styled from 'styled-components';
import Card from '../components/Board/Card';
import {useState, useCallback} from 'react';
import Categories from '../components/Board/Category';
import { useNavigate } from 'react-router-dom';
import Recommend from '../components/Board/Recommend';
import Question from '../components/Board/Question';
const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;

    .boardtitle {
        margin-left: 6em;
        margin-bottom: 1em;
        display: flex;
        align-items: center;
        font-size: 30px;
        font-weight: 600;
        color: #1a5d98;
        
        h2 { 
            font-size: 1em;
            margin-top: 35px;  
            color:black; 
            font-family: 'Pretendard-regular';
        }

    }  
    
    button {
            font-family: 'Pretendard-regular';
            float: right;
            margin: -1.5em 13em ;

            /* font-size: 1em; */
            font-size: 14px;

            /* padding: 8px 30px; */
            padding: .5em 2em;

            border-radius: 10px;
            background-color: #050E3D;
            color: white;
            border: none;
            transition: all .1s ease-in;
            cursor: pointer;
            font-weight: bold;
            
            &:hover{background-color: #5EADF7; color: #F4F8FF; transform: scale(1);} 
        }


        button {
                
                
                &:hover {background-color: #5EADF7; color: #F4F8FF;}
                }

`;



  

const BoardList = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState('menu1');
    const onSelect = useCallback(category => setCategory(category), []);

    const handleSelect = (categoryName) => {
        setCategory(categoryName);
        onSelect(categoryName);
      };

    // 글쓰기 버튼 클릭 시 게시판 작성페이지로 이동
    const onClickToWrite = () => {
        const link = "write/"
        navigate(link);
    }

    const [boardList, setBoardList] = useState([]); // boardList 불러오기

    const filteredBoardList = boardList.filter((item) => {
        if (category === "추천수다") {
          return item.category === "추천";
        } else if (category === "질문하기") {
          return item.category === "질문";
        }
        return true; // 기본적으로 모든 게시물을 반환(코드 체크 재확인)
      });


    

    return(
        <Wrap>
            <div className="boardtitle">
                <h2>자유 게시판</h2>
            </div>
            <div className="category">
                <Categories category={category} onSelect={handleSelect}/>
                {category === 'menu1' && <Recommend />}
                {category === 'menu2' && <Question />}
                {category === 'menu3' && <Card />}
            </div>
            <button onClick={onClickToWrite}>글쓰기</button>
        </Wrap>
    )
};

export default BoardList;

