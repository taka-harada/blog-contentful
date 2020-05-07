import styled, { createGlobalStyle } from "styled-components"

createGlobalStyle`
  html {
    background-color: #fff;
  }
  body {
    font-size: 14px;
    font-family: "Montserrat","游ゴシック",YuGothic,"ヒラギノ角ゴ ProN W3","Hiragino Kaku Gothic ProN","メイリオ",Meiryo,sans-serif;
    colorf: #333;
    background-color: #fff;
    margin: 0;
    padding: 0;
    display: block;
  }
`;

const Background = styled.div`
  position: relative;
  display: block;
  width: 100%;
  min-width: 1260px;
  height: auto;
  background-color: #eee;
`

export default Background