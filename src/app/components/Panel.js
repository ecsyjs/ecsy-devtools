import React, { Component } from 'react';

//if (process.env.NODE_ENV !== 'production')
{
  const {whyDidYouUpdate} = require('why-did-you-update');
  //whyDidYouUpdate(React);
}

import Components from './Components';
import Systems from './Systems';
import styled from 'styled-components';
import Bindings from '../ECSYBindings';
import Queries from './Queries';
import Entities from './Entities';
import Events from '../utils/Events';

import { ToggleButton, OptionsGroup, Button, SectionHeader2, Title, TitleGroup } from './StyledComponents';
import {
  FaPlay,
  FaPause,
  FaFastForward,
  FaStepForward,
  FaChartArea,
  FaCode,
  FaProjectDiagram,
  FaChartBar,
  FaLink,
  FaBoxes,
  FaChartLine,
  FaChartPie
 } from 'react-icons/fa';


var globalBrowser =  typeof chrome !== 'undefined' ? chrome : typeof browser !== 'undefined' ? browser : null;

const Container = styled.div`
  background-color: #292929;
  padding: 10px;
  width: 100%;
`;

const Columns = styled.div`
  display: grid;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  margin-right: 20px;
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
  font-size: 1.2em;

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
      worldExist: false,
      debug: false,
      showComponents: true,
      showEntities: true,
      showQueries: true,
      showSystems: true,
      showGraphs: false,
      overComponents: [],
      prevOverComponents: [],
      overQueries: [],
      prevOverQueries: [],
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

    this.graphStatus = {
      systems: false,
      components: false,
      queries: false,
      entities: false
    }

    Events.on('toggleGraphs', detail => {
      this.graphStatus[detail.group] = detail.value;
      this.setState({
        showGraphs: Object.values(this.graphStatus).reduce((a,c) => a && c)
      })
    });

    Events.on('componentOver', detail => {
      if (!this.state.highlight) return;

      this.setState({prevOverComponents: this.state.overComponents});
      this.setState({overComponents: detail});
    });

    Events.on('queryOver', detail => {
      if (!this.state.highlight) return;

      this.setState({prevOverQueries: this.state.overQueries});
      this.setState({overQueries: detail});
    });

    Events.on('systemOver', detail => {
      if (!this.state.highlight) return;

      if (detail.length > 0) {
        var system = detail[0];
        let overQueries = Object.keys(system.queries).map(querySystemName =>
          this.state.data.queries.find(q => q.key === system.queries[querySystemName].key)
        );
        this.setState({prevOverQueries: this.state.overQueries});
        this.setState({
          overQueries: overQueries,
          overSystem: true
        });
      } else {
        this.setState({prevOverQueries: this.state.overQueries});
        this.setState({
          overQueries: [],
          overSystem: false
        });
      }
    });

    if (globalBrowser && globalBrowser.devtools) {
      var backgroundPageConnection = globalBrowser.runtime.connect({
        name: "devtools"
      });

      backgroundPageConnection.postMessage({
        name: 'init',
        tabId: globalBrowser.devtools.inspectedWindow.tabId
      });

      backgroundPageConnection.onMessage.addListener(m => {
        if (m.method === 'refreshData') {
          this.processData(m.data);
        }
      });
    } else {
      window.addEventListener('refreshData', (evt) => {
        this.processData(evt.detail);
      });
    }
  }

  processData(data) {
    let graphConfig = this.state.graphConfig

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

    // Compute prev system to be executed
    let lastExecutedIndex = data.systems.indexOf(data.systems.find(s => s.name === data.lastExecutedSystem));
    data.nextSystemToExecute = data.systems[(lastExecutedIndex + 1) % data.systems.length].name;

    this.setState({
      data: data,
      graphConfig: graphConfig
    });
  }

  dumpData = e => {
    Bindings.logData(this.state.data);
  }

  toggleShowDebug = () => {
    this.setState({debug: !this.state.debug});
  }

  toggleHighlightRelationships = () => {
    this.setState({highlight: !this.state.highlight});
  }

  toggleShowGraph = () => {
    Events.emit('toggleAllGraphs', !this.state.showGraphs);
    this.setState({showGraphs: !this.state.showGraphs});
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
          <ToggleButton title="Show Entities Panel" onClick={this.toggleEntities} disabled={!state.showEntities}>E</ToggleButton>
          <ToggleButton title="Show Components Panel" onClick={this.toggleComponents} disabled={!state.showComponents}>C</ToggleButton>
          <ToggleButton title="Show Systems Panel" onClick={this.toggleSystems} disabled={!state.showSystems}>S</ToggleButton>
          <ToggleButton title="Show Queries Panel" onClick={this.toggleQueries} disabled={!state.showQueries}>Q</ToggleButton>
          <ToggleButton
            onClick={this.toggleHighlightRelationships}
            disabled={!this.state.highlight}
            title="Highlight relatinships">
            <FaProjectDiagram/>
          </ToggleButton>
          <ToggleButton
            onClick={this.toggleShowDebug}
            disabled={!this.state.debug}
            title="Show debug">
            <FaCode/>
          </ToggleButton>
          <ToggleButton
            onClick={this.toggleShowGraph}
            disabled={!this.state.showGraphs}
            title="Show charts">
            <FaChartArea/>
          </ToggleButton>
        </div>
        {
          this.state.debug &&
          <Code>
            <button onClick={this.dumpData}>dump to console ($data)</button><br/>
            {JSON.stringify(data, null, 2)}
          </Code>
        }
        <Columns>
          {
            (state.showEntities || state.showComponents) &&
            <Column>
              {
                state.showEntities &&
                <Entities
                  data={data}
                  numEntities={data.numEntities}
                  showGraphs={this.state.showGraphs}
                />
              }
              {
                state.showComponents &&
                <Components
                  graphConfig={this.state.graphConfig}
                  components={data.components}
                  componentsPools={data.componentsPools}
                  overQueries={this.state.overQueries}
                  showGraphs={this.state.showGraphs}
                />
              }
            </Column>
          }
          {
            state.showQueries &&
            <Column>
              <Queries
                graphConfig={this.state.graphConfig}
                queries={data.queries}
                overQueries={this.state.overQueries}
                prevOverQueries={this.state.prevOverQueries}
                overComponents={this.state.overComponents}
                prevOverComponents={this.state.prevOverComponents}
                showGraphs={this.state.showGraphs}
              />
            </Column>
          }
          {
            state.showSystems &&
            <Column>
              <Systems
              systems={data.systems}
              nextSystemToExecute={data.nextSystemToExecute}
              dataQueries={data.queries}
              data={data}
              showGraphs={this.state.showGraphs}
              graphConfig={this.state.graphConfig}
              overQueries={this.state.overQueries}
              prevOverQueries={this.state.prevOverQueries}
              overSystem={this.state.overSystem}
              overComponents={this.state.overComponents}
              prevOverComponents={this.state.prevOverComponents}
              />
            </Column>
          }
        </Columns>
      </Container>
    );
  }
}

export default App;
