import React from 'react';
import Query from './Query';
import {SectionHeader, Title, TitleGroup } from './StyledComponents';

export default class Queries extends React.Component {

  render() {
    const { queries, showGraphs } = this.props;

    let queriesHtml = queries.map(query => (
      <Query key={query.key} query={query} showGraphs={showGraphs}/>
    ));

    return (
      <div>
        <SectionHeader>
          <TitleGroup>
            <Title>QUERIES ({queries.length})</Title>
          </TitleGroup>
        </SectionHeader>
        <ul>{queriesHtml}</ul>
      </div>
    );
  }
}
