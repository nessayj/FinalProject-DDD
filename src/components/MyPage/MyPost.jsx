import React from 'react';
import styled from 'styled-components';
import {dummy_post, dummy_reply} from './Data'

const Container = styled.div`
    width: 70%;
    height: 100%;
    /* background-color: #fed081; */
    p {
        text-align: left;
        margin: 0rem 0 .3rem 0;
        font-size: .8rem;
        font-weight: bold;
    }
    .title {
        padding-left: 1rem;
        /* background-color: red; */
        height: 7%;
        font-weight: bold;
    }
    .moreBox{
        padding-left: 1rem;
        width: 88%;
        display: flex;
        justify-content: space-between;
        margin: 1rem 0 ;
        font-size: .6rem;
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
        margin-left: 1rem;
        border-bottom : 1px solid #ddd;
    }
`;
const Table = styled.table`
    margin-left: 1rem;
    width: 90%;
    /* background-color: aqua; */
    text-align: center;
    border-collapse: collapse;
    border: none;

    th,td{
        font-size: .6rem;
        font-weight: 400;
        height: 1.5rem;
        line-height: .8rem;
        color:#555;
        border-bottom : 1px solid #ccc;
        border-top: 1px solid #ccc;

    }
    th{
        font-weight:bold;
        background-color: #ddd;
    }
    tr:nth-child(even) {
        background-color: #eee;
    }
`;

const MyPost = () => {
    return (
        <>
            <Container>
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
                        dummy_reply.length > 0 && dummy_post.slice(0, 5).map((post, index) => (
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
                        dummy_reply.length === 0 && 
                        (
                            <tr>
                                <td colSpan={6}>작성 한 댓글이 없습니다. </td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
                
            </Container>
            
        </>
    );
};

export default MyPost;