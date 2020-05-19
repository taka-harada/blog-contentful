import React from "react"
import styled from "styled-components"

const TextField = ({ type, error, value, placeholder, onChange }) => (

  <Input
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={e => onChange && onChange(e.target.value)}
    error={error}
  />
)

export default TextField;

// const Input = styled.input.attrs({ type: "text" })`
const Input = styled.input`
  width: 96%;
  font-size: 16px;
  line-height: 28px;
  color: #666;
  padding: 10px 2%;
  margin-bottom: 12px;
  border: 1px solid #666;
  border-radius: 1px;
`;
