import { React, useState } from "react";
import Thumnail from "./Thumnail";
import styled from "styled-components";
import { SlPencil, SlCloudUpload } from "react-icons/sl";
import { member_info } from "./Data";
import { useNavigate } from "react-router-dom";
import MyPageApi from "../../api/MyPageApi";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

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
    margin: 0rem 0 0.3rem 0;
    font-size: 0.8rem;
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
      background-color: #f4f8ff;
      border: 1px solid #5eadf7;
      border-radius: 0.3rem;
      resize: none;
      padding-left: 0.6rem;
      font-size: 0.7rem;
    }
    textarea:focus {
      outline: none;
      background-color: #5eadf7;
      outline: none;
      color: white;
      ::placeholder {
        color: white;
        padding-left: 0.3rem;
      }
    }
    textarea::placeholder {
      color: #555;
      padding-left: 0.3rem;
    }
  }

  .btnBlock {
    height: 20%;
    width: 95%;
    /* background-color: blue; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    button {
      width: 18%;
      height: 2rem;
      border-radius: 3rem;
      margin: 1rem 0.5rem;
      background-color: #2b5ec2;
      border: 1px solid #f4f8ff;
      color: white;
      font-size: 0.8rem;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
const Edit = styled.div`
  width: 100%;
  height: 70%; // 여기서 내소개 위치 변경함 (바꿔야함...)
  display: flex;
  flex-direction: row;
  p {
    text-align: left;
    margin: 1.6rem 0 0.3rem 0;
    font-size: 0.8rem;
    font-weight: bold;
  }
  input {
    width: 70%;
    height: 1.8rem;
    background-color: #f4f8ff;
    border: 1px solid #5eadf7;
    /* border: 1px solid #5EADF7; */
    border-radius: 0.3rem;
    padding-left: 0.6rem;
    color: black;
    font-size: 0.7rem;
    ::placeholder {
      color: #555;
      padding-left: 0.3rem;
    }
  }
  input:focus {
    background-color: #5eadf7;
    outline: none;
    color: white;
    ::placeholder {
      color: #f4f8ff;
    }
  }

  .hint {
    font-size: 0.4rem;
    text-align: center;
    display: flex;
    width: 76%;
    justify-content: right;
    height: 1rem;
    /* background-color: red; */
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
  const [inputNick, setInputNick] = useState();
  const [inputName, setInputName] = useState();
  const [inputTel, setInputTel] = useState();
  const [inputInst, setInputinst] = useState();
  const [inputIntro, setInputintro] = useState();

  const [responseData, setResponseData] = useState(null);

  const { memberId } = useParams();

  const [nickMessage, setNickMessage] = useState("");
  const [isNick, setIsNick] = useState("");

  // 회원 정보 모두 가져오기
  useEffect(() => {
    const infoFetchDate = async () => {
      const response = await MyPageApi.info(memberId);
      //   console.log(response);
      setResponseData(response.data);
      //   console.log(responseData.nickname);
    };
    infoFetchDate();
  }, [memberId]);

  // onChangeHandling
  const onChangeName = (e) => {
    const nameCurrent = e.target.value;
    setInputName(nameCurrent);
  };

  const onChangeTel = (e) => {
    const telCurrent = e.target.value;
    setInputTel(telCurrent);
  };

  const onChangeInst = (e) => {
    const instCurrent = e.target.value;
    setInputinst(instCurrent);
  };

  const onChangeIntro = (e) => {
    const introCurrent = e.target.value;
    setInputintro(introCurrent);
  };

  const onChangeNick = (e) => {
    const nickCurrent = e.target.value;
    setInputNick(nickCurrent);
    nickDuplication(memberId, inputNick);
  };

  // 닉네임 중복 체크
  const nickDuplication = async (memberId, nickname) => {
    try {
      const response = await MyPageApi.nicknamedup(memberId, nickname);
      if (response.status === 200) {
        console.log("닉네임 중복 체크 중");
        console.log(response.data);
        if (!response.data) {
          setNickMessage("해당 닉네임은 이미 사용 중입니다.");
          setIsNick(false);
        } else {
          setNickMessage("사용가능한 닉네입입니다. ");
          setIsNick(true);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  // 변경 사항 저장하는 함수
  const handleSave = async (apiMethod, memberId, inputValue) => {
    try {
      const response = await apiMethod(memberId, inputValue);
      console.log(inputValue);
      if (response.data === true) {
        console.log(`${apiMethod}변경 완료`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleOnclick = () => {
    handleSave(MyPageApi.nickname, memberId, inputNick);
    handleSave(MyPageApi.name, memberId, inputName);
    handleSave(MyPageApi.tel, memberId, inputTel);
    handleSave(MyPageApi.instagram, memberId, inputInst);
    handleSave(MyPageApi.introduce, memberId, inputIntro);
  };

  return (
    <>
      {responseData && (
        <EditBlock>
          <div>{memberId}</div>
          <button onClick={handleOnclick}>Save</button>
          <div className="title">내 정보 수정</div>
          <Edit>
            <LeftBox>
              <p>이메일</p>
              <div className="textBox">
                <input
                  type="text"
                  style={{ backgroundColor: "#eee", border: "1px solid #888" }}
                  defaultValue={responseData.email}
                  disabled
                />
              </div>
              {/* <p>비밀번호</p>
                        <div className="textBox">
                            <input type="password"  />
                        </div>
                        <p>비밀번호 확인</p>
                        <div className="textBox">
                            <input type="password"  />
                        </div> */}
              <p>닉네임</p>
              <div className="textBox">
                <input
                  type="text"
                  defaultValue={responseData.nickname}
                  onChange={onChangeNick}
                  value={inputNick}
                />
              </div>
              <div className="hint">{nickMessage}</div>
              <p>인스타그램(선택사항)</p>
              <div className="textBox">
                <input
                  type="text"
                  defaultValue={responseData.instagram}
                  onChange={onChangeInst}
                  value={inputInst}
                />
              </div>
            </LeftBox>
            <RightBox>
              <p>이름</p>
              <div className="textBox">
                <input
                  type="text"
                  defaultValue={responseData.name}
                  onChange={onChangeName}
                  value={inputName}
                />
              </div>
              <p>연락처</p>
              <div className="textBox">
                <input
                  type="tel"
                  defaultValue={responseData.tel}
                  onChange={onChangeTel}
                  value={inputTel}
                />
              </div>
            </RightBox>
          </Edit>
          <div className="introducBlock">
            <p>내 소개</p>
            <textarea
              className="introarea"
              name=""
              id=""
              cols="20"
              rows="5"
              style={{ width: "88%" }}
              defaultValue={responseData.introuduce}
              onChange={onChangeIntro}
              value={inputIntro}
            />
          </div>
          <div className="btnBlock">
            <button>저장</button>
            <button
              onClick={() => {
                props.setShowPage("마이페이지");
              }}
            >
              취소
            </button>
          </div>
        </EditBlock>
      )}
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
