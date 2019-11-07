import React, { PureComponent } from 'react';
import './Panel.css';
import System from './System';
import PieChart from 'react-minimal-pie-chart';
import styled from 'styled-components';
import SmoothieComponent, { TimeSeries } from './SmoothieChart';
import { ToggleButton, OptionsGroup, Button, SectionHeader2, Title, TitleGroup } from './StyledComponents';
import Bindings from '../ECSYBindings';
import Events from '../utils/Events';
import Checkbox from './Checkbox';
import isEqual from 'react-fast-compare';
import classNames from 'classnames';
import DeferredRemovalStep from './DeferredRemovalStep';

import {
  FaPlay,
  FaPause,
  FaFastForward,
  FaStepForward,
  FaChartArea,
  FaChartBar,
  FaLink,
  FaBoxes,
  FaTrashAlt,
  FaTrash,
  FaChartLine,
  FaChartPie
 } from 'react-icons/fa';

const PieContainer = styled.div`
  width: 100px;
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

  toggleLinkMinMax = (e) => {
    this.setState({linkMinMax: !this.state.linkMinMax});
  }

  toggleShowGraph = () => {
    Events.emit('toggleGraphs', {group: 'systems', value: !this.state.showGraphs});
    this.setState({showGraphs: !this.state.showGraphs});
  }

  getOrCreateRef(id) {
    if (!this.references.hasOwnProperty(id)) {
        this.references[id] = React.createRef();
    }
    return this.references[id];
  }

  constructor() {
    super();

    Events.on('toggleAllGraphs', value => {
      this.setState({showGraphs: value});
    });

    this.state = {
      showDeferredRemoval: false,
      chartRange: {
        min: 0,
        max: 0
      },
      showGraphs: false,
      playing: true,
      showQueries: true,
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

  toggleShowQueries = () => {
    this.setState({showQueries: !this.state.showQueries});
  }

  toggleDeferredRemoval = () => {
    this.setState({showDeferredRemoval: !this.state.showDeferredRemoval});
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
    const { systems, deferredRemoval, nextSystemToExecute, /*showGraphs,*/ overComponents, overQueries, overSystem } = this.props;
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

    const showGraphs = this.state.showGraphs;

    const headerContainerClasses = classNames({
      'textOnly': !showGraphs
    });

    return (
      <div>
      <SectionHeader2 className={headerContainerClasses}>
        <div className="containerlol">
          <TitleGroup>
            <Title>SYSTEMS ({systems.length})</Title> <Title>{totalSystemsTime.toFixed(2)}ms</Title>
          </TitleGroup>
          <OptionsGroup>
            <ToggleButton
              onClick={this.toggleShowQueries}
              disabled={!this.state.showQueries}
              title="Show queries">
              Q
            </ToggleButton>
            <ToggleButton
              onClick={this.toggleShowGraph}
              disabled={!this.state.showGraphs}
              title="Show charts">
              <FaChartArea/>
            </ToggleButton>
            {
              showGraphs &&
              <ToggleButton
                onClick={this.toggleLinkMinMax}
                disabled={!this.state.linkMinMax}
                title="Link min/max graphs">
                <FaLink/>
              </ToggleButton>
            }
            <ToggleButton
              onClick={this.toggleDeferredRemoval}
              disabled={!this.state.showDeferredRemoval}
              title="Show deferred removal step">
              <FaTrashAlt/>
            </ToggleButton>
          </OptionsGroup>
          {
            showGraphs &&
            <div className="containerrrr">
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
            </div>
          }
          </div>
      <div className="containerright">
        {
          showGraphs &&
          <PieContainer>
            <PieChart
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
    </div>
      </SectionHeader2>
        <ul>
          {
            systems.map((system, i) => {
              const highlighted = Object.values(system.queries).find(sq =>
                  overQueries.find(oq =>
                    oq.key === sq.key) !== undefined ||
                    sq.components.included.find(c => overComponents.indexOf(c) !== -1)) !== undefined;

              return <System
                color={colors[i]}
                highlighted={highlighted}
                nextSystemToExecute={nextSystemToExecute}
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
              />;
            })
          }
          { this.state.showDeferredRemoval &&
            <DeferredRemovalStep deferredData={deferredRemoval}/>
          }
        </ul>
      </div>
    );
  }
}
