import React from 'react';
import './Panel.css';
import Component from './Component';

export default class Components extends React.Component {
  static defaultProps = {
    data: {}
  };

  render() {
    const { components } = this.props;

    if (!components) {
      return (
        <span>No components</span>
      );
    }

    let componentsHtml = Object.keys(components).map(name => (
      <Component key={name} name={name} value={components[name]}/>
    ));

    return (
      <ul>
        {componentsHtml}
      </ul>
    );
  }
}
