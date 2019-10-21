import React from 'react';
import './Panel.css';

export default class Component extends React.Component {
  render() {
    const { value, name } = this.props;

    return (
      <li className="component">
        <div>
          <span className="name">{name}</span>
          <span className="value">{value}</span>
        </div>
        <div>
          Graph
        </div>
      </li>
    );
  }
}
