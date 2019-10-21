import React from 'react';
import classNames from 'classnames';
import Bindings from '../ECSYBindings';
import Queries from './Queries';

import './Panel.css';

export default class System extends React.Component {

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
    const system = this.props.system;
    const data = this.props.data;

    const classes = classNames({
      system: true,
      disabled: !system.enabled,
      running: !data.world.enabled && data.lastExecutedSystem === system
    });

    return (
      <li className={classes}>
        <div className="systemData">
          <div className="name-stats">
            <span className="name">{system.name}</span>
            <span className="stats">
              <span>{system.executeTime.toFixed(2)}ms</span>
            </span>
          </div>
          <div className="graph-controls">
            <span>graph to-do</span>
            <div>
              <button onClick={this.toggle}>{system.enabled ? 'stop' : 'play'}</button>
              <button onClick={this.step}>step</button>
              <button onClick={this.solo}>solo</button>
            </div>
          </div>
        </div>
      </li>
    );

//    { this.props.showQueries && <Queries queries={system.queries}/> }

  }
}
