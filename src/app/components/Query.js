import React from 'react';
import classNames from 'classnames';
import SmoothieComponent, { TimeSeries } from 'react-smoothie';
import styled from 'styled-components';
import Events from '../Events';
import Bindings from '../ECSYBindings';

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

    this.state = {
      hover: false
    }
    this.ts1 = new TimeSeries({});
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

    const components = query.components.map(name => (
      <span class="ComponentName">{name}</span>
    ));

    this.ts1.append(new Date().getTime(), query.numEntities);

    const classes = classNames({
      query: true,
      highlighted: query.components.find(c => overComponents.indexOf(c) !== -1)
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
        <button onClick={this.logQuery} title="Log entities to the console">⇩</button>
      </li>
    );
  }
}
