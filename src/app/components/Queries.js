import React from 'react';
import Query from './Query';
import {SectionHeader, Title, TitleGroup } from './StyledComponents';

export default class Queries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartRange: {
        min: 0,
        max: 0
      },
      linkMinMax: false
    };

    this.references = {};
  }

  getOrCreateRef(id) {
    if (!this.references.hasOwnProperty(id)) {
        this.references[id] = React.createRef();
    }
    return this.references[id];
  }

  componentWillReceiveProps() {
    let minMax = Object.values(this.references).map(e => e.current.timeSeries).reduce((acum, current) => ({
      min: Math.min(acum.min, current.minValue),
      max: Math.max(acum.max, current.maxValue)
    }),
      {
        min: Number.MAX_VALUE,
        max: Number.MIN_VALUE
      }
    );

    this.setState({chartRange: minMax});
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
        ref={this.getOrCreateRef(query.key)}
        chartRange={this.state.chartRange}
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
