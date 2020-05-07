import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import HeadTitle from "../atoms/HeadTitle"
import NavMenu from "../atoms/NavMenu"

const HeaderWrap = styled.div`
  background-color: #000;
  width: 100%;
  min-width: 1260px;
  min-height: 80px;
`

const HeaderInner = styled.div`
  padding: 0 20px;
`

const HeaderLogo = styled.div`
  padding: 25px 0 25px;
`

const HeaderNav = styled.nav`
  display: block;
`

const LinkContainer = styled(Link)`
  color: #fff;
  text-decoration: none;
`

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
    </HeaderInner>
  </HeaderWrap>
)

export default Header;