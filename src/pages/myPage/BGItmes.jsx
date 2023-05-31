import React from "react";
import styled, { keyframes } from "styled-components";
import {ImageUrl1, ImageUrl2, ImageUrl3 } from "./imageURL";
import Marquee from 'react-fast-marquee'

const ItemWrap = styled.div`
    overflow: hidden;
    min-width: 1200px;
    height: 100vh;
    /* min-height: 676px; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    /* background-color: aqua; */
    display: flex;
`;

const ItemBlock = styled.div`
    /* background-color: red; */
    width: 160px;
    /* height: 200px; */
    height: 100vh;
    margin-left:.6rem;    

`;
const Item =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 160px;
    min-height: 230px;
    height: 230px;
    width: 160px;
    background-color: white;
    margin-bottom: .6rem;
    border-radius: .3rem;
    overflow: hidden;
`;



const BGItmes = () => {
    return(
        <ItemWrap>
            <ItemBlock>
                {
                    ImageUrl1.map((ImageUrl1, index) => (
                        <Item key={index}>
                            <img src={ImageUrl1} alt="" />
                        </Item>
                    ))
                }
            </ItemBlock>
            <ItemBlock>
                {
                    ImageUrl2.map((ImageUrl, index) => (
                        <Item key={index}>
                            <img src={ImageUrl} alt="" />
                        </Item>
                    ))
                }
            </ItemBlock>
            <ItemBlock>
                {
                    ImageUrl3.map((ImageUrl, index) => (
                        <Item key={index}>
                            <img src={ImageUrl} alt="" />
                        </Item>
                    ))
                }
            </ItemBlock>
            <ItemBlock>
                {
                    ImageUrl1.map((ImageUrl, index) => (
                        <Item key={index}>
                            <img src={ImageUrl} alt="" />
                        </Item>
                    ))
                }
            </ItemBlock>
            <ItemBlock>
                {
                    ImageUrl3.map((ImageUrl, index) => (
                        <Item key={index}>
                            <img src={ImageUrl} alt="" />
                        </Item>
                    ))
                }
            </ItemBlock>
            <ItemBlock>
                {
                    ImageUrl1.map((ImageUrl, index) => (
                        <Item key={index}>
                            <img src={ImageUrl} alt="" />
                        </Item>
                    ))
                }
            </ItemBlock>
            <ItemBlock>
                {
                    ImageUrl2.map((ImageUrl, index) => (
                        <Item key={index}>
                            <img src={ImageUrl} alt="" />
                        </Item>
                    ))
                }
            </ItemBlock>
        </ItemWrap>
    )
}

export default BGItmes;