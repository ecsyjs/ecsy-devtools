import React from 'react';
import './Panel.css';
import System from './System';

export default class Systems extends React.Component {
  render() {
    const { systems, data } = this.props;
    if (!Array.isArray(systems)) {
      return (
        <ul></ul>
      );
    }

    let systemsHtml = systems.map(system => (
      <System key={system.name} system={system} data={data}/>
    ));

    // @todo Move to a function or property
    let totalSystemsTime = systems.reduce((acum, s) => acum + s.executeTime, 0);

    return (
      <div>
        <h3>SYSTEM {systems.length} ({totalSystemsTime.toFixed(2)}ms)</h3>
        <ul>
          {systemsHtml}

        </ul>
      </div>
    );
  }
}
