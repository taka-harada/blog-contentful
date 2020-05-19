import React, {useState} from "react"
import styled from "styled-components"
import SearchIcon from "../../images/button_search-new.svg"
import SearchField from "./SearchField"

let text = localStorage.getItem("text") || "";

const HeadSearch = () => {
  const [flag, setFlag] = useState(true);

  // const openModal = () => {
  //   setFlag(!flag)
  // }

  return (
    <SearchWrap>
      <SearchBtn>
        <a href="#searchbox" onClick={() => setFlag(!flag)}>
          <img src={SearchIcon} alt="サーチアイコン" />
        </a>      
      </SearchBtn>
      <SearchFormWrap flag={flag} >
        <SearchForm>
          <SearchField type="search" text={text} placeholder="キーワードで記事を検索する" />
        </SearchForm>
      </SearchFormWrap>
    </SearchWrap>
  )
}

export default HeadSearch;

const SearchWrap = styled.div`
  position: relative;
`

const SearchBtn = styled.nav`
  padding: 25px 10px 20px 40px;
  a {
    display: block;
    width: 20px;
    height: 20px;
    img {
      width: 100%;
    }
  }
`

const SearchFormWrap = styled.div`
  // display: ${props => props.show ? "block" : "none"};
  background-color: #000;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  ${({ flag }) => flag && `display: none;`}
`

const SearchForm =  styled.div`
  max-width: 700px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`