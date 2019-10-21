import React from 'react';
import classNames from 'classnames';
import Query from './Query';

export default class Queries extends React.Component {

  render() {
    const queries = this.props.queries;

    let queriesHtml = queries.map(query => (
      <Query key={query.key} query={query}/>
    ));

    return (
      <div>
        <h3>Queries {queries.length}</h3>
        <ul>{queriesHtml}</ul>
      </div>
    );
  }
}
