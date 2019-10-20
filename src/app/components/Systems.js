import React from 'react';
import './Panel.css';
import System from './System';

export default class Systems extends React.Component {
  static defaultProps = {
    data: {}
  };

  render() {
    const { systems } = this.props;
    if (!Array.isArray(systems)) {
      return (
        <ul></ul>
      );
    }

    let systemsHtml = systems.map(system => (
      <System key={system.name} system={system}/>
    ));

    return (
      <ul>
        {systemsHtml}
      </ul>
    );
  }
}
