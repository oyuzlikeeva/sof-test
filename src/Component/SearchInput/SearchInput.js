import React, { Component } from 'react';
import './SearchInput.css'

class SearchInput extends Component {
  render() {
    return (
        <input type={"text"} className={`input ${this.props.class}`}/>
    );
  }
}

export default SearchInput;
