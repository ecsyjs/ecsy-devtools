import React from 'react';
import classNames from 'classnames';

import './Panel.css';

export default class System extends React.Component {
  render() {
    const system = this.props.system;
    const classes = classNames({
      system: true,
      disabled: !system.enabled
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
              <button onClick={()=> {}}>{system.enabled ? 'stop' : 'play'}</button>
              <button onClick={()=> {}}>step</button>
              <button onClick={()=> {}}>solo</button>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
