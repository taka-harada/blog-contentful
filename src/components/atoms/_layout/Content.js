import React from "react"
import styled from "styled-components"

const ContentWrap = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`

const ContentInner = styled.div`
  margin: 80px auto 0;
`

const Content = ({ children }) => (
  <ContentWrap>
    <ContentInner>{children}</ContentInner>
  </ContentWrap>
);

export default Content;