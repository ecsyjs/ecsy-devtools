import React, { PureComponent } from 'react';
import './Panel.css';
import System from './System';
import PieChart from 'react-minimal-pie-chart';
import styled from 'styled-components';
import SmoothieComponent, { TimeSeries } from 'react-smoothie';
import {Button, SectionHeader2, Title, TitleGroup } from './StyledComponents';
import Bindings from '../ECSYBindings';
import Events from '../Events';

import {
  FaStripeS,
  FaPlay,
  FaPause,
  FaFastForward,
  FaStepForward
 } from 'react-icons/fa';


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


function getGradientColor(i) {
  return `hsl(${(54 - i * 20) % 255}, 100%, 57%)`
}

var colors = [];
for (var i = 0; i < 100; i++) {
  colors.push(getGradientColor(i));
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
              grid={{
                fillStyle: 'transparent',
                strokeStyle: 'transparent'
              }}
              labels={{
                fillStyle: '#A9F0FF'
              }}
              millisPerPixel={60}
              series={[
                {
                  data: ts1,
                  strokeStyle: '#2CC8EB',
                  fillStyle: 'rgba(74, 244, 255, 0.1)',
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
                lineWidth={15}
                lengthAngle={360}
                onClick={undefined}
                onMouseOut={undefined}
                onMouseOver={undefined}
                paddingAngle={8}
                radius={50}
                ratio={1}
                rounded={false}
                startAngle={0}
              />
            </PieContainer>
          }

        <div className="buttons">
          <Button
            onClick={state.playing ? this.stopSystems : this.playSystems}
            title={state.playing ? 'Pause all systems' : 'Play all systems'}>
            {
              state.playing ? <FaPause></FaPause> : <FaPlay></FaPlay>
            }
          </Button>

          <Button onClick={this.stepNextSystem} title="Step next system">
            <FaStepForward></FaStepForward>
          </Button>
          <Button onClick={this.stepSystems} title="Step all systems">
            <FaFastForward></FaFastForward>
          </Button>
        </div>

      </SectionHeader2>
        <label htmlFor="show-queries" id="showqueries"><input type="checkbox" id="show-queries" checked={state.showQueries} value={state.showQueries} onChange={this.onShowQueriesChanged}/>Show queries
        </label>
        <ul>
          {systemsHtml}
        </ul>
      </div>
    );
  }
}
