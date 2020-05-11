import React from "react"
import styled from "styled-components"

const ContentWrap = styled.div`
  display: block;
  z-index: 10;
`

const ContentInner = styled.div`
  max-width: 800px;
  margin: 0 auto 48px;
`

const Content = ({ children }) => (
  <ContentWrap>
    <ContentInner>{children}</ContentInner>
  </ContentWrap>
);

export default Content;