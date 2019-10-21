import React from 'react';
import classNames from 'classnames';

export default class Query extends React.Component {

  render() {
    const query = this.props.query;

    return (
      <li>{this.props.name}</li>
    );
  }
}
