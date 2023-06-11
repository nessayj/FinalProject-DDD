import React from 'react';
import Thumnail from './Thumnail';
import styled from 'styled-components';
import { SlPencil, SlCloudUpload } from 'react-icons/sl';
import {member_info} from './Data';


// ====== 이미지 클릭 하였을 때 바뀌는 것으로 고민 해보기 =======
// const EditBG = styled.button`
// position: relative;
// top: -5%;
// left: 90%;
// width: 3rem;
// height: 2rem;
// border-radius: 1.5rem;
// border: 1px solid #aaa;
// font-size: .7rem;
// cursor: pointer;
// /* background-color: #ccc; */
// /* color: white; */
// :hover{
//     background-color: black;
//     color: white;
// }
// `;
// const EditProfile = styled(EditBG)`
//     top: -0%;
//     left: 15%;
// `;
const Container = styled.div`

  /* background-color  : beige; */
  width: 100%;
  height: 100%;
  /* display: flex; */
  /* flex-direction: row; */
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
        /* margin-left: 7%; */
        margin: 0rem 0 .3rem 0;
        font-size: .8rem;
        /* font-size: .8rem; */
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
        height: auto;
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
                background-color: #050E3D ;
                border: 1px solid #F4F8FF;
                color: white;
                font-size: .8rem;
                cursor: pointer;
                /* float : right; */
                display: flex;
                justify-content:center;
                align-items: center;
            }

        }
`;
const Edit =styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    p{
        text-align: left;
        /* margin-left: 7%; */
        margin: 2rem 0 .3rem 0;
        font-size: .8rem;
        /* font-size: .8rem; */
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
    /* width: calc(50%-1rem); */
    width: 50%;
    height: 100%;
    /* background-color: aqua; */
    /* padding-top: 2rem; */
    padding-left: 1rem;
`;
const RightBox = styled.div`
    width: 50%;
    height: 100%;
    /* background-color: red; */
    /* padding-top: 2rem; */
`;



const EditInfo = (props) => {
    return (
        <Container>
            <Thumnail/>
                        {/* ====== 이미지 클릭 하였을 때 바뀌는 것으로 고민 해보기 =======  */}
                        {/* <EditBG> 수정 </EditBG>
                        <EditProfile> 수정 </EditProfile> */}
                        {/* ============================================================ */}
            <MenuSpace>
                <MenuBlock>
                    <Menu>
                        <div onClick={() => (props.setShowPage(0))}>마이페이지</div>
                        {
                            props.showPage === 1 ? (
                                <div className='FocusedMenuBtn'>내 정보 수정</div>
                            ) : (
                                <div>내 정보 수정</div>
                            )
                        }

                        <div>내 게시물</div>
                        <div>예약관리</div>
                        <div>회원탈퇴</div>
                    </Menu>
                    {/* <Menu>
                        <div className='menuBtn' onClick={() => (props.setShowPage(0))}>마이페이지</div>
                        <div className='menuBtn'>내 정보 수정</div>
                        <div className='menuBtn'>내 게시물</div>
                        <div className='menuBtn'>예약관리</div>
                        <div className='menuBtn'>회원탈퇴</div>
                    </Menu> */}
                </MenuBlock>
                <EditBlock>
                        <div className='title' >내 정보 수정</div>
                    <Edit>
                        <LeftBox>
                            <p>이메일</p>
                            <div className="textBox">
                                <input type="text" style={{backgroundColor:'#eee', border:'1px solid #888'}} placeholder={member_info.email} disabled/>
                            </div>
                            <p>비밀번호</p>
                            <div className="textBox">
                                <input type="password" />
                            </div>
                            <p>닉네임</p>
                            <div className="textBox">
                                <input type="text" placeholder={member_info.nickName}  />
                            </div>

                        </LeftBox>
                        <RightBox>
                            <p>이름</p>
                            <div className="textBox">
                                <input type="text" placeholder={member_info.name} />
                            </div>
                            <p>비밀번호 확인</p>
                            <div className="textBox">
                                <input type="password"  />
                            </div>
                            <p>인스타그램(선택사항)</p>
                            <div className="textBox">
                                <input type="text" placeholder={member_info.inst} />
                            </div>
                        </RightBox>
                    </Edit>
                    <div className="introducBlock">
                        <p>내 소개</p>
                        <textarea className='introarea' name="" id="" cols="20" rows="5" style={{width:'88%'}} placeholder={member_info.introuduce}></textarea>
                    </div>
                    <div className="btnBlock">
                        <button>저장</button>
                        <button>취소</button>
                    </div>

                    

                </EditBlock>
            </MenuSpace>
 


        </Container>
    );
};

export default EditInfo;