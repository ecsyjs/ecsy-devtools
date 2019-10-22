import React from 'react';
import './Panel.css';
import classNames from 'classnames';
import SmoothieComponent, { TimeSeries } from 'react-smoothie';
import Events from '../Events';

export default class Component extends React.Component {
  constructor(props) {
    super(props);

    this.ts1 = new TimeSeries({
      resetBounds: true,
      resetBoundsInterval: 3000
    });
  }

  onEnter = () => {
    Events.emit('componentOver', [this.props.name]);
  }

  onLeave = () => {
    Events.emit('componentOver', []);
  }

  render() {
    const { value, name, showGraphs, overQueries } = this.props;
    this.ts1.append(new Date().getTime(), value);

    const classes = classNames({
      component: true,
      highlighted: overQueries.find(e => e.components.indexOf(name) !== -1)
    });

    return (
      <li className={classes}
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}
      >
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
