import React from 'react';
import './Panel.css';
import {SectionContainer, SectionHeader, Title, TitleGroup } from './StyledComponents';
import SmoothieComponent, { TimeSeries } from './SmoothieChart';

export default class Entities extends React.Component {
  constructor(props) {
    super(props);
    this.timeSeries = new TimeSeries({
      resetBounds: true,
      resetBoundsInterval: 3000
    });
  }

  updateGraph() {
    this.timeSeries.append(new Date().getTime(), this.props.numEntities);
  }

  shouldComponentUpdate(nextProps) {
    this.updateGraph();
    return nextProps.numEntities !== this.props.numEntities;
  }

  render() {
    console.log('entities');
    const { data, showGraphs } = this.props;
    const numEntities = data.numEntities;

    return (
      <SectionContainer>
        <SectionHeader>
          <TitleGroup>
            <Title>ENTITIES ({numEntities})</Title>
          </TitleGroup>
          {
            showGraphs && <SmoothieComponent
            responsive
            grid={{
              strokeStyle: 'transparent',
              fillStyle: 'transparent'
            }}
            labels={{
              fillStyle: '#88ff88',
              precision: 0
            }}
            millisPerPixel={60}
            height={30}
            series={[
              {
                data: this.timeSeries,
                strokeStyle: { g: 255 },
                fillStyle: 'rgba(136, 255, 136, 0.06)',
                lineWidth: 1,
              }
            ]}/>
          }
        </SectionHeader>
      </SectionContainer>
    );
  }
}
