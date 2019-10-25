import React, { PureComponent } from 'react';
import './Panel.css';
import System from './System';
import PieChart from 'react-minimal-pie-chart';
import styled from 'styled-components';
import SmoothieComponent, { TimeSeries } from 'react-smoothie';
import {SectionHeader2, Title, TitleGroup } from './StyledComponents';
import Bindings from '../ECSYBindings';
import Events from '../Events';

const PieContainer = styled.div`
  width: 150px;
  padding-left: 20px;
`;


const ts1 = new TimeSeries({});
const ts2 = new TimeSeries({
  resetBounds: true,
  resetBoundsInterval: 3000,
});
/*
setInterval(function() {
  var time = new Date().getTime();

  ts1.append(time, Math.random());
  ts2.append(time, Math.random());
}, 500);
*/

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var colors = [];
for (var i=0;i<100;i++) {
  colors.push(getRandomColor());
}


export const GraphsGroup = styled.div`
  font-size: 1.4em;
  color: #bbb;
  font-weight: light;
`;


export default class Systems extends React.Component {
  constructor() {
    super();
    this.state = {
      playing: true,
      showQueries: false,
      data: [],
      stats: [],
      prevSystemsState: {}
    };

    Events.on('soloPlaySystem', system => {
      let prevSystemsState = this.props.data.systems.map(s =>
        ({
          name: s.name,
          enabled: s.enabled
        })
      );

      this.setState({
        prevSystemsState: prevSystemsState
      });
    });

    Events.on('revertSoloPlaySystem', system => {
      Bindings.setSystemsPlayState(this.state.prevSystemsState);
      this.setState({
        prevSystemsState: {}
      });
    });
  }


  stepSystems = () => {
    Bindings.stepSystems();
  }

  playSystems = () => {
    this.setState({
      playing: true,
      prevSystemsState: {}
    });
    Bindings.playSystems();
  }

  stopSystems = () => {
    this.setState({
      playing: false,
      prevSystemsState: {}
    });
    Bindings.stopSystems();
  }

  stepNextSystem = () => {
    Bindings.stepNextSystem();
  }

  onShowQueriesChanged = e => {
    this.setState({showQueries: e.target.checked});
  }

  render() {
    const { systems, data, showGraphs, overComponents, overQueries, overSystem } = this.props;
    const state = this.state;

    if (!Array.isArray(systems)) {
      return (
        <ul></ul>
      );
    }

    // @todo Move to a function or property
    let totalSystemsTime = systems.reduce((acum, s) => acum + s.executeTime, 0);

    let systemsHtml = systems.map(system => (
      <System
        key={system.name}
        system={system}
        data={data}
        totalSystemsTime={totalSystemsTime}
        showQueries={state.showQueries}
        showGraphs={showGraphs}
        overQueries={overQueries}
        overSystem={overSystem}
        overComponents={overComponents}
      />
    ));

    let chartData = systems.map((s, i) => {
      return {
        title: s.name,
        color: colors[i],
        value: s.executeTime * 100
      };
    });

    var t = new Date().getTime();
    ts1.append(t, totalSystemsTime);

    return (
      <div>
      <SectionHeader2>
        <div>
          <TitleGroup>
            <Title>SYSTEMS ({systems.length})</Title> <Title>{totalSystemsTime.toFixed(2)}ms</Title>
          </TitleGroup>
          {
            showGraphs &&
            <SmoothieComponent
              responsive
              height={30}
              grid={ {strokeStyle: 'transparent'} }
              millisPerPixel={60}
              series={[
                {
                  data: ts1,
                  strokeStyle: { g: 255 },
                  fillStyle: { g: 255 },
                  lineWidth: 1,
                }
              ]}/>
          }
          </div>
          {
            showGraphs &&
            <PieContainer>
              <PieChart
                animate={false}
                animationDuration={500}
                animationEasing="ease-out"
                cx={50}
                cy={50}
                data={chartData}
                label={false}
                labelPosition={50}
                labelStyle={{
                  fill: '#121212',
                  fontFamily: 'sans-serif',
                  fontSize: '5px'
                }}
                lineWidth={100}
                lengthAngle={360}
                onClick={undefined}
                onMouseOut={undefined}
                onMouseOver={undefined}
                paddingAngle={0}
                radius={50}
                ratio={1}
                rounded={false}
                startAngle={0}
              />
            </PieContainer>
          }
      </SectionHeader2>
        <button onClick={state.playing ? this.stopSystems : this.playSystems}>{state.playing ? 'Stop' : 'Play'} systems</button>
        <button onClick={this.stepSystems}>Step all systems</button>
        <button onClick={this.stepNextSystem}>Step next system</button>
        <input type="checkbox" id="show-queries" checked={state.showQueries} value={state.showQueries} onChange={this.onShowQueriesChanged}/><label htmlFor="show-queries">show queries
        </label>
        <ul>
          {systemsHtml}
        </ul>
      </div>
    );
  }
}
