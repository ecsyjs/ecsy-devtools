import React from 'react';
import Query from './Query';
import { ToggleButton, OptionsGroup, SectionHeader, Title, TitleGroup } from './StyledComponents';
import Checkbox from './Checkbox';
import isEqual from 'react-fast-compare';
import Events from '../utils/Events';

import {
  FaPlay,
  FaPause,
  FaFastForward,
  FaStepForward,
  FaChartArea,
  FaChartBar,
  FaLink,
  FaBoxes,
  FaChartLine,
  FaChartPie
 } from 'react-icons/fa';

export default class Queries extends React.Component {
  constructor(props) {
    super(props);

    Events.on('toggleAllGraphs', value => {
      this.setState({showGraphs: value});
    });

    this.state = {
      chartRange: {
        min: 0,
        max: 0
      },
      showGraphs: false,
      linkMinMax: false
    };

    this.references = {};
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(this.props, nextProps) ||
      this.state.showGraphs != nextState.showGraphs ||
      this.state.linkMinMax != nextState.linkMinMax;
  }

  getOrCreateRef(id) {
    if (!this.references.hasOwnProperty(id)) {
        this.references[id] = React.createRef();
    }
    return this.references[id];
  }

  componentWillReceiveProps() {
    if (this.state.linkMinMax) {
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
  }

  toggleLinkMinMax = (e) => {
    this.setState({linkMinMax: !this.state.linkMinMax});
  }

  toggleShowGraph = () => {
    Events.emit('toggleGraphs', {group: 'queries', value: !this.state.showGraphs});
    this.setState({showGraphs: !this.state.showGraphs});
  }

  render() {
    const { queries,/* showGraphs,*/ overQueries, overComponents } = this.props;

    const showGraphs = this.state.showGraphs;

    let queriesHtml = queries.map(query => {
      const highlighted = query.components.included.find(c => overComponents.indexOf(c) !== -1)
                        || overQueries.find(q => q.key === query.key)
      return <Query
          key={query.key}
          query={query}
          ref={this.getOrCreateRef(query.key)}
          chartRange={this.state.chartRange}
          linkMinMax={this.state.linkMinMax}
          showGraphs={showGraphs}
          highlighted={highlighted}
        />
      }
    );

    return (
      <div>
        <SectionHeader>
          <TitleGroup>
            <Title>QUERIES ({queries.length})</Title>
          </TitleGroup>
          <OptionsGroup>
            <ToggleButton
              onClick={this.toggleShowGraph}
              disabled={!this.state.showGraphs}
              title="Show charts">
              <FaChartArea/>
            </ToggleButton>
            {
              showGraphs &&
              <ToggleButton
                onClick={this.toggleLinkMinMax}
                disabled={!this.state.linkMinMax}
                title="Link min/max graphs">
                <FaLink/>
              </ToggleButton>
            }
          </OptionsGroup>
        </SectionHeader>
        <ul>{queriesHtml}</ul>
      </div>
    );
  }
}
