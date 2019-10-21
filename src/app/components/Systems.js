import React from 'react';
import './Panel.css';
import System from './System';

export default class Systems extends React.Component {
  constructor() {
    super();

    this.state = {
      showQueries: false
    }
  }

  onShowQueriesChanged = e => {
    this.setState({showQueries: e.target.checked});
  }

  render() {
    const { systems, data } = this.props;
    const state = this.state;

    if (!Array.isArray(systems)) {
      return (
        <ul></ul>
      );
    }

    let systemsHtml = systems.map(system => (
      <System key={system.name} system={system} data={data} showQueries={state.showQueries}/>
    ));

    // @todo Move to a function or property
    let totalSystemsTime = systems.reduce((acum, s) => acum + s.executeTime, 0);

    return (
      <div>
        <h3>Systems {systems.length} ({totalSystemsTime.toFixed(2)}ms)</h3>
        <input type="checkbox" id="show-queries" checked={state.showQueries} value={state.showQueries} onChange={this.onShowQueriesChanged}/><label for="show-queries">show queries
        </label>
        <ul>
          {systemsHtml}
        </ul>
      </div>
    );
  }
}
