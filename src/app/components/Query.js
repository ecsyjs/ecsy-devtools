import React from 'react';
import classNames from 'classnames';
import SmoothieComponent, { TimeSeries } from 'react-smoothie';
import styled from 'styled-components';

const Half = styled.div`
  width: 50%;
`;

const Half2 = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  align-items: center;
`;

export default class Query extends React.Component {

  constructor(props) {
    super(props);

    this.ts1 = new TimeSeries({});
  }
  render() {
    const { query, showGraphs } = this.props;

    const components = query.components.map(name => (
      <span class="ComponentName">{name}</span>
    ));

    this.ts1.append(new Date().getTime(), query.numEntities);

    return (
      <li class="query">
        <Half2 title={'Query key: ' + query.key}>
          <span>{components}</span>
          <span className="value">{query.numEntities}</span>
        </Half2>
        <Half>
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
      </Half>
      </li>
    );
  }
}
