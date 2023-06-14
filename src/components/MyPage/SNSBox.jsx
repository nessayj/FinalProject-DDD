import React from 'react';
import styled from 'styled-components';
import { SlSocialInstagram, SlPaperPlane, SlUserFollow } from 'react-icons/sl';


const SocialBox = styled.div`
  width: calc(100%-1rem);
  height: 12%;
  text-align: right;
  /* background-color: red; */
  flex-direction: row;
  padding-right: 1.6rem;
  .icon{
    display: inline-block;
    font-size: 1.2rem;
    padding: .6rem .6rem;
    cursor: pointer;
    color: #999;
    margin-right: .3rem;
  }
`;

const SNSBox = (props) => {
    return (
        <SocialBox>
           <div className="icon" onClick={()=>{}}><SlPaperPlane/></div> 
           <div className="icon" onClick={()=>{}}><SlSocialInstagram/></div> 
        </SocialBox>
    );
};

export default SNSBox;