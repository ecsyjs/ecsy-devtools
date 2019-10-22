import React from 'react';
import classNames from 'classnames';
import Bindings from '../ECSYBindings';
import SystemQueries from './SystemQueries';
import SmoothieComponent, { TimeSeries } from 'react-smoothie';
import styled from 'styled-components';

import './Panel.css';

const Button = styled.a`
  cursor: pointer;
  color: #4AF4FF;
  padding: 2px;

  &:hover {
    color: #37A7AE;
  }

  &:disabled {
    color: #ff0;
  }
`;

export default class System extends React.Component {
  constructor(props) {
    super(props);

    this.ts1 = new TimeSeries({
      resetBounds: true,
      resetBoundsInterval: 3000
    });
  }

  toggle = () => {
    Bindings.toggleSystem(this.props.system);
  }

  step = () => {
    Bindings.stepSystem(this.props.system);
  }

  solo = () =>{
    Bindings.soloPlaySystem(this.props.system);
  }

  render() {
    const { system, data, showGraphs } = this.props
    const percTime = system.executeTime / this.props.totalSystemsTime * 100;

    const classes = classNames({
      system: true,
      disabled: !system.enabled,
      running: !data.world.enabled && data.lastExecutedSystem === system
    });

    this.ts1.append(new Date().getTime(), system.executeTime);

    return (
      <li>
        <div className={classes}>
          <div className="systemData">
            <div className="name-stats">
              <span className="name">{system.name}</span>
              <span className="stats">
                <span>{system.executeTime.toFixed(2)}ms</span>&nbsp;
                <span>{percTime.toFixed(2)}%</span>
              </span>
            </div>
            <div className="graph-controls">
            {
              showGraphs &&             <SmoothieComponent
              responsive
              tooltip={true}
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
              <div className="buttons">
                <Button
                  onClick={this.toggle}
                  title={system.enabled ? 'Pause system' : 'Play system'}>
                  { system.enabled ? '❙❙' : '▶' }
                </Button>
                <Button onClick={this.step} title="Step system execution">▸❙</Button>
                <Button onClick={this.solo} title="Execute only this system"><b>S</b></Button>
              </div>
            </div>
          </div>
          { this.props.showQueries && <SystemQueries queries={system.queries} data={data}/> }
        </div>
      </li>
    );
  }
}
