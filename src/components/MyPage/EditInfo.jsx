import { React, useState } from 'react';
import Thumnail from './Thumnail';
import styled from 'styled-components';
import { SlPencil, SlCloudUpload } from 'react-icons/sl';
import {member_info} from './Data';
import { useNavigate } from 'react-router-dom';
import MyPageApi from '../../api/MyPageApi';
import { useEffect } from 'react';



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
        /* background-color: red; */
        height: 2.8rem;
        font-weight: bold;
    }
    .introducBlock {
        /* background-color: aqua; */
        width: calc(100% - 1rem);
        textarea {
            width: 88%;
            background-color: #F4F8FF;
            border: 1px solid #5EADF7;
            border-radius: .3rem;
            resize: none;
            padding-left: .6rem;
            font-size: .7rem;

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
                background-color: #2B5EC2 ;
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
    height: 80%; // 여기서 내소개 위치 변경함 (바꿔야함...)
    display: flex;
    flex-direction: row;
    p{
        text-align: left;
        margin: 1.6rem 0 .3rem 0;
        font-size: .8rem;
        font-weight: bold;
    }
    input{
        width: 70%;
        height: 1.8rem;
        background-color: #F4F8FF;
        border: 1px solid #5EADF7;
        /* border: 1px solid #5EADF7; */
        border-radius: .3rem;
        padding-left: .6rem;
        color: black;
        font-size: .7rem;
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
    min-width: 200px;
    
    height: 100%;
    /* background-color: aqua; */
`;
const RightBox = styled.div`
    width: 50%;
    min-width: 200px;

    height: 100%;
    /* background-color: red; */
`;



const EditInfo = (props) => {
    const storageEmail = window.localStorage.getItem("storageEmail")
    const accessToken = window.localStorage.getItem('accessToken')


    // console.log(storageEmail)
    // console.log(accessToken)

    const naviagte = useNavigate('')


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const onChangeloginId = (e) => {
        setEmail(e.target.value);
    }

    const onChangeloginPwd = (e) => {
        setPassword(e.target.value);
    }


    const getErrorMessage = (status) => {
        if (status === 401) {
            return "가입하지 않은 이메일이거나, 잘못된 비밀번호입니다.";
        } else {
            return "오류가 발생했습니다. 다시 시도해주세요.";
        }
        };

    const onClickEdit = () => {
      const infoFetchDate = async () => {
        
        console.log('클릭됨');
        try {
            const response = await MyPageApi.info(storageEmail, accessToken);
            console.log(response.data)

        
            if (response.status === 200) {
                console.log('리스폰')
        
        
            } else {
                const errorMessage = getErrorMessage(response.status);
                setErrorMsg(errorMessage);
                console.log('인증 오류 ')
            }

        } catch (e) {
            console.log(e);
            // 일반적으로, 네트워크 요청에 실패했을 때 HTTP 상태 코드는 사용할 수 없습니다.
            // 이 경우에는 일반적인 에러 메시지를 설정합니다.
            setErrorMsg('가입하지 않은 이메일이거나, 잘못된 비밀번호입니다.');
        }
      };
      infoFetchDate();
    };

    // useEffect(() => {
    //     // console.log('useeEffect 실행')
    //     onClickEdit();
    //   }, []);
       


    return (
        <>   
        <button onClick={onClickEdit}>data가져오기</button>
            <EditBlock>
                <div className='title' >내 정보 수정</div>
                <Edit>
                    <LeftBox>
                        <p>이메일</p>
                        <div className="textBox">
                            <input type="text" style={{backgroundColor:'#eee', border:'1px solid #888'}} defaultValue={member_info.email} disabled/>
                        </div>
                        <p>비밀번호</p>
                        <div className="textBox">
                            <input type="password" defaultValue={member_info.pwd} />
                        </div>
                        <p>비밀번호 확인</p>
                        <div className="textBox">
                            <input type="password"  defaultValue={member_info.pwd}/>
                        </div>
                        <p>닉네임</p>
                        <div className="textBox">
                            <input type="text" defaultValue={member_info.nickName}  />
                        </div>

                    </LeftBox>
                    <RightBox>
                        <p>이름</p>
                        <div className="textBox">
                            <input type="text" defaultValue={member_info.name} />
                        </div>
                        <p>연락처</p>
                        <div className="textBox">
                            <input type="tel" defaultValue={member_info.tel}  />
                        </div>
                        <p>인스타그램(선택사항)</p>
                        <div className="textBox">
                            <input type="text" defaultValue={member_info.inst} />
                        </div>
                    </RightBox>
                    
                </Edit>
                <div className="introducBlock">
                    <p>내 소개</p>
                    <textarea className='introarea' name="" id="" cols="20" rows="5" style={{width:'88%'}} defaultValue={member_info.introuduce}></textarea>
                </div>
                <div className="btnBlock">
                    <button>저장</button>
                    <button onClick={()=>{props.setShowPage('마이페이지')}}>취소</button>
                </div>
            </EditBlock>
        </>
       
    );
};

export default EditInfo;