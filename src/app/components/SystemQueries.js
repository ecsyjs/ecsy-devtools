import React from 'react';
import styled from 'styled-components';

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
    const queries = this.props.queries;
    const data = this.props.data;

    let queriesHtml = Object.keys(queries).map(queryName => {
      let query = data.queries.find(q => q.key === queries[queryName].key);
      const components = query.components.map(name => (
        <span class="ComponentName">{name}</span>
      ));

      return (
        <li class="systemQueryLi">
          <div>{ components }</div>
          <QueryNumEntities>{query.numEntities}</QueryNumEntities>
        </li>
      );
    });

    // query.mandatory

    return (
      <Queries>
        <span class="queriesTitle">QUERIES</span>
        <ul>{queriesHtml}</ul>
      </Queries>
    );
  }
}
