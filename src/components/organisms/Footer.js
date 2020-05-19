import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Footer = ({ siteTitle }) => (
  <FooterWrap>
    <FooterInner>
      <FooterContainer>
        <FooterLogo><LinkContainer to="/">{siteTitle}</LinkContainer></FooterLogo>
        <FooterCopyright>
          <p>&copy;&nbsp;Takayuki&nbsp;Harada.</p>
        </FooterCopyright>
      </FooterContainer>
    </FooterInner>
  </FooterWrap>
)

export default Footer;

const FooterWrap = styled.footer`
  background-color: #000;
`

const FooterInner = styled.div`
  padding: 0 20px;
`

const FooterContainer = styled.div`
  padding: 50px 0;
  position: relative;
  color: #fff;
  text-align: center;
`

const FooterLogo = styled.div`
  display: block;
`

const FooterCopyright = styled.div`
  margin-top: 20px;
  p {
    font-family: Roboto,sans-serif;
    font-weight: 400;
    font-size: 11px;
    line-hight: 16px;
  }
`

const LinkContainer = styled(Link)`
  color: #fff;
  text-decoration: none;
`
