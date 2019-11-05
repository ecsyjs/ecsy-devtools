import React, { PureComponent } from 'react';
import './Panel.css';
import System from './System';
import PieChart from 'react-minimal-pie-chart';
import styled from 'styled-components';
import SmoothieComponent, { TimeSeries } from './SmoothieChart';
import {Button, SectionHeader2, Title, TitleGroup } from './StyledComponents';
import Bindings from '../ECSYBindings';
import Events from '../utils/Events';
import Checkbox from './Checkbox';
import isEqual from 'react-fast-compare';

import {
  FaPlay,
  FaPause,
  FaFastForward,
  FaStepForward
 } from 'react-icons/fa';


const PieContainer = styled.div`
  width: 150px;
  padding-left: 20px;
`;

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

  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(this.props, nextProps) ||
      !isEqual(this.state, nextState);
  }

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
      stats: [],
      linkMinMax: false,
      prevSystemsState: {}
    };

    this.references = {};

    this.timeSeries = new TimeSeries({});

    Events.on('togglePlaySystem', system => {
      var system = this.props.systems.find(s => s.name === system.name);
      system.enabled = !system.enabled;

/*
      let playingAny = this.props.systems.reduce( (acum, current) => {
        return acum.enabled || current.enabled;
      });
*/

      let pausedAny = this.props.systems.reduce( (acum, current) => {
        return acum || !current.enabled
      }, false);

      this.setState({
        playing: !pausedAny,
        prevSystemsState: {}
      });
    });

    Events.on('soloPlaySystem', system => {
      let prevSystemsState = this.props.systems.map(s =>
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
    if (this.state.linkMinMax) {
      let minMax = Object.values(this.references).map(e => e.current.timeSeries).reduce((acum, current) => ({
        min: Math.min(acum.min, current.minValue),
        max: Math.max(acum.max, current.maxValue)
      }),
        {
          min: Number.MAX_VALUE,
          max: Number.MIN_VALUE
        }
      );

      this.setState({chartRange: minMax});
    }
  }

  render() {
    const { systems, dataQueries, nextSystemToExecute, showGraphs, overComponents, overQueries, overSystem } = this.props;
    const state = this.state;

    if (!Array.isArray(systems)) {
      return (
        <ul></ul>
      );
    }

    // @todo Move to a function or property
    let totalSystemsTime = systems.reduce((acum, s) => acum + s.executeTime, 0);
    let maxSystemTime = systems.reduce((acum, s) => Math.max(acum, s.executeTime), 0);

    let chartData = systems.map((s, i) => {
      return {
        title: s.name,
        color: colors[i],
        value: s.executeTime * 100
      };
    });

    var t = new Date().getTime();
    this.timeSeries.append(t, totalSystemsTime);

    let allSystemsStopped = systems.reduce((acum, s) => acum && !s.enabled);

    return (
      <div>
      <SectionHeader2>
        <div>
          <TitleGroup>
            <Title>SYSTEMS ({systems.length})</Title> <Title>{totalSystemsTime.toFixed(2)}ms</Title>
          </TitleGroup>

          { showGraphs &&
            <Checkbox
              checked={this.state.linkMinMax}
              value={this.state.linkMinMax}
              description="Link mix/max graphs"
              onChange={this.linkMinMaxChanged}/>
          }
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
                  data: this.timeSeries,
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

          <Button className={allSystemsStopped ? 'disabled': ''} onClick={this.stepNextSystem} title="Step next system">
            <FaStepForward></FaStepForward>
          </Button>
          <Button className={allSystemsStopped ? 'disabled': ''} onClick={this.stepSystems} title="Step all systems">
            <FaFastForward></FaFastForward>
          </Button>
        </div>

      </SectionHeader2>
        <label htmlFor="show-queries" id="showqueries"><input type="checkbox" id="show-queries" checked={state.showQueries} value={state.showQueries} onChange={this.onShowQueriesChanged}/>Show queries
        </label>
        <ul>
          {
            systems.map((system, i) => (
              <System
                color={colors[i]}
                nextSystemToExecute={nextSystemToExecute}
                dataQueries={dataQueries}
                allSystemsStopped={allSystemsStopped}
                graphConfig={this.props.graphConfig.systems}
                ref={this.getOrCreateRef(system.name)}
                key={system.name}
                system={system}
                chartRange={this.state.chartRange}
                graphConfig={this.props.graphConfig.systems}
                linkMinMax={this.state.linkMinMax}
                totalSystemsTime={totalSystemsTime}
                maxSystemTime={maxSystemTime}
                showQueries={state.showQueries}
                showGraphs={showGraphs}
                overQueries={overQueries}
                overSystem={overSystem}
                overComponents={overComponents}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}
