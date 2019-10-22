import React from 'react';
import './Panel.css';
import {SectionContainer, SectionHeader, Title, TitleGroup } from './StyledComponents';
import SmoothieComponent, { TimeSeries } from 'react-smoothie';

export default class Entities extends React.Component {
  constructor(props) {
    super(props);
    this.ts1 = new TimeSeries({
      resetBounds: true,
      resetBoundsInterval: 3000
    });
  }

  render() {
    const { data, showGraphs } = this.props;
    const numEntities = data.numEntities;
    this.ts1.append(new Date().getTime(), numEntities);

    return (
      <SectionContainer>
        <SectionHeader>
          <TitleGroup>
            <Title>ENTITIES ({data.numEntities})</Title>
          </TitleGroup>
          {
            showGraphs && <SmoothieComponent
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
      </SectionContainer>
    );
  }
}
