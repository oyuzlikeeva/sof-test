import React, { Component } from 'react';
import Table from "./Table/Table";

class ResultsTable extends Component {
  render() {
    return (
      <div>
        <p style={{textAlign: 'center'}}>Результаты по запросу: {'request'}</p>
        <Table/>
      </div>
    );
  }
}

export default ResultsTable;
