import React, { useState } from 'react';
import styled from 'styled-components';
import Thumnail from './Thumnail';
import EditInfo from './EditInfo';
import MyPost from './MyPost';
import { member_info } from './Data';
import MyReservation from './MyReservation';
import DeleteAccount from './DeleteAccount';

const Container = styled.div`
  /* background-color  : beige; */
  width: 100%;
  height: 100%;
`;

const MenuSpace = styled.div`
    position: relative;
    top: 8%;
    width: 100%;
    height: 62%;
    /* background-color: aqua; */
    display: flex;
    flex-direction: row;
`;
const MenuBlock =  styled.div`
    width: 24%;
    height: 94%;
    /* background-color: red; */
    padding: 6% 3% 0 3%;
`;

const Menu =styled.div`
    width: 100%;
    height: auto;
    /* background-color: aqua; */
    text-align: center;

    div{
        width: 90%;
        padding: 7% 5%;
        background-color: #F4F8FF;
        font-size: .8rem;
        cursor: pointer;
        :hover{
            background-color: #5EADF7;
            color: white;
        }
    }
    .FocusedMenuBtn{
        width: 90%;
        padding: 7% 5%;
        background-color: #5EADF7;
        color: white;
        font-size: .8rem;
        cursor: pointer;
    }
`;
const EditBlock = styled.div`
    width: 70%;
    height: 100%;
    /* background-color: blue; */
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
    .introducBlock {
        /* background-color: aqua; */
        width: calc(100% - 1rem);
        padding-left: 1rem;
        textarea {
            width: 88%;
            background-color: #F4F8FF;
            border: 1px solid #5EADF7;
            border-radius: .3rem;
        }
        textarea:focus {
            outline: none;
            background-color: #5EADF7;
            outline: none;
            color: white;
            ::placeholder{
            color: white;
            padding-left: .3rem;

            }
        }
        textarea::placeholder {
            color: #555;
            padding-left: .3rem;

        }
    }

    .btnBlock{
            height: 20%;
            width: 95%;
            /* background-color: blue; */
            display: flex;
            flex-direction: row;
            justify-content: center;
            button{
                width: 18%;
                height: 2.0rem;
                border-radius: 3rem;
                margin : 1rem .5rem;
                background-color: #5EADF7 ;
                border: 1px solid #F4F8FF;
                color: white;
                font-size: .8rem;
                cursor: pointer;
                display: flex;
                justify-content:center;
                align-items: center;
            }

        }
`;
const Edit =styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: row;
    p{
        text-align: left;
        margin: 2rem 0 .3rem 0;
        font-size: .8rem;
        font-weight: bold;
    }
    input{
        width: 70%;
        height: 1.5rem;
        background-color: #F4F8FF;
        border: 1px solid #5EADF7;
        /* border: 1px solid #5EADF7; */
        border-radius: .3rem;
        color: black;
            ::placeholder{
            color: #555;
            padding-left: .3rem;
            }
    }
    input:focus{
        background-color: #5EADF7;
                outline: none;
                color: white;
                ::placeholder{
                color: #F4F8FF;
                }
    }

`;
const LeftBox = styled.div`
    width: 50%;
    height: 100%;
    /* background-color: aqua; */
    padding-left: 1rem;
`;
const RightBox = styled.div`
    width: 50%;
    height: 100%;
    /* background-color: red; */
`;


const EditMemberMain = (props) => {
    const [pageOnEdit, setPageOnEdit] = useState(0)
    return (
        <>   
        <Thumnail/>
        <Container>
            <MenuSpace>
                <MenuBlock>
                    <Menu>
                        <div onClick={() => (props.setShowPage('마이페이지'))}>마이페이지</div>
                        {
                            pageOnEdit === 0 ? 
                            (<div className='FocusedMenuBtn'>내 정보 수정</div>) : 
                            (<div onClick={()=> setPageOnEdit(0)}>내 정보 수정</div>)

                        }
                        {
                            pageOnEdit === 1 ? 
                            (<div className='FocusedMenuBtn'>내 게시물</div>) : 
                            (<div onClick={()=> setPageOnEdit(1)}>내 게시물</div>)
                        }
                        {
                            pageOnEdit === 2 ? 
                            (<div className='FocusedMenuBtn'>예약관리</div>) : 
                            (<div onClick={()=> setPageOnEdit(2)}>예약관리</div>)
                        }
                        {
                            pageOnEdit === 3 ? 
                            (<div className='FocusedMenuBtn'>회원탈퇴</div>) : 
                            (<div onClick={()=> setPageOnEdit(3)}>회원탈퇴</div>)
                        }
                    </Menu>
                </MenuBlock>
                        {pageOnEdit === 0  && <EditInfo 
                            showPage={props.showPage} 
                            setShowPage={props.setShowPage}
                        />}
                        {
                            pageOnEdit === 1 && <MyPost/>
                        } 
                        {
                            pageOnEdit === 2 && <MyReservation/>
                        } 
                        {
                            pageOnEdit === 3 && <DeleteAccount/>
                        } 
            </MenuSpace>
        </Container>
        </>
       

    );
};

export default EditMemberMain;