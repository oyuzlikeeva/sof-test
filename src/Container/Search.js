import React, { Component } from 'react';
import SearchInput from "../Component/SearchInput/SearchInput";
import Button from "../Component/Button/Button";

import logo from "../images/32..svg"
import LanguagesSwitcher from "./LanguagesSwitcher";

class Search extends Component {
  render() {
    return (
      <div className="" style={{marginTop: '10%', textAlign: 'center'}}>
        <p>Задайте вопрос или введите ключевые слова:</p>
        <SearchInput class={"main-search-input input-right"}/><Button class={"button orange button-right"} text={"Найти!"}/>
        <p>Все ответы взяты со
          <img src={logo} style={{position: 'relative', top: '3px', marginLeft: '8px'}} width="150px" alt={"Stackoverflow logo"}/>
        </p>
      </div>
    );
  }
}

export default Search;
