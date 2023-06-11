import { useState } from "react";
import styled from "styled-components";
import { IoSearch} from "react-icons/io5";

const SearchWrap = styled.div`
        cursor: pointer;
        float : right;
        width: 14em; 
        height: 30px; 
        padding: 0 7px; 
        border: solid 2px #ddd; 
        background-color: white;
        margin: .7em 1em;
        border-radius: 5px;
            
        input {width: 160px; height: 26px; border: 0px; outline: none; margin-right: 10px;}
        
        
        .searchicon{
            float: right;
            margin-top: -1.3em;
            color: #ccc;
        }
        
`;
const BoardSearch = () => {

     // 검색
    const [searchKeyword, setSearchKeyword] = useState("");

     const onChangeSearchKeyword = (e) => {
         setSearchKeyword(e.target.value);
     }
 

    return(
        <SearchWrap>
            <input name="searchkeyword" 
            title="검색" 
            placeholder="검색어를 입력하세요" 
            onChange={onChangeSearchKeyword} 
            value={searchKeyword}/>
            {/* <input name="product_search" title="검색" placeholder="검색어 입력" onChange={onChangeSearchKeyword} onKeyDown={onKeyPressSearch} value={searchKeyword}/> */}
            <div className="icon_container">
                <IoSearch className="searchicon" />
            </div>
        </SearchWrap> 
    )
};

export default BoardSearch;