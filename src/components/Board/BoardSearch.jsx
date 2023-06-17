import { useState, useEffect } from "react";
import styled from "styled-components";
import { IoSearch} from "react-icons/io5";
import DDDApi from "../../api/DDDApi";

const SearchWrap = styled.div` // 검색창 활성화 안된 부분 일부 위치 수정
        display: flex;
        width: 12em; 
        height: 30px; 
        padding: 0 5px; 
        border: solid 2px #ddd; 
        background-color: white;
        margin: .7em 1em;
        margin-left: auto;
        border-radius: 5px;
        cursor: pointer;
            
        input {width: 160px; height: 26px; border: 0px; outline: none; margin-right: 10px;}
        
        .icon_container {
           
            .searchicon {
                color: #ccc;
                margin-top: 6px;
           }
    }
        
        
`;
const BoardSearch = () => {

     // 검색
    const [searchKeyword, setSearchKeyword] = useState("");
    const [boardList, setBoardList] = useState([]);

    const onChangeSearchKeyword = (e) => {
         setSearchKeyword(e.target.value);
    }

    const onClickSearch = async () => {
        try {
            const response = await DDDApi.searchList(searchKeyword);
            setBoardList(response.data);
        } catch (e) {
            console.log(e);
        }
   }


    // 엔터를 눌렀을 때도 검색 되게
    const onKeyEnterSearch = async(e) => {
        if(e.key === 'Enter'){
            onClickSearch();
            setSearchKeyword(''); // 검색 후 검색창 빈칸으로 만들기
            console.log(e);
        }
    }

    useEffect (() => {
        const boardData = async () => {
            try {
                const boardListData = await DDDApi.boardList();
                setBoardList(boardListData.data);
            } catch (e) {
                console.log(e);
            }
        };
        boardData();
    },[]);

 

    return(
        <SearchWrap>
            <input name="searchkeyword" 
            title="검색" 
            placeholder="검색어를 입력하세요" 
            onChange={onChangeSearchKeyword} 
            onKeyDown={onKeyEnterSearch}
            value={searchKeyword}/>
            <div className="icon_container">
                {/* <IoSearch className="searchicon" onClick={() => {}}/> */}
                <IoSearch className="searchicon" onClick={onClickSearch}/>
            </div>
        </SearchWrap> 
    )
};

export default BoardSearch;