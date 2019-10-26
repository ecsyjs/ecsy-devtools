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
  }
  linkMinMaxChanged = (e) => {
    this.setState({linkMinMax: e.target.checked});
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
      <Component key={name} name={name} value={components[name]} showGraphs={showGraphs} overQueries={overQueries} data={data}/>
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
              <label htmlFor="linkminmax">linkminmax components and queries connections</label>
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
