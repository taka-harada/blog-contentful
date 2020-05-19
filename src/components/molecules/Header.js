import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import HeadTitle from "../atoms/HeadTitle"
import NavMenu from "../atoms/NavMenu"
import HeadSearch from "../atoms/HeadSearch"

// const HeaderNav = () => (
//   <ul>
//     <li><Link to="/">TOPIC</Link></li>
//     <li><Link to="/">TECH</Link></li>
//   </ul>
// )

const Header = ({ siteTitle }) => (

  <HeaderWrap>
    <HeaderInner>
      <HeaderLogo><LinkContainer to="/">{siteTitle}</LinkContainer></HeaderLogo>
      <HeaderNav>
        <NavMenu />
      </HeaderNav>
      <HeadSearch />
    </HeaderInner>
  </HeaderWrap>
)

export default Header;

const HeaderWrap = styled.div`
  background-color: #000;
  //width: 100%;
  //min-width: 1260px;
  min-height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const HeaderInner = styled.div`
  padding: 0 20px;
  display: flex;
`

const HeaderLogo = styled.div`
  padding: 25px 0 25px;
  flex: 1;
`

const HeaderNav = styled.nav`
  padding: 25px 0 25px;
  display: block;
`

const LinkContainer = styled(Link)`
  color: #fff;
  text-decoration: none;
`
