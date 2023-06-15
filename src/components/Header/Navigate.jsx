import React, {useState} from "react";
import {BsList} from "react-icons/bs";
import {AiOutlineClose} from "react-icons/ai"
import styled from "styled-components";

const NavStyle = styled.div`
  .navigation_wrapper {
    display: flex;
    align-items: center;
    top: 0;
    z-index: 9999;
  }
  
  .menu_list {
    .close-icon {
        float: right;
        margin: 1rem 1.5rem;
        cursor: pointer;
    }
    .menu_name {
        display: flex;
        justify-content: space-around;
        position: relative;
        top: 6rem;
        //left: 8rem;
        flex-direction: row;
        margin-bottom: 2rem;
    }
  }
  .menu_name a {
    text-decoration: none;
    color: inherit;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

    .burger_menu{
      display: block;
      margin-left: 40px;
      cursor: pointer;
    }

    .menu_box_visible {
      font-weight: bold;
      width: 100%;
      height: 40vh;
      position: absolute;
      left: 0;
      top: 76px;
      background-color: white;
      box-shadow: 2px 0px 1px rgba(44, 44, 44, 0.137);
      z-index: 9999;
    }
  
    .menu_box_hidden {
      display: none;
    }
  

  
    .menu_item {
      margin: 15px 0;
    }  

`;


const Navigator = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [closeIcon, setCloseIcon] = useState(false);
    const menu = [
        {name : "HOME", address : "/"},
        {name : "전시", address : "/exhibitList"},
        {name : "게시판", address: "/"},
        {name : "고객센터", address: "/"}
    ];

    const onCloseIcon = () => {
        setCloseIcon(!closeIcon);
        setMenuToggle(false);
    }

    return (
        <NavStyle>
        <nav className="navigation_wrapper">
            <div className="burger_menu"
            onClick={() => menuToggle ? setMenuToggle(false) : setMenuToggle(true)}>
                <BsList size="30"/>
            </div>
            <div className={['menu_box', !menuToggle ? "menu_box_hidden" : "menu_box_visible",].join(" ")}>
                <div className="menu_list">
                    <div className="close-icon">
                    <AiOutlineClose size="30"  onClick={onCloseIcon} />
                    </div>
                    <div className="menu_name">
                    {menu.map((data,index) => (
                    <a href={data.address} key={index} onClick={() => setMenuToggle(false)}>
                        {data.name}
                    </a>
                    ))}
                    </div>    
                </div>
            </div>
        </nav>
        </NavStyle>
    );
}

export default Navigator;