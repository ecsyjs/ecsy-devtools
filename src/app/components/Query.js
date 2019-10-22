import React from 'react';
import classNames from 'classnames';
import SmoothieComponent, { TimeSeries } from 'react-smoothie';

export default class Query extends React.Component {

  constructor(props) {
    super(props);

    this.ts1 = new TimeSeries({});
  }
  render() {
    const { query, showGraphs } = this.props;

    const components = query.components.map(name => (
      <span class="ComponentName">{name}</span>
    ));

    this.ts1.append(new Date().getTime(), query.numEntities);

    return (
      <li class="query">
        <div hint={query.key}>
          <span>{components}</span>
          <span className="value">{query.numEntities}</span>
        </div>
        <div>
        {
          showGraphs && <SmoothieComponent
          responsive
          millisPerPixel={60}
          height={30}
          series={[
            {
              data: this.ts1,
              strokeStyle: { g: 255 },
              fillStyle: { g: 255 },
              lineWidth: 1,
            }
          ]}/>
        }
      </div>
      </li>
    );
  }
}
