import React, { Component } from 'react';
import Button from "../Component/Button/Button";

class LanguagesSwitcher extends Component {
  render() {
    return (
      <div style={{textAlign: 'right', padding: '3% 0'}}>
        <Button class={"text-button active"} text={"ENG"}/>
        <Button class={"text-button default"} text={"RU"}/>
      </div>
    );
  }
}

export default LanguagesSwitcher;
