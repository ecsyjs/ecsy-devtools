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
  linkMinMaxChanged = (e) => {
    this.setState({linkMinMax: e.target.checked});
  }

  getOrCreateRef(id) {
    if (!this.references.hasOwnProperty(id)) {
        this.references[id] = React.createRef();
    }
    return this.references[id];
  }

  constructor() {
    super();
    this.state = {
      chartRange: {
        min: 0,
        max: 0
      },
      playing: true,
      showQueries: false,
      data: [],
      stats: [],
      linkMinMax: false,
      prevSystemsState: {}
    };

    this.references = {};


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

  componentWillReceiveProps() {
    let minMax = Object.values(this.references).map(e => e.current.timeSeries).reduce((acum, current) => ({
      min: Math.min(acum.min, current.minValue),
      max: Math.max(acum.max, current.maxValue)
    }),
      {
        min: Number.MAX_VALUE,
        max: Number.MIN_VALUE
      }
    );

    /*
    let minMax = Object.values(this.references).map(e => e.current.refs.chart.smoothie).reduce((acum, current) => ({
      min: Math.min(acum.min, current.currentVisMinValue),
      max: Math.max(acum.max, current.currentVisMinValue + current.currentValueRange)
    }),
      {
        min: Number.MAX_VALUE,
        max: Number.MIN_VALUE
      }
    );
*/
    this.setState({chartRange: minMax});
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
        ref={this.getOrCreateRef(system.name)}
        key={system.name}
        system={system}
        data={data}
        chartRange={this.state.chartRange}
        graphConfig={this.props.graphConfig.systems}
        linkMinMax={this.state.linkMinMax}
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
            {JSON.stringify(this.state.chartRange)}
          </TitleGroup>
          <input
              type="checkbox"
              id="linkminmaxsystems"
              checked={this.state.linkMinMax}
              value={this.state.linkMinMax}
              onChange={this.linkMinMaxChanged}/>
              <label htmlFor="linkminmaxsystems">Link mix/max graphs</label>
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
