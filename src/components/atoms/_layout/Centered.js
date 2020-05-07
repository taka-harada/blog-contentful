import React from "react"
import styled from "styled-components"

const CreatedWrapper = styled.div`
  display: block;
`;

const CenteredContainer = styled.div`
  max-width: 800px;
  margin: 0 auto 48px;
`;

const Centered = ({children}) => (
  <CreatedWrapper>
    <CenteredContainer>{children}</CenteredContainer>
  </CreatedWrapper>
);

export default Centered;