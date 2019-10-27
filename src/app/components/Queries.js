import React from 'react';
import Query from './Query';
import {SectionHeader, Title, TitleGroup } from './StyledComponents';

export default class Queries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkMinMax: false
    };
  }

  linkMinMaxChanged = (e) => {
    this.setState({linkMinMax: e.target.checked});
  }

  render() {
    const { queries, showGraphs, overQueries, overComponents } = this.props;

    let queriesHtml = queries.map(query => (
      <Query
        key={query.key}
        query={query}
        graphConfig={this.props.graphConfig.queries}
        linkMinMax={this.state.linkMinMax}
        showGraphs={showGraphs}
        overComponents={overComponents}
        overQueries={overQueries}
      />
    ));

    return (
      <div>
        <SectionHeader>
          <TitleGroup>
            <Title>QUERIES ({queries.length})</Title>
          </TitleGroup>
          <input
          type="checkbox"
          id="linkminmaxqueries"
          checked={this.state.linkMinMax}
          value={this.state.linkMinMax}
          onChange={this.linkMinMaxChanged}/>
          <label htmlFor="linkminmaxqueries">Link mix/max graphs</label>
        </SectionHeader>
        <ul>{queriesHtml}</ul>
      </div>
    );
  }
}
