import React, { Component } from 'react';
import THead from "./THead";
import TBody from "./TBody";

class Table extends Component {
  render() {
    return (
      <table className="">
        <THead td={[{text: 'Author', isFilter: true}, {text: 'Theme', isFilter: true}, {text: 'Tags', isFilter: true}, {text: 'Comment count', isFilter: true}]}/>
        <TBody tr={[{author: 'Автор', theme: 'Вопросы за 1000', tags: 'своя, игра, кот, в мешке', commentCount: '3'},
                    {author: 'Автор', theme: 'Вопросы за 100', tags: 'игра', commentCount: '10'},
                    {author: 'Автор', theme: 'Вопросы за 300', tags: 'кот, в мешке', commentCount: '5'}]}/>
      </table>
    );
  }
}

export default Table;
