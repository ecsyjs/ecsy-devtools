import React from 'react';
import './Panel.css';
import Component from './Component';

export default class Components extends React.Component {
  static defaultProps = {
    data: {}
  };

  render() {
    const { components } = this.props;

    if (!Array.isArray(components)) {
      return (
        <ul></ul>
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
