import React from 'react';
import './Panel.css';
import classNames from 'classnames';
import SmoothieComponent, { TimeSeries } from 'react-smoothie';
import Events from '../Events';
import Bindings from '../ECSYBindings';
import styled from 'styled-components';

import { Half, Half2, Button } from './StyledComponents';

import {
  FaInfoCircle,
  FaArrowDown,
  FaCog,
  FaPlus
 } from 'react-icons/fa';

const WarningIcon = styled.span`
  color: #F1421C;
  font-size: 1.2em;
  margin-left: 0.5em;
`;

const PoolIncreased = styled.span`
  color: #F1421C;
`;

const Warn = styled.span`
  color: #F1421C;
  margin-left: 0.5em;
  vertical-align: middle;
`;

export default class Component extends React.Component {
  constructor(props) {
    super(props);

    this.timeSeries = [
      new TimeSeries({
        resetBounds: true,
        resetBoundsInterval: 300
      }),
      new TimeSeries({})
    ];

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

  componentWillReceiveProps() {
    let config = this.props.chartRange;
    if (this.props.linkMinMax) {
      this.refs.chart.smoothie.options.minValue = config.min;
      this.refs.chart.smoothie.options.maxValue = config.max;
    } else {
      delete this.refs.chart.smoothie.options.minValue
      delete this.refs.chart.smoothie.options.maxValue
    }

    this.refs.chart.smoothie.seriesSet[1].options.strokeStyle = this.props.showPoolGraph ? '#F1421C' : 'none';

    this.forceUpdate();
  }

  render() {
    const { showPoolGraph, data, value, name, showGraphs, overQueries } = this.props;

    const classes = classNames({
      component: true,
      highlighted: overQueries.find(e => e.components.included.indexOf(name) !== -1 || e.components.not.indexOf(name) !== -1)
    });

    const pool = data.componentsPools[name];
    const notPool = pool && pool.valid !== true;
    const poolSize = pool ? pool.size : 0;

    this.timeSeries[0].append(new Date().getTime(), value);
    this.timeSeries[1].append(new Date().getTime(), poolSize);

    const poolIncreased = poolSize !== this.prevPoolSize;
    this.prevPoolSize = poolSize;
    //const poolIncreased = true;

    const classesPoolIncreased = classNames({
      poolIncreased: true,
      hide: !poolIncreased
    });

    let config = this.props.graphConfig;
    let opts = this.props.linkMinMax ? {minValue: config.globalMin, maxValue: config.globalMax} : {};

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
                <FaInfoCircle title="This component is not using automatic pooling"></FaInfoCircle>
              </Warn>
            )
          }
            <span className={classesPoolIncreased}> Pool increased!</span>
          </span>
          <span className="value">{value}</span>
        </Half2>
        <Half>
        {
          showGraphs && <SmoothieComponent
          ref="chart"
          responsive
          {...opts}
          grid={{
            fillStyle: 'transparent',
            strokeStyle: 'transparent'
          }}
          labels={{
            fillStyle: '#FFD29C',
            precision: 0
          }}
          millisPerPixel={60}
          height={30}
          series={[
            {
              data: this.timeSeries[0],
              strokeStyle: '#EB932C',
              fillStyle: 'rgba(235, 147, 44, 0.08)',
              lineWidth: 1
            },
            {
              data: this.timeSeries[1],
              strokeStyle: '#F1421C',
              lineWidth: 1
            }
          ]}
          />
        }
        </Half>
        <Button className="logbutton" onClick={this.logComponent} title="Log components to the console">
          <FaArrowDown></FaArrowDown>
        </Button>
      </li>
    );
  }
}
