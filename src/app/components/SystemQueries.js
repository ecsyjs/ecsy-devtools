import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import isEqual from 'react-fast-compare';
import { ToggleButton } from './StyledComponents';

import {
  FaBolt,
  FaExclamation,
  FaExclamationCircle
 } from 'react-icons/fa';

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

const ReactiveLists = styled.ul`
  margin-left: 40px;
  margin-top: 10px;
  margin-bottom: 5px;
  color: #2CEBBD;
`;

const ReactiveList = styled.li`
 display:flex;
 justify-content: space-between;
`;

export default class SystemQueries extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showReactive: false
    }
  }

  toggleShowReactive = e => {
    this.setState({showReactive: !this.state.showReactive});
  }

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
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <div>{ components }
            {
              query.mandatory &&
                <FaExclamation style={{fontSize: "1.2em", color: "#AA6"}} title="Mandatory query: It should have at least one element to execute"/>
            }
            {
              query.reactive &&
              <ToggleButton
                onClick={this.toggleShowReactive}
                disabled={!this.state.showReactive}
                title="Show reactive lists">
                <FaBolt style={{color: '#99f'}}/>
              </ToggleButton>
            }
            </div>
            <QueryNumEntities>{query.numEntities}</QueryNumEntities>
          </div>
            {
              query.listen && this.state.showReactive &&
                <ReactiveLists>
                  { query.listen.added && <ReactiveList><span>added:</span> <span>{query.listen.added.entities}</span></ReactiveList> }
                  { query.listen.removed && <ReactiveList><span>removed:</span> <span>{query.listen.removed.entities}</span></ReactiveList> }
                  { query.listen.changed && <ReactiveList><span>changed:</span> <span>{query.listen.changed.entities}</span></ReactiveList> }
                </ReactiveLists>
            }
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
