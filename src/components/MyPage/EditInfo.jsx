import { React, useState } from 'react';
import Thumnail from './Thumnail';
import styled from 'styled-components';
import { SlPencil, SlCloudUpload } from 'react-icons/sl';
import {member_info} from './Data';
import { useNavigate } from 'react-router-dom';
import MyPageApi from '../../api/MyPageApi';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


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
  
    const [responseData, setResponseData] = useState(null);

    const { memberId } = useParams();
  
    useEffect(() => {
        const infoFetchDate = async () => {
            const response = await MyPageApi.info(memberId);
            console.log(response);
            setResponseData(response.data);
            // console.log(responseData)
        };
        infoFetchDate();
    }, [memberId]);



    return (
      <> 
      { responseData && ( 
            <EditBlock>
                <div className='title' >내 정보 수정</div>
                <Edit>
                    <LeftBox>
                        <p>이메일</p>
                        <div className="textBox">
                            <input type="text" style={{backgroundColor:'#eee', border:'1px solid #888'}} 
                            defaultValue={responseData.email} 
                            disabled/>
                        </div>
                        <p>비밀번호</p>
                        <div className="textBox">
                            <input type="password"  />
                        </div>
                        <p>비밀번호 확인</p>
                        <div className="textBox">
                            <input type="password"  />
                        </div>
                        <p>닉네임</p>
                        <div className="textBox">
                            <input type="text" 
                            defaultValue={responseData.nickname}
                            />
                        </div>

                    </LeftBox>
                    <RightBox>
                        <p>이름</p>
                        <div className="textBox">
                            <input type="text" 
                            defaultValue={responseData.name} 
                            />
                        </div>
                        <p>연락처</p>
                        <div className="textBox">   
                            <input type="tel" 
                            defaultValue={responseData.tel}  
                            />
                        </div>
                        <p>인스타그램(선택사항)</p>
                        <div className="textBox">
                            <input type="text" 
                            defaultValue={responseData.instagram} 
                            />
                        </div>
                    </RightBox>
                    
                </Edit>
                <div className="introducBlock">
                    <p>내 소개</p>
                    <textarea className='introarea' name="" id="" cols="20" rows="5" style={{width:'88%'}} 
                    defaultValue={responseData.introuduce}
                    />
                </div>
                <div className="btnBlock">
                    <button>저장</button>
                    <button onClick={()=>{props.setShowPage('마이페이지')}}>취소</button>
                </div>
            </EditBlock>)
            }
      </>
    );
  };
  
  export default EditInfo;
  

// const EditInfo = (props) => {
//     const storageEmail = window.localStorage.getItem("storageEmail")
  
//     const [loading, setLoading] = useState(false);
//     const [responseData, setResponseData] = useState(null);
  
//     const infoFetchDate = async () => {
//       setLoading(true);
//       try {
//         const response = await MyPageApi.info(storageEmail);
//         if (response.status === 200) {
//           setResponseData(response.data);
//           console.log(responseData)
//         } else {
//           console.log('인증 오류');
//         }
//       } catch (e) {
//         console.log(e);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     useEffect(() => {
//       infoFetchDate();
//     }, []);
  
//     if (loading) {
//       return <div>Loading...</div>;
//     }

//     return (
//         <> 
//         { responseData && ( 
//             <EditBlock>
//                 <div className='title' >내 정보 수정</div>
//                 <Edit>
//                     <LeftBox>
//                         <p>이메일</p>
//                         <div className="textBox">
//                             <input type="text" style={{backgroundColor:'#eee', border:'1px solid #888'}} 
//                             defaultValue={responseData.email} 
//                             disabled/>
//                         </div>
//                         <p>비밀번호</p>
//                         <div className="textBox">
//                             <input type="password"  />
//                         </div>
//                         <p>비밀번호 확인</p>
//                         <div className="textBox">
//                             <input type="password"  />
//                         </div>
//                         <p>닉네임</p>
//                         <div className="textBox">
//                             <input type="text" 
//                             defaultValue={responseData.nickName}
//                             />
//                         </div>

//                     </LeftBox>
//                     <RightBox>
//                         <p>이름</p>
//                         <div className="textBox">
//                             <input type="text" 
//                             defaultValue={responseData.name} 
//                             />
//                         </div>
//                         <p>연락처</p>
//                         <div className="textBox">   
//                             <input type="tel" 
//                             defaultValue={responseData.tel}  
//                             />
//                         </div>
//                         <p>인스타그램(선택사항)</p>
//                         <div className="textBox">
//                             <input type="text" 
//                             defaultValue={responseData.inst} 
//                             />
//                         </div>
//                     </RightBox>
                    
//                 </Edit>
//                 <div className="introducBlock">
//                     <p>내 소개</p>
//                     <textarea className='introarea' name="" id="" cols="20" rows="5" style={{width:'88%'}} 
//                     defaultValue={responseData.introuduce}
//                     />
//                 </div>
//                 <div className="btnBlock">
//                     <button>저장</button>
//                     <button onClick={()=>{props.setShowPage('마이페이지')}}>취소</button>
//                 </div>
//             </EditBlock>)
//             }
//         </>
       
//     );
// };

// export default EditInfo;