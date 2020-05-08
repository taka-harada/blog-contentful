import React from "react"
import styled from "styled-components"

// component
const HeadTitle = ({ level, children }) => {
  let HeaderComponent = null
  switch (level) {
    case 1:
      HeaderComponent = ( children ) => <H1Container>{children}</H1Container>;
      break;
    case 2:
      HeaderComponent = ( children ) => <H2Container>{children}</H2Container>;
      break;
    case 3:
      HeaderComponent = ( children ) => <H3Container>{children}</H3Container>;
      break;
    case 4:
      HeaderComponent = ( children ) => <H4Container>{children}</H4Container>;
      break;
    case 5:
      HeaderComponent = ( children ) => <H5Container>{children}</H5Container>;
      break;
    default:
      HeaderComponent = ( children ) => <h1>{children}</h1>
      break;
  }
  return HeaderComponent(children);
}

export default HeadTitle;

// styles
const H1Container = styled.h1`
  font-size: 34px;
  font-weight: bold;
  margin: 0 12px 0;
`
const H2Container = styled.h2`
  font-size: 24px;
  font-weight: bold;
  border-bottom: 2px solid #000;
`

const H3Container = styled.h3`
  font-size: 20px;
  font-weight: bold;
`

const H4Container = styled.h4`
  font-size: 18px;
  font-weight: bold;
`

const H5Container = styled.h5`
  font-size: 18px;
  font-weight: bold;
`