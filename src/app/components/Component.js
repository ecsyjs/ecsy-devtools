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

  logComponent = () => {
    Bindings.logComponent(this.props.name);
  }

  render() {
    const { data, value, name, showGraphs, overQueries } = this.props;
    this.ts1.append(new Date().getTime(), value);

    const classes = classNames({
      component: true,
      highlighted: overQueries.find(e => e.components.indexOf(name) !== -1)
    });

    const notPool = data.componentsPools[name].valid !== true;

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
              fillStyle: { g: 255 },
              lineWidth: 1,
            }
          ]}/>
        }
        <button onClick={this.logComponent} title="Log components to the console">⇩</button>
      </li>
    );
  }
}
