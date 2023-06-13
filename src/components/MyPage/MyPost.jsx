import React from 'react';
import styled from 'styled-components';
import { member_info, diaryImage } from './Data.jsx';
import Diary from "./Diary";
import Thumnail from './Thumnail.jsx';
import { SlSocialInstagram, SlPaperPlane, SlUserFollow } from 'react-icons/sl';
import {dummy_post, dummy_reply} from './Data'
import NaviBox from './NaviBox.jsx';



const Container = styled.div`
  /* background-color  : beige; */
  width: 100%;
  height: 100%;
  .text{
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: bold;
    display: inline-block;
    cursor: pointer;
  }
  hr{
    width: 90%;
    border: 1px solid #eee;
    margin: 0% 5%;

  }
`;




const PostWrap = styled.div`
    width: calc(100% - 2rem);
    height: 88%;
    /* background-color: #fed081; */
    /* position : relative;
    top: 12%; */
    padding-left: 2.5rem;
    p {
        text-align: left;
        margin: 0rem 0 .3rem 0;
        font-size: 1rem;
        font-weight: bold;
    }
    .title {
        /* background-color: red; */
        height: 7%;
        font-weight: bold;
    }
    .moreBox{
        width: 90%;
        display: flex;
        justify-content: space-between;
        margin: 1rem 0 ;
        font-size: .8rem;
        font-weight: bold;
        color:#555;
        .seeMore{
            cursor: pointer;
        }
    }
    .buffer{
        width: 90%;
        height: 10%;
        /* background-color: aqua; */
        border-bottom : 1px solid #ddd;
    }
`;
const Table = styled.table`
    width: 92%;
    /* background-color: aqua; */
    text-align: center;
    border-collapse: collapse;
    border: none;


    th,td{
        font-size: .8rem;
        font-weight: 400;
        height: 2rem;
        line-height: .8rem;
        color:#000;
        border-bottom : 1px solid #ccc;
        border-top: 1px solid #ccc;

    }
    th{
        font-weight:500;
        background-color: #5EADF7;
        color: white;
    }
    tr:nth-child(even) {
        background-color: #F4F8FF;
    }
`;


const Introduce = (props) => {
    return (
        <>
            <Container>
            <PostWrap>
                <div className='title' >내 게시물</div>
                <div className='moreBox'>
                    <span>내가 쓴 글</span>
                    <span onClick={()=>{}} className='seeMore'>더 보기</span>
                </div>
                <Table>
                    <thead>
                        <th style={{width:'8%'}}>번호</th>
                        <th style={{width:'10%'}}>카테고리</th>
                        <th style={{width:'42%'}}>제목</th>
                        <th style={{width:'18%'}}>작성자</th>
                        <th style={{width:'8%'}}>조회수</th>
                        <th style={{width:'14%'}}>작성일</th>
                    </thead>
                    <tbody>
                    {
                        dummy_post.slice(0, 5).map((post, index) => (
                            <tr key={index}>
                            <td>{post.no}</td> 
                            <td>{post.category}</td> 
                            <td style={{textAlign:'left', paddingLeft:'.6rem'}}>{post.title}</td> 
                            <td>{post.nickName}</td> 
                            <td >{post.view}</td> 
                            <td>{post.date}</td> 
                            </tr>
                        ))
                        }
                    </tbody>
                </Table>

                <div className="buffer"/>

                <div className='moreBox' style={{marginTop:'2rem'}}>
                    <span>내가 쓴 댓글</span>
                    <span onClick={()=>{}} className='seeMore'>더 보기</span>
                </div>
                <Table>
                    <thead>
                        <th style={{width:'8%'}}>번호</th>
                        <th style={{width:'10%'}}>카테고리</th>
                        <th style={{width:'42%'}}>제목</th>
                        <th style={{width:'18%'}}>작성자</th>
                        <th style={{width:'8%'}}>조회수</th>
                        <th style={{width:'14%'}}>작성일</th>
                    </thead>
                    <tbody>
                    {
                        dummy_post.length > 0 && dummy_post.slice(0, 5).map((post, index) => (
                            <tr key={index}>
                                <td>{post.no}</td> 
                                <td>{post.category}</td> 
                                <td style={{textAlign:'left', paddingLeft:'.6rem'}}>{post.title}</td> 
                                <td>{post.nickName}</td> 
                                <td>{post.view}</td> 
                                <td>{post.date}</td> 
                            </tr>
                        ))
                    }
                    {
                        dummy_post.length === 0 && 
                        (
                            <tr>
                                <td colSpan={6}>작성 한 댓글이 없습니다. </td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
                
            </PostWrap>
            </Container>
        </>
    );
};

export default Introduce;