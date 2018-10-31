import React, { Component } from 'react';

class THead extends Component {
  render() {
    let td = (this.props.td).map(function(td) {
      return (<td className={`${td.isFilter && 'filter'}`}>{td.text}</td>)
    });

    return (
      <thead className="">
      {td}
      </thead>
    );
  }
}

export default THead;
