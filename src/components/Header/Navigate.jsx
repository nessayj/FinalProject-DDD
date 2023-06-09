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
        justify-content: center;
        position: relative;
        top: 6rem;
        left: 8rem;
        flex-direction: column;
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
  
    .burger_menu > div{
      width: 25px;
      height: 3px;
      background-color: black;
      margin: 5px;
      transition: all 0.3s ease;
    }
    .menu_box_visible {
      width: 20rem;
      height: 100%;
      position: fixed;
      left: 0;
      top: 76px;
      background-color: white;
      box-shadow: 2px 0px 1px rgba(44, 44, 44, 0.137);
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
                    {menu.map((data) => (
                    <a href={data.address} key={data.address} onClick={() => setMenuToggle(false)}>
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