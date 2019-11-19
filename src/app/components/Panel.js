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
import PerfStats from 'incremental-stats-lite';
import { ToggleButton, SectionHeader, TitleGroup, Title } from './StyledComponents';
import {
  FaChartArea,
  FaCode,
  FaTerminal,
  FaPercentage,
  FaProjectDiagram,
 } from 'react-icons/fa';

var globalBrowser =  typeof chrome !== 'undefined' ? chrome : typeof browser !== 'undefined' ? browser : null;

const ConsolePanel = styled.div`
  width: 100%;
  margin-top: 5px;
`;

const ConsoleInput = styled.input`
 color: #ccc;
 background-color: #222;
 border: 1px solid #333;
 padding: 5px;
 width: 100%;
`;

const ConsoleLog = styled.textarea`
  color: #ccc;
  outline: none;
  background-color: #222;
  border: 1px solid #333;
  padding: 5px;
  width: 100%;
`;

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

class App extends Component {
  constructor() {
    super();

    this.stats = {
      components: {},
      queries: {},
      systems: {}
    };

    this.commandsHistory = [];

    this.state = {
      remoteConnectionData: {
        remoteId: ''
      },
      remoteConnection: false,
      remoteConnectionMessage: '',
      ecsyVersion: '',
      worldExist: false,
      debug: false,
      console: false,
      showComponents: true,
      showEntities: true,
      showQueries: true,
      showSystems: true,
      showGraphs: false,
      showStats: false,
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

    const urlParams = new URLSearchParams(window.location.search);
    this.commandsHistoryPos = 0;

    if (urlParams.has('remoteConnect')) {
      let remoteId = urlParams.get('remoteId');
      let remoteConnectionData = this.state.remoteConnectionData;
      remoteConnectionData.remoteId = remoteId;
      this.state.remoteConnectionData = remoteConnectionData;

      console.log('inject remote connect');
      var script = document.createElement('script');
      script.src = 'vendor/peer.min.js';
      script.onload = () => {
        //let id = urlParams.get('remoteConnect')

        var peer = new Peer();
        peer.on('open', id => {
          // console.log('My peer ID is: ' + id);
        });

        //script.parentNode.removeChild(script);
        // console.log('Trying to connect to remote peer', remoteId);
        var conn = peer.connect(remoteId, {serialization: "json"});

        window.__ECSY_REMOTE_DEVTOOLS = {};
        window.__ECSY_REMOTE_DEVTOOLS.connection = conn;
        conn.on('error', err => {
          console.log('errrorrrr', err);
        });

        conn.on('close', () => {
          this.setState({
            remoteConnectionMessage: 'close',
            data: null
          });
/*
          peer.destroy();     // destroy the link
          connected = false;  // set the connected flag to false
          conn = null;        // destroy the conn
          peer = null;        // destroy the peer
*/
          // set a variable which means function calls to launchPeer will not overlap
          //var run_next = true;
/*
          // periodically attempt to reconnect
          setTimeout(() => {
            conn = peer.connect('ED23');
          }, 5000);
*/
        });

        conn.on('disconnected', () => {
          this.setState({remoteConnectionMessage: 'disconnected'});
        });

        conn.on('open', () => {
          // console.log('open!');
          this.setState({remoteConnection: true});

          var script = '';
          fetch( globalBrowser.extension.getURL( 'src/content/index.js' ) )
            .then(res => res.text())
            .then(res => {
              var source = '(function(){' + res + '})();';
              conn.send({type: 'init', script: source});
              // console.log('>>>>>> script');
              /*
              var script = document.createElement('script');
              script.textContent = source;
              script.onload = () => {
                script.parentNode.removeChild(script);
              }
              (document.head||document.documentElement).appendChild(script);

              console.log(res);
              */
            });

          conn.on('data', msg => {
            // console.log('<<<<<<<<<<< data', msg);
            if (msg.method === 'refreshData') {
              this.processData(JSON.parse(msg.data));
            } else if (msg.method === 'console') {
              //console.log('DATA', msg);
              console[msg.type].apply(null, JSON.parse(msg.args));
            } else if (msg.method === 'evalReturn') {
              console.log('<', msg.value);
              this.refs.consoleLog.value += `< ${msg.value}\n`;
              this.refs.consoleLog.scrollTop = this.refs.consoleLog.scrollHeight;
            } else if (msg.method === 'error') {
              let error = JSON.parse(msg.error);
              // console.error('<', error.message);
              console.error('<', error.stack);
              this.refs.consoleLog.value += `< ${error.stack}\n`;
              this.refs.consoleLog.scrollTop = this.refs.consoleLog.scrollHeight;
            }

          });
        });
      }
      (document.head||document.documentElement).appendChild(script);
    }


    this.graphStatus = {
      systems: false,
      components: false,
      queries: false,
      entities: false
    }

    this.statsStatus = {
      systems: false,
      components: false,
      queries: false
    }

    Events.on('toggleStats', detail => {
      this.statsStatus[detail.group] = detail.value;
      this.setState({
        showStats: Object.values(this.statsStatus).reduce((a,c) => a && c)
      })
    });

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
        } else if (m.method === 'disabled') {
          this.setState({data: null});
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

    // Stats
    /*
        this.stats = {
        components: {},
        queries: {},
        systems: {}
      };
    */

    // Update components' stats
    for (let name in data.components) {
      let component = data.components[name];
      if (!this.stats.components[name]) {
        this.stats.components[name] = new PerfStats();
      }

      this.stats.components[name].update(component.count);
      data.components[name].stats = {
        min: this.stats.components[name].min,
        max: this.stats.components[name].max,
        mean: this.stats.components[name].mean,
        standard_deviation: this.stats.components[name].standard_deviation
      }
    }

    // Queries
    data.queries.forEach(query => {
      const key = query.key;
      if (!this.stats.queries[key]) {
        this.stats.queries[key] = new PerfStats();
      }

      this.stats.queries[key].update(query.numEntities);
      query.stats = {
        min: this.stats.queries[key].min,
        max: this.stats.queries[key].max,
        mean: this.stats.queries[key].mean,
        standard_deviation: this.stats.queries[key].standard_deviation
      }
    });

    // Systems
    data.systems.forEach(system => {
      const name = system.name;
      if (!this.stats.systems[name]) {
        this.stats.systems[name] = new PerfStats();
      }

      this.stats.systems[name].update(system.executeTime);
      system.stats = {
        min: this.stats.systems[name].min,
        max: this.stats.systems[name].max,
        mean: this.stats.systems[name].mean,
        standard_deviation: this.stats.systems[name].standard_deviation
      }
    });

    // Overall systems
    let systemsExecuteTime = data.systems.reduce((acum, s) => acum + s.executeTime, 0);
    if (!data.allSystems) {
      data.allSystems = {}
    }
    if (!this.stats.allSystems) {
      this.stats.allSystems = new PerfStats();
    }

    this.stats.allSystems.update(systemsExecuteTime);
    data.allSystems.stats = {
      min: this.stats.allSystems.min,
      max: this.stats.allSystems.max,
      mean: this.stats.allSystems.mean,
      standard_deviation: this.stats.allSystems.standard_deviation
    };

    this.setState({
      data: data,
      ecsyVersion: data.ecsyVersion,
      graphConfig: graphConfig
    });
  }

  dumpData = e => {
    Bindings.logData(this.state.data);
  }

  toggleShowDebug = () => {
    this.setState({debug: !this.state.debug});
  }

  toggleShowConsole = () => {
    this.refs.remoteCommand.focus();
    this.setState({console: !this.state.console});
  }

  toggleHighlightRelationships = () => {
    this.setState({highlight: !this.state.highlight});
  }

  toggleShowGraph = () => {
    Events.emit('toggleAllGraphs', !this.state.showGraphs);
    this.setState({showGraphs: !this.state.showGraphs});
  }

  toggleShowStats = () => {
    Events.emit('toggleAllStats', !this.state.showStats);
    this.setState({showStats: !this.state.showStats});
  }

  toggleComponents = () => {
    this.setState({showComponents: !this.state.showComponents});
  }

  sendCommand = () => {
    let command = this.refs.remoteCommand.value;
    window.conn.send({type: "executeScript", script: command, returnEval: true});
    this.commandsHistoryPos = this.commandsHistory.length;
    this.commandsHistory.push(command);

    console.log('>', command);
    this.refs.consoleLog.value += `> ${command}\n`;
    this.refs.consoleLog.scrollTop = this.refs.consoleLog.scrollHeight;
    this.refs.remoteCommand.value = '';
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

  remoteConnect = () => {
    let remoteId = this.refs.remoteId.value;
    if (remoteId && remoteId.length === 6) {
      globalBrowser.tabs.create({
        "url": "/src/app/index.html?remoteConnect&remoteId=" + remoteId
      });
    }
  }

  onCommandKeyDown = evt => {
    // 38 up
    // 40 down
    if (evt.which === 13) {
      this.sendCommand();
    }

    if (evt.which === 38 || evt.which === 40) {
      this.refs.remoteCommand.value = this.commandsHistory[this.commandsHistoryPos];
      if (evt.which === 38 && this.commandsHistoryPos > 0) {
        this.commandsHistoryPos--;
      }

      if (evt.which === 40 && this.commandsHistoryPos < this.commandsHistory.length - 1) {
        this.commandsHistoryPos++;
      }
    }
  }

  render() {
    const data = this.state.data;
    const state = this.state;

    if (!data && this.state.remoteConnection) {
      return (
        <div style={{backgroundColor: '#AAA'}}>
        <h1>Remote connection done!</h1>
        <h2>{this.state.remoteConnectionMessage}</h2>
        </div>
      );
    }


    if (!data) {
      return (
        <div>
        <h1>ECSY not detected on this page. If you want to connect to a remote device, please enter the code here and click connect</h1>
        <input ref="remoteId" placeholder="Remote connection ID"></input>
        <button onClick={this.remoteConnect}>CONNECT</button>
        </div>
      );
    }

    return (
      <Container>
        <div id="header">
          <div style={{display: "flex"}}>
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
            {
              this.state.remoteConnection &&
              <ToggleButton
                onClick={this.toggleShowConsole}
                disabled={!this.state.console}
                title="Show remote console">
                <FaTerminal/>
              </ToggleButton>
            }
            <ToggleButton
              onClick={this.toggleShowGraph}
              disabled={!this.state.showGraphs}
              title="Show charts">
              <FaChartArea/>
            </ToggleButton>
            <ToggleButton
              onClick={this.toggleShowStats}
              disabled={!this.state.showStats}
              title="Show stats">
              <FaPercentage/>
            </ToggleButton>
          </div>
          <div>
            {
              this.state.remoteConnection &&
              <span style={{marginRight: '10px'}}>
              remote connection (ID: <b>{this.state.remoteConnectionData.remoteId}</b>)
              </span>
            }
            ECSY v{this.state.ecsyVersion}
          </div>
        </div>
        {
          this.state.debug &&
          <Code>
            <button onClick={this.dumpData}>dump to console ($data)</button><br/>
            {JSON.stringify(data, null, 2)}
          </Code>
        }
        {
          this.state.remoteConnection && this.state.console &&
          <SectionHeader style={{marginRight: '20px', marginBottom: '10px'}}>
            <TitleGroup>
              <Title>REMOTE CONSOLE</Title>
            </TitleGroup>
            <ConsolePanel>
              <ConsoleLog ref="consoleLog" rows="8" readOnly={true}></ConsoleLog>
              <ConsoleInput type="text" placeholder="Enter command to be evaluated on the remote session and press <Enter> to execute" ref="remoteCommand" onKeyDown={this.onCommandKeyDown}></ConsoleInput>
            </ConsolePanel>
          </SectionHeader>
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
              deferredRemoval={data.deferredRemoval}
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
