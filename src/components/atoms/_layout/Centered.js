import React from "react"
import styled from "styled-components"

const CreatedWrap = styled.div`
  display: block;
`;

const CenteredContainer = styled.div`
  max-width: 800px;
  margin: 0 auto 48px;
`;

const Centered = ({children}) => (
  <CreatedWrap>
    <CenteredContainer>{children}</CenteredContainer>
  </CreatedWrap>
);

export default Centered;