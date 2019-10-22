import React, { Component } from 'react';
import Components from './Components';
import Systems from './Systems';
import styled from 'styled-components';
import Bindings from '../ECSYBindings';
import Queries from './Queries';
import Entities from './Entities';
import Events from '../Events';

const Container = styled.div`
  background-color: #292929;
  padding: 10px;
  width: 100%;
`;

const Columns = styled.div`
  display: flex;
`;

const Code = styled.pre`
  background-color: #111;
  color: #EEE;
`;

const ToggleSection = styled.span`
  color: ${(props) => props.disabled ? "#6B6B6B" : "#4AF4FF"};
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    color: #81E3EA;
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
      highlight: false
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
      // @todo Check message type!
      let totalSystemsTime = m.data.systems.reduce((acum, s) => acum + s.executeTime, 0);
      stats.totalSystemsTime.push(totalSystemsTime);
      if (stats.totalSystemsTime.length > 10) {
        stats.totalSystemsTime.shift();
      }
      m.data.stats = stats;

      this.setState({data: m.data});
    });

  }

  toggleWorld = () => {
    Bindings.toggleWorld(this.state.data.world.enabled);
  }

  stepWorld = () => {
    Bindings.stepWorld();
  }

  playSystems = () => {
    Bindings.playSystems();
  }

  stopSystems = () => {
    Bindings.stopSystems();
  }

  stepNextSystem = () => {
    Bindings.stepNextSystem();
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
    // const data = this.props.data;
    const data = this.state.data;
    const state = this.state;

    if (!data) {
      return (
        <div></div>
      );
    }

    return (
      <Container>
        <div>
          <ToggleSection onClick={this.toggleEntities} disabled={!state.showEntities}>ENTITIES</ToggleSection>
          <ToggleSection onClick={this.toggleComponents} disabled={!state.showComponents}>COMPONENTS</ToggleSection>
          <ToggleSection onClick={this.toggleQueries} disabled={!state.showQueries}>QUERIES</ToggleSection>
          <ToggleSection onClick={this.toggleSystems} disabled={!state.showSystems}>SYSTEMS</ToggleSection>
        </div>
        <div>
          <button onClick={this.toggleWorld}>{data.world.enabled ? 'stop' : 'play'} world</button>
          <button onClick={this.stepWorld}>step world (all systems)</button>
          <button onClick={this.stepNextSystem}>step next system</button>
          <button onClick={this.playSystems}>play all systems</button>
          <button onClick={this.stopSystems}>stop all systems</button>
          <input type="checkbox" id="highlight" checked={this.state.highlight} value={this.state.highlight} onChange={this.onHighlightChanged}/><label for="highlight">Highlight components and queries connections</label>

          <input type="checkbox" id="show-debug" checked={this.state.debug} value={this.state.debug} onChange={this.onShowDebugChanged}/><label for="show-debug">Show debug</label>
          {
            this.state.debug && <Code>{JSON.stringify(data, null, 2)}</Code>
          }
          <input type="checkbox" id="show-graphs" checked={this.state.showGraphs} value={this.state.showGraphs} onChange={this.onShowGraphChanged}/><label for="show-graphs">Show graphs</label>
        </div>
        <Columns>
          <div className="column">
            {
              state.showEntities && <Entities data={data} showGraphs={this.state.showGraphs}/>
            }
            {
              state.showComponents && <Components components={data.components} data={data} overQueries={this.state.overQueries} showGraphs={this.state.showGraphs}/>
            }
            {
              state.showQueries && <Queries queries={data.queries} data={data} overQueries={this.state.overQueries} overComponents={this.state.overComponents} showGraphs={this.state.showGraphs}/>
            }
          </div>
          <div className="column">
            {
              state.showSystems && <Systems systems={data.systems} data={data}
              showGraphs={this.state.showGraphs}
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