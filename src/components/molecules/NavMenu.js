import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavMenu = () => {

  // ナビゲーションバーに表示する項目
  const NavMenuItem = ["Home", "TOPIC", "TECH"];

  const NavMenuList = NavMenuItem.map((item) => {
    let page_link = "";
    if (item === "Home") {
      page_link = "/"
    }
    else page_link = "/" + item.toLocaleLowerCase() + "/";

    return (
      <li key={page_link}>
        <Link to={page_link}>
          {item}
        </Link>
      </li>
    );
  });

  return (
    <NavWrap>{NavMenuList}</NavWrap>
  )
}

export default NavMenu;

const NavWrap = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  li{
    display: list-item;
    margin: 0;
    // 擬似要素
    :not(:first-child){
      padding-left: 45px;
    }
    a {
      color: #fff;
    }
  }
`
