import React from "react";
import "./SearchBox.scss";
import {GoSearch} from 'react-icons/go';
import { useState } from "react/cjs/react.development";

const SearchBox = (props) => {

  const [inputQuery, setInputQuery] = useState('melbourne');


  const inputChangeHandler = (e) => {
    setInputQuery(e.target.value);
  }


  const submitHandler = (e) => {
    e.preventDefault();
    if (!inputQuery || inputQuery === '') return;
    props.onSaveQuery(inputQuery);
    setInputQuery('');
  }
  return (
    <form className="search-box" onSubmit={submitHandler}>
      <input
        type="text"
        className="search-box__input"
        placeholder="Another Location"
        onChange={inputChangeHandler}
        value={inputQuery}
      />
      <button className="search-box__btn" type="submit">
        <GoSearch />
      </button>
    </form>
  );
};

export default SearchBox;
