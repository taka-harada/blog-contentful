import React, {useState} from "react"
import TextField from "./TextField"

const SearchField = ({ type, text, placeholder }) => {
  const [inputText, setInputText] = useState(text);
  const checkAndSetText = newText => {
    if (newText.length > 10) return;

    setInputText(newText)
    localStorage.setItem("text", newText)
  };

  
  return (
    <>
      <TextField
        type={type}
        value={inputText}
        placeholder={placeholder}
        onChange={checkAndSetText}
        error={false}
      />
    </>
  )
}
export default SearchField;