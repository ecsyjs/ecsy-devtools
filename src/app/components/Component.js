import React from 'react';
import './Panel.css';
import classNames from 'classnames';
import SmoothieComponent, { TimeSeries } from 'react-smoothie';
import Events from '../Events';
import Bindings from '../ECSYBindings';
import styled from 'styled-components';

const WarningIcon = styled.span`
  color: #ff0;
  font-size: 1.2em;
`;

const PoolIncreased = styled.span`
  color: #f00;
`;


export default class Component extends React.Component {
  constructor(props) {
    super(props);

    this.ts1 = new TimeSeries({
      resetBounds: true,
      resetBoundsInterval: 3000
    });

    this.ts2 = new TimeSeries({});

    this.prevPoolSize = 0;
  }

  onEnter = () => {
    Events.emit('componentOver', [this.props.name]);
  }

  onLeave = () => {
    Events.emit('componentOver', []);
  }

  logComponent = () => {
    Bindings.logComponent(this.props.name);
  }

  render() {
    const { data, value, name, showGraphs, overQueries } = this.props;

    const classes = classNames({
      component: true,
      highlighted: overQueries.find(e => e.components.indexOf(name) !== -1)
    });

    const pool = data.componentsPools[name];
    const notPool = pool.valid !== true;

    this.ts1.append(new Date().getTime(), value);
    this.ts2.append(new Date().getTime(), pool.size);

    const poolIncreased = pool.size !== this.prevPoolSize;

    this.prevPoolSize = pool.size;

    return (
      <li className={classes}
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}
      >
        <div>
          <span className="name">{name} {
            notPool &&
            <WarningIcon title="This component is not using automatic pooling">⚠</WarningIcon>
          }
          {
            poolIncreased && <PoolIncreased>Pool size increased!</PoolIncreased>
          }
          </span>
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
              fillStyle: 'rgba(0, 255, 0, 0.2)',
              lineWidth: 1,
            },
            {
              data: this.ts2,
              strokeStyle: { r: 255 },
              fillStyle: 'rgba(255, 0, 0, 0.2)',
              lineWidth: 1,
            }
          ]
        }/>
        }
        <button onClick={this.logComponent} title="Log components to the console">⇩</button>
      </li>
    );
  }
}
