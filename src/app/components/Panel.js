import React, { Component } from 'react';
import Components from './Components';
import Systems from './Systems';
import styled from 'styled-components';
import Bindings from '../ECSYBindings';
import Queries from './Queries';

const Container = styled.div`
  background-color: #292929;
  padding: 10px;
  display: flex;
`;

const Code = styled.pre`
  background-color: #111;
  color: #EEE;
`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      debug: false
    }

    var backgroundPageConnection = chrome.runtime.connect({
      name: "devtools"
    });

    backgroundPageConnection.postMessage({
      name: 'init',
      tabId: chrome.devtools.inspectedWindow.tabId
    });

    backgroundPageConnection.onMessage.addListener(m => {
      this.setState({data: m.data});
    });

  }

  toggleWorld() {
    Bindings.toggleWorld(this.state.data.world.enabled);
  }

  stepWorld() {
    Bindings.stepWorld();
  }

  playSystems() {
    Bindings.playSystems();
  }

  stopSystems() {
    Bindings.stopSystems();
  }

  stepNextSystem() {
    Bindings.stepNextSystem();
  }

  toggleDebug() {
    this.setState({debug: !this.state.debug})
  }

  render() {
    // const data = this.props.data;
    const data = this.state.data;

    if (!data) {
      return (
        <div></div>
      );
    }

    const numComponents = data.components ? Object.keys(data.components).length : 0;
    const numComponentInstances = data.components && Object.values(data.components).length > 0 ? Object.values(data.components).reduce((a, c) => a + c) : undefined;

    let toggleWorld = this.toggleWorld.bind(this);
    let stepWorld = this.stepWorld.bind(this);
    let playSystems = this.playSystems.bind(this);
    let stopSystems = this.stopSystems.bind(this);
    let toggleDebug = this.toggleDebug.bind(this);
    let stepNextSystem = this.stepNextSystem.bind(this);

    return (
      <Container>
        <div>
          <button onClick={toggleWorld}>{data.world.enabled ? 'stop' : 'play'} world</button>
          <button onClick={stepWorld}>step world (all systems)</button>
          <button onClick={stepNextSystem}>step next system</button>
          <button onClick={playSystems}>play all systems</button>
          <button onClick={stopSystems}>stop all systems</button>
          <button onClick={toggleDebug}>toggle debug info</button>
        </div>
        <div className="column">
          <h3>Entities: {data.numEntities}</h3>
          <h3>Components {numComponents} ({numComponentInstances} instances)</h3>
          <Components components={data.components}/>
        </div>
        <div className="column">
          <Queries queries={data.queries} data={data}/>
        </div>
        <div className="column">
          <Systems systems={data.systems} data={data}/>
        </div>
        {
          this.state.debug && <Code>{JSON.stringify(data, null, 2)}</Code>
        }
      </Container>
    );
  }
}

export default App;