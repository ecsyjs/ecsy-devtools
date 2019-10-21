import React from 'react';
import classNames from 'classnames';
import Query from './Query';

export default class Queries extends React.Component {

  render() {
    const queries = this.props.queries;

    debugger;
    let queriesHtml = Object.keys(queries).map(queryName => (
      <Query name={queryName} query={queries[queryName]}/>
    ));

    return (
      <div>
        <h4>Queries</h4>
        <ul>{queriesHtml}</ul>
      </div>
    );
  }
}
