import React from 'react';
import './Panel.css';
import classNames from 'classnames';
import SmoothieComponent, { TimeSeries } from 'react-smoothie';
import Events from '../Events';
import Bindings from '../ECSYBindings';
import styled from 'styled-components';

import { Half, Half2, Button } from './StyledComponents';

import {
  FaExclamationTriangle,
  FaArrowDown,
  FaCog,
  FaExclamationCircle,
  FaPlus
 } from 'react-icons/fa';

const WarningIcon = styled.span`
  color: #ff0;
  font-size: 1.2em;
`;

const PoolIncreased = styled.span`
  color: #f00;
`;

const Warn = styled.span`
 color: #ff0;
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
      highlighted: overQueries.find(e => e.components.included.indexOf(name) !== -1 || e.components.not.indexOf(name) !== -1)
    });

    const pool = data.componentsPools[name];
    const notPool = pool && pool.valid !== true;
    const poolSize = pool ? pool.size : 0;

    this.ts1.append(new Date().getTime(), value);
    this.ts2.append(new Date().getTime(), poolSize);

    const poolIncreased = poolSize !== this.prevPoolSize;
    this.prevPoolSize = poolSize;
    //const poolIncreased = true;

    const classesPoolIncreased = classNames({
      poolIncreased: true,
      hide: !poolIncreased
    });

    return (
      <li className={classes}
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}
      >
        <Half2>
          <span className="name">{name} {
            notPool &&
            (
              <Warn>
              <FaExclamationTriangle title="This component is not using automatic pooling"></FaExclamationTriangle>
              </Warn>
            )
          }
            <span className={classesPoolIncreased}><FaExclamationCircle></FaExclamationCircle> Component pool increased</span>
          </span>
          <span className="value">{value}</span>
        </Half2>
        <Half>
        {
          showGraphs && <SmoothieComponent
          responsive
          grid={ {strokeStyle: 'transparent'} }
          labels={ {precision: 0}}
          millisPerPixel={60}
          height={30}
          series={[
            {
              data: this.ts1,
              strokeStyle: { g: 255 },
              fillStyle: 'rgba(0, 255, 0, 0.2)',
              lineWidth: 2,
            },
            {
              data: this.ts2,
              strokeStyle: { r: 255 },
              fillStyle: 'rgba(255, 0, 0, 0.2)',
              lineWidth: 2,
            }
          ]
        }/>
        }
        </Half>
        <Button onClick={this.logComponent} title="Log components to the console">
          <FaArrowDown></FaArrowDown>
        </Button>
      </li>
    );
  }
}
