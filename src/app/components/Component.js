import React from 'react';
import './Panel.css';
import SmoothieComponent, { TimeSeries } from 'react-smoothie';

export default class Component extends React.Component {
  constructor(props) {
    super(props);

    this.ts1 = new TimeSeries({
      resetBounds: true,
      resetBoundsInterval: 3000
    });
  }
  render() {
    const { value, name, showGraphs } = this.props;
    this.ts1.append(new Date().getTime(), value);

    return (
      <li className="component">
        <div>
          <span className="name">{name}</span>
          <span className="value">{value}</span>
        </div>
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
      </li>
    );
  }
}
