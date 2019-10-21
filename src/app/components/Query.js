import React from 'react';
import classNames from 'classnames';

export default class Query extends React.Component {

  render() {
    const query = this.props.query;

    return (
      <li class="query">
        <div>
          <span className="name"><b>{query.key}</b> ({query.components.join(', ')})</span>
          <span className="value">{query.numEntities}</span>
        </div>
        <div>
          Graph
        </div>
      </li>
    );
  }
}
