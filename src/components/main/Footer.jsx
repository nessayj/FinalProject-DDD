import React from "react";
import styled from "styled-components";


const Foot = styled.div`
    margin-top: 20rem;
    height: 20vh; 
    width: 100%;
    border-top:2px solid #050E3D;


  #bottomMenu{
    height:20px;
    margin-left:60px;
  }
  #bottomMenu ul {
    margin-top:15px;  
  }
  #bottomMenu ul li{
    float:left; 
    padding:5px 20px;
    list-style: none;
 
  }
  #bottomMenu ul li:last-child{
    border:none;  
  }
  #bottomMenu ul li a, #bottomMenu ul li a:visited {  
    font-size:13px;  
    font-weight: bold;
    color:#666;   
  }
  #bottomMenu ul li p {
    font-size:13px;  
    font-weight: bold;
    color:#666; 
  }
  .forth {
    font-size: 14px;
    font-weight: bold;
    color: black;
  }
  #bottomMenu p {
    font-size: 13px;
    font-weight: bold;
    color: black;
  }
`;


  const Footer = () => {
    return(
        <Foot>
            <div id="bottomMenu">
          <ul className="first">
            {/* <li><a href="#!">회사 소개</a></li>
            <li><a href="#!">개인정보처리방침</a></li>
            <li><a href="#!">사이트약관</a></li>
            <li><a href="#!">사이트맵</a></li>
            <li><a href="#!">사업자정보확인</a></li> */}
          </ul>
          <br/>
          <ul className="second">
            <li><p>Diverse Different Display :DDD</p></li>
            <li><p>장연주 정연우 이택현 곽은지</p></li>
        </ul>
        <br/><br />
        <ul className="third">
            
        </ul>
        <br/><br />
        <ul className="forth">
            
        </ul>    
        </div>   
        </Foot>

    );
  }

  export default Footer;