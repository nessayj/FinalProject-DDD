import React from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

const PageNationBlock = styled(ReactPaginate)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  font-size: larger;
  padding: 0;
  color: #050E3D;
    .page-item{
    margin: 5px;
    color :black;
    border-radius: 5px;
    border : 2px solid #050E3D;
    display: flex;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .active{
    background-color: #050E3D;
    font-weight: bold;
    color :white;
    }
 

`;


const PageNation = ({pageCount,onPageChange}) => {
  
    return(
        <PageNationBlock
        previousLabel={'◀'}
        nextLabel={'▶'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        pageLinkClassName={'page-item'}
        activeLinkClassName={'active'}
        />
    );
}


export default PageNation;