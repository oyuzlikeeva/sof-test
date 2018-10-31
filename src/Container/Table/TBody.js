import React, { Component } from 'react';
import SearchInput from "../../Component/SearchInput/SearchInput";
import Button from "../../Component/Button/Button";
import './Table.css'

class TBody extends Component {
  render() {
    let tr = (this.props.tr).map(function(td) {
      return (
        <tr>
          <td>{td.author}</td> <td>{td.theme}</td> <td>{td.tags}</td> <td>{td.commentCount}</td>
        </tr>
      )
    });

    return (
      <tbody>{tr}</tbody>
    );
  }
}

export default TBody;
