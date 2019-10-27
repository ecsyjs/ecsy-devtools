import React, { Component } from 'react';
import Components from './Components';
import Systems from './Systems';
import styled from 'styled-components';
import Bindings from '../ECSYBindings';
import Queries from './Queries';
import Entities from './Entities';
import Events from '../Events';
import JSONTree from 'react-json-tree';

const Container = styled.div`
  background-color: #292929;
  padding: 10px;
  width: 100%;
`;

const Columns = styled.div`
  display: flex;
`;

const Code = styled.pre`
  background-color: #1e1e1e;
  color: #CCC;
  padding: 0.5em;
`;

const ToggleSection = styled.span`
  color: ${(props) => props.disabled ? "#6B6B6B" : "#4AF4FF"};
  cursor: pointer;
  margin-right: 10px;
  font-size: 15px;

  &:hover {
    opacity: 0.7;
  }

  &:last-of-type {
    margin-right: 2em;
  }
`;

var stats = {
  totalSystemsTime: []
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      debug: false,
      showComponents: true,
      showEntities: true,
      showQueries: true,
      showSystems: true,
      showGraphs: true,
      overComponents: [],
      overQueries: [],
      overSystem: false,
      highlight: true,
      graphConfig: {
        components: {
          globalMin: Number.MAX_VALUE,
          globalMax: Number.MIN_VALUE
        },
        systems: {
          globalMin: Number.MAX_VALUE,
          globalMax: Number.MIN_VALUE
        },
        queries: {
          globalMin: Number.MAX_VALUE,
          globalMax: Number.MIN_VALUE
        },
      }
    };

    Events.on('componentOver', detail => {
      if (!this.state.highlight) return;

      this.setState({overComponents: detail});
    });

    Events.on('componentQuery', detail => {
      if (!this.state.highlight) return;

      this.setState({overQueries: detail});
    });

    Events.on('systemOver', detail => {
      if (!this.state.highlight) return;

      if (detail.length > 0) {
        var system = detail[0];
        let overQueries = Object.keys(system.queries).map(querySystemName =>
          this.state.data.queries.find(q => q.key === system.queries[querySystemName].key)
        );
        this.setState({
          overQueries: overQueries,
          overSystem: true
        });
      } else {
        this.setState({
          overQueries: [],
          overSystem: false
        });
      }
    });

    var backgroundPageConnection = chrome.runtime.connect({
      name: "devtools"
    });

    backgroundPageConnection.postMessage({
      name: 'init',
      tabId: chrome.devtools.inspectedWindow.tabId
    });

    backgroundPageConnection.onMessage.addListener(m => {
      let data = m.data;
      let graphConfig = Object.assign({}, this.state.graphConfig);  // creating copy of state variable jasper

      // Components
      var minMax = Object.values(data.components).reduce((a, c) =>
        ({
          min: Math.min(a.min, c),
          max: Math.max(a.max, c)
        }),
        {
          min: Number.MAX_VALUE,
          max: Number.MIN_VALUE
        }
      );

      graphConfig.components.globalMin = Math.min(graphConfig.components.globalMin, minMax.min);
      graphConfig.components.globalMax = Math.max(graphConfig.components.globalMax, minMax.max);

      // Systems
      let minMaxSystems = data.systems.reduce((acum, actual) => ({
        min: Math.min(acum.min, actual.executeTime),
        max: Math.max(acum.max, actual.executeTime)
      }),
      {
        min: Number.MAX_VALUE,
        max: Number.MIN_VALUE
      });

      graphConfig.systems.globalMin = Math.min(graphConfig.systems.globalMin, minMaxSystems.min);
      graphConfig.systems.globalMax = Math.max(graphConfig.systems.globalMax, minMaxSystems.max);

      // Queries
      let minMaxQueries = data.queries.reduce((acum, actual) => ({
        min: Math.min(acum.min, actual.numEntities),
        max: Math.max(acum.max, actual.numEntities)
      }),
      {
        min: Number.MAX_VALUE,
        max: Number.MIN_VALUE
      });

      graphConfig.queries.globalMin = Math.min(graphConfig.queries.globalMin, minMaxQueries.min);
      graphConfig.queries.globalMax = Math.max(graphConfig.queries.globalMax, minMaxQueries.max);

      this.setState({
        data: m.data,
        graphConfig: graphConfig
      });
    });

  }

  dumpData = e => {
    Bindings.logData(this.state.data);
  }

  onShowDebugChanged = e => {
    this.setState({debug: e.target.checked});
  }

  onHighlightChanged = e => {
    this.setState({highlight: e.target.checked});
  }

  onShowGraphChanged = e => {
    this.setState({showGraphs: e.target.checked});
  }

  toggleComponents = () => {
    this.setState({showComponents: !this.state.showComponents});
  }

  toggleEntities = () => {
    this.setState({showEntities: !this.state.showEntities});
  }

  toggleQueries = () => {
    this.setState({showQueries: !this.state.showQueries});
  }

  toggleSystems = () => {
    this.setState({showSystems: !this.state.showSystems});
  }

  render() {
    const data = this.state.data;
    const state = this.state;

    if (!data) {
      return (
        <div></div>
      );
    }

    return (
      <Container>
        <div id="header">
          <ToggleSection title="Show Entities Panel" onClick={this.toggleEntities} disabled={!state.showEntities}>E</ToggleSection>
          <ToggleSection title="Show Components Panel" onClick={this.toggleComponents} disabled={!state.showComponents}>C</ToggleSection>
          <ToggleSection title="Show Systems Panel" onClick={this.toggleSystems} disabled={!state.showSystems}>S</ToggleSection>
          <ToggleSection title="Show Queries Panel" onClick={this.toggleQueries} disabled={!state.showQueries}>Q</ToggleSection>

          <input type="checkbox" id="highlight" checked={this.state.highlight} value={this.state.highlight} onChange={this.onHighlightChanged}/><label htmlFor="highlight">Highlight relationships</label>
          <input type="checkbox" id="show-debug" checked={this.state.debug} value={this.state.debug} onChange={this.onShowDebugChanged}/><label htmlFor="show-debug">Show debug</label>
          {
            false && this.state.debug && <JSONTree data={data} theme={theme} invertTheme={false} />
          }
          {
            this.state.debug && <Code><button onClick={this.dumpData}>dump to console (and assign it to $data)</button><br/>{JSON.stringify(data, null, 2)}</Code>
          }
          <input type="checkbox" id="show-graphs" checked={this.state.showGraphs} value={this.state.showGraphs} onChange={this.onShowGraphChanged}/><label htmlFor="show-graphs">Show graphs</label>
        </div>
        <Columns>
          <div className="column">
            {
              state.showEntities &&
              <Entities
                data={data}
                showGraphs={this.state.showGraphs}
              />
            }
            {
              state.showComponents &&
              <Components
                graphConfig={this.state.graphConfig}
                components={data.components}
                data={data}
                overQueries={this.state.overQueries}
                showGraphs={this.state.showGraphs}
              />
            }
            {
              state.showQueries &&
              <Queries
                graphConfig={this.state.graphConfig}
                queries={data.queries}
                data={data}
                overQueries={this.state.overQueries}
                overComponents={this.state.overComponents}
                showGraphs={this.state.showGraphs}
              />
            }
          </div>
          <div className="column">
            {
              state.showSystems && <Systems systems={data.systems} data={data}
              showGraphs={this.state.showGraphs}
              graphConfig={this.state.graphConfig}
              overQueries={this.state.overQueries}
              overSystem={this.state.overSystem}
              overComponents={this.state.overComponents} />
            }
          </div>
        </Columns>
      </Container>
    );
  }
}

export default App;
