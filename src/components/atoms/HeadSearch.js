import React from "react"
import styled from "styled-components"
import SearchIcon from "../../images/button_search-new.svg"
import SearchField from "./SearchField"

let text = localStorage.getItem("text") || "";

const HeadSearch = () => {
  return (
    <SearchWrap>
      <SearchBtn>
        <a href="#searchbox">
          <img src={SearchIcon} alt="サーチアイコン" />
        </a>      
      </SearchBtn>
      <SearchForm>
        <SearchField type="search" text={text} placeholder="キーワードで記事を検索する" />
      </SearchForm>
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
    padding: 10px;
    img {
      height: 20px;
      width: 20px;
    }
  }
`

const SearchForm =  styled.div`
  background-color: #000;
`