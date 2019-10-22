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
  }

  render() {
    const { components, data, showGraphs } = this.props;

    if (!components) {
      return (
        <span>No components</span>
      );
    }

    const numComponents = data.components ? Object.keys(data.components).length : 0;
    const numComponentInstances = data.components && Object.values(data.components).length > 0 ? Object.values(data.components).reduce((a, c) => a + c) : undefined;

    let componentsHtml = Object.keys(components).map(name => (
      <Component key={name} name={name} value={components[name]} showGraphs={showGraphs}/>
    ));
    this.ts1.append(new Date().getTime(), numComponentInstances);

    return (
      <div>
        <SectionHeader>
          <TitleGroup>
            <Title>COMPONENTS ({numComponents})</Title> <Title>{numComponentInstances} instances</Title>
          </TitleGroup>
          {
            showGraphs &&
            <SmoothieComponent
            responsive
            millisPerPixel={60}
            height={30}
            series={[
              {
                data: this.ts1,
                strokeStyle: { g: 255 },
                fillStyle: { g: 255 },
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
