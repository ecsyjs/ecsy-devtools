import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import isEqual from 'react-fast-compare';

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

  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(this.props, nextProps) ||
            !isEqual(this.state, nextState);
  }

  render() {
    const { queries, overSystem, overComponents, overQueries } = this.props;

    let queriesHtml = Object.keys(queries).map(queryName => {
      let query = queries[queryName];
      let key = query.key;
      const components = query.components.included.map(name => (
        <span className="ComponentName">{name}</span>
      ));

      const classes = classNames({
        systemQueryLi: true,
        highlighted: !overSystem && (
          overQueries.filter(q => q.key === key).length > 0
          ||
          query.components.included.find(c => overComponents.indexOf(c) !== -1)
        )
      });

      return (
        <li className={classes} key={queryName}>
          <div>{ components }</div>
          <QueryNumEntities>{query.numEntities}</QueryNumEntities>
        </li>
      );
    });

    // query.mandatory

    return (
      <Queries>
        <span className="queriesTitle">QUERIES</span>
        <ul className="SystemsQueries">{queriesHtml}</ul>
      </Queries>
    );
  }
}
