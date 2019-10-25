import React from 'react';
import classNames from 'classnames';
import Bindings from '../ECSYBindings';
import SystemQueries from './SystemQueries';
import SmoothieComponent, { TimeSeries } from 'react-smoothie';
import Events from '../Events';
import { Button } from './StyledComponents';

import {
  FaStripeS,
  FaPlay,
  FaPause,
  FaFastForward,
  FaStepForward
 } from 'react-icons/fa';

import './Panel.css';

import SVG from 'react-inlinesvg';

export default class System extends React.Component {
  constructor(props) {
    super(props);

    this.ts1 = new TimeSeries({
      resetBounds: true,
      resetBoundsInterval: 3000
    });

    this.state = {
      solo: false
    };
  }

  toggle = () => {
    Bindings.toggleSystem(this.props.system);
  }

  step = () => {
    Bindings.stepSystem(this.props.system);
  }

  toggleSolo = () => {
    if (this.state.solo) {
      Events.emit('revertSoloPlaySystem', this.props.system);
    } else {
      Events.emit('soloPlaySystem', this.props.system);
      Bindings.soloPlaySystem(this.props.system);
    }

    this.setState({
      solo: !this.state.solo
    });
  }

  onEnter = () => {
    Events.emit('systemOver', [this.props.system]);
  }

  onLeave = () => {
    Events.emit('systemOver', []);
  }


  render() {
    const { system, data, showGraphs, overQueries, overComponents, overSystem } = this.props
    const percTime = this.props.totalSystemsTime > 0 ? system.executeTime / this.props.totalSystemsTime * 100 : 0;

    const classes = classNames({
      system: true,
      disabled: !system.enabled,
      running: data.lastExecutedSystem === system.name
    });

    this.ts1.append(new Date().getTime(), system.executeTime);

    return (
      <li
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}
      >
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
                  {
                    system.enabled ? <FaPause></FaPause> : <FaPlay></FaPlay>
                  }
                </Button>

                <Button onClick={this.step} title="Step system execution">
                  <FaStepForward></FaStepForward>
                </Button>
                <Button onClick={this.toggleSolo} title="Execute only this system">
                  <FaStripeS/>
                </Button>
              </div>
            </div>
          </div>
          { this.props.showQueries && <SystemQueries queries={system.queries} overSystem={overSystem} overQueries={overQueries} overComponents={overComponents} data={data}/> }
        </div>
      </li>
    );
  }
}
