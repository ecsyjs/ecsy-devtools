import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const Queries = styled.div`
  margin-left: 20px;
  color: #1B856B;
  background-color: #273635;
  display: flex;
  align-items: center;
`;

const QueryKey = styled.span`
  color: #2CEBBD;
  font-size: 0.9em;
`;

const QueryNumEntities = styled.span`
  color: #2CEBBD;
`;

export default class SystemQueries extends React.Component {

  render() {
    const { queries, data, overSystem, overComponents, overQueries } = this.props;

    let queriesHtml = Object.keys(queries).map(queryName => {
      let key = queries[queryName].key;
      let query = data.queries.find(q => q.key === key);
      const components = query.components.map(name => (
        <span class="ComponentName">{name}</span>
      ));

      const classes = classNames({
        systemQueryLi: true,
        highlighted: !overSystem && (
          overQueries.filter(q => q.key === key).length > 0
          ||
          query.components.find(c => overComponents.indexOf(c) !== -1)
        )
      });

      return (
        <li className={classes}>
          <div>{ components }</div>
          <QueryNumEntities>{query.numEntities}</QueryNumEntities>
        </li>
      );
    });

    // query.mandatory

    return (
      <Queries>
        <span class="queriesTitle">QUERIES</span>
        <ul class="SystemsQueries">{queriesHtml}</ul>
      </Queries>
    );
  }
}
