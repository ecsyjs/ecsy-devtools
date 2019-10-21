import React, { Component } from 'react';
import Components from './Components';
import Systems from './Systems';
import styled from 'styled-components';

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
      data: {msg: "Uninitalized"}
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
    // window.ecsyDevtools.toggleWorld(true);
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

    return (
      <Container>
        <div>
          <h3>Entities: {data.numEntities}</h3>
        </div>
        <div className="column">
          <h3>COMPONENTS {numComponents} ({numComponentInstances} instances)</h3>
          <Components components={data.components}/>
        </div>
        <div className="column">
          <h3>SYSTEMS</h3>
          <Systems systems={data.systems}/>
        </div>
        <Code>{JSON.stringify(data, null, 2)}</Code>
      </Container>
    );
  }
}

export default App;