import React from 'react';
import classNames from 'classnames';
import SmoothieComponent, { TimeSeries } from 'react-smoothie';
import styled from 'styled-components';
import Events from '../Events';
import Bindings from '../ECSYBindings';
import { Half, Half2, Button } from './StyledComponents';

import {
  FaArrowDown,
  FaSearch,
  FaEye,
  FaRegEye
 } from 'react-icons/fa';

export default class Query extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hover: false
    }
    this.timeSeries = new TimeSeries({});
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
    this.forceUpdate();
  }

  onEnter = () => {
    Events.emit('componentQuery', [this.props.query]);
    this.setState({hover: true});
  }

  onLeave = () => {
    Events.emit('componentQuery', []);
    this.setState({hover: false});
  }

  logQuery = () => {
    Bindings.logQuery(this.props.query);
  }

  render() {
    const { query, showGraphs, overComponents, overQueries } = this.props;

    const components = query.components.included.map(name => (
      <span class="ComponentName">{name}</span>
    )).concat(query.components.not.map(name => (
      <span class="ComponentName">NOT {name}</span>
    )));

    this.timeSeries.append(new Date().getTime(), query.numEntities);

    const classes = classNames({
      query: true,
      highlighted: query.components.included.find(c => overComponents.indexOf(c) !== -1)
          || !this.state.hover && overQueries.find(q => q.key === query.key)
    });

    return (
      <li className={classes}
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}
      >
        <Half2 title={'Query key: ' + query.key}>
          <span>{components}</span>
          <span className="value">{query.numEntities}</span>
        </Half2>
        <Half>
        {
          showGraphs && <SmoothieComponent
          ref="chart"
          responsive
          grid={ {
            fillStyle: 'transparent',
            strokeStyle: 'transparent'
          }}
          millisPerPixel={60}
          labels={ {
            fillStyle: '#BCFFEF',
            precision: 0
          }}
          height={30}
          series={[
            {
              data: this.timeSeries,
              strokeStyle: '#2CEBBD',
              fillStyle: 'rgba(188, 255, 239, 0.05)',
              lineWidth: 1,
            }
          ]}/>
        }
        </Half>
        <Button className="logbutton" onClick={this.logQuery} title="Log queries to the console">
          <FaArrowDown></FaArrowDown>
        </Button>

      </li>
    );
  }
}
