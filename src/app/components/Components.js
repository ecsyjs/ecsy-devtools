import React from 'react';
import './Panel.css';
import Component from './Component';
import SmoothieComponent, { TimeSeries } from 'react-smoothie';
import {SectionHeader, Title, TitleGroup } from './StyledComponents';

export default class Components extends React.Component {

  constructor(props) {
    super(props);
    this.ts1 = new TimeSeries({
      resetBounds: true,
      resetBoundsInterval: 3000
    });

    this.state = {
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

  linkMinMaxChanged = (e) => {
    this.setState({
      linkMinMax: e.target.checked,
      chartRange: {
        min: 0,
        max: 0
      }
    });
  }

  componentWillReceiveProps() {
    let minMax = Object.values(this.references).map(e => e.current.refs.chart.smoothie).reduce((acum, current) => ({
      min: Math.min(acum.min, current.currentVisMinValue),
      max: Math.max(acum.max, current.currentVisMinValue + current.currentValueRange)
    }),
      {
        min: Number.MAX_VALUE,
        max: Number.MIN_VALUE
      }
    );

    this.setState({chartRange: minMax});
  }

  render() {
    const { components, data, showGraphs, overQueries } = this.props;

    if (!components) {
      return (
        <span>No components</span>
      );
    }

    const numComponents = data.components ? Object.keys(data.components).length : 0;
    const numComponentInstances = data.components && Object.values(data.components).length > 0 ? Object.values(data.components).reduce((a, c) => a + c) : undefined;

    let componentsHtml = Object.keys(components).map(name => (
      <Component
        graphConfig={this.props.graphConfig.components}
        ref={this.getOrCreateRef(name)}
        linkMinMax={this.state.linkMinMax}
        key={name}
        name={name}
        value={components[name]}
        showGraphs={showGraphs}
        chartRange={this.state.chartRange}
        overQueries={overQueries}
        data={data}
      />
    ));
    this.ts1.append(new Date().getTime(), numComponentInstances);

    return (
      <div>
        <SectionHeader>
          <TitleGroup>
            <Title>COMPONENTS ({numComponents})</Title> <Title>{numComponentInstances} instances</Title>
          </TitleGroup>
          <input
              type="checkbox"
              id="linkminmax"
              checked={this.state.linkMinMax}
              value={this.state.linkMinMax}
              onChange={this.linkMinMaxChanged}/>
              <label htmlFor="linkminmax">Link mix/max graphs</label>
          {
            showGraphs &&
            <SmoothieComponent
            responsive
            millisPerPixel={60}
            grid={{
              fillStyle: 'transparent',
              strokeStyle: 'transparent'
            }}
            labels={{
              fillStyle: '#FFD29C',
              precision: 0
            }}
            height={30}
            series={[
              {
                data: this.ts1,
                strokeStyle: '#EB932C',
                fillStyle: 'rgba(255, 210, 156, 0.05)',
                lineWidth: 1,
              }
            ]}/>
          }
        </SectionHeader>
        <ul>
          {componentsHtml}
        </ul>
      </div>
    );
  }
}
