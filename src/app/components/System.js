import React from 'react';
import classNames from 'classnames';
import Bindings from '../ECSYBindings';

import './Panel.css';

export default class System extends React.Component {

  toggle() {
    Bindings.toggleSystem(this.props.system);
  }

  step() {
    Bindings.stepSystem(this.props.system);
  }

  solo() {
    Bindings.soloSystem(this.props.system);
  }

  render() {
    const system = this.props.system;
    const data = this.props.data;

    const classes = classNames({
      system: true,
      disabled: !system.enabled,
      running: !data.world.enabled && data.lastExecutedSystem === system.name
    });

    let toggle = this.toggle.bind(this);
    let step = this.step.bind(this);
    let solo = this.solo.bind(this);

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
              <button onClick={toggle}>{system.enabled ? 'stop' : 'play'}</button>
              <button onClick={step}>step</button>
              <button onClick={solo}>solo</button>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
