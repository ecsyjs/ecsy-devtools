<template>
  <div v-if="data.world" id="app" style="display: flex; background-color: #aaa">
    <div>
      <button @click="showDebugInfo = !showDebugInfo">Show debug info</button>
      <pre v-if="showDebugInfo" style="background-color: #999">{{data}}</pre>
    </div>
    <div class="column">
      <!-- Entities -->
      <h3>Entities: {{data.numEntities}}</h3>

      <!-- Components -->
      <h3>Components: {{numComponents()}} ({{numComponentInstances()}})</h3>
      <ul>
        <li
          v-bind:class="{ active: highlightedComponents.indexOf(name) !== -1 }"
          v-for="(value, name) in data.components" class="query" @mouseover="overComponent(name)">
          <span>{{name}}: {{value}}</span> <em>{{data.componentsPools[name]}}</em>
        </li>
      </ul>

      <!-- Queries -->
      <h3>Queries: {{data.queries.length}}</h3>
      <ul>
        <li v-for="query in data.queries"
          v-bind:class="{ active: highlightedQueries.indexOf(query.key) !== -1 }" class="query"
          @mouseover="overSystemQuery(query.key)">
          <b>{{query.key}}:</b> {{query.numEntities}} ({{query.components.join(', ')}})
        </li>
      </ul>
    </div>
    <div class="column">
      <h3>Systems: {{numSystems()}} ({{totalSystemsTime().toFixed(2)}}ms)</h3>
      <button v-on:click='toggleWorld()'>{{data.world.enabled ? 'stop' : 'play'}} world</button>
      <button v-on:click='stepNextSystem()' :disabled="data.world.enabled">step next system</button>
      <button v-on:click='stepWorld()' :disabled="data.world.enabled">step all systems</button>
      <button v-on:click='playSystems()' :disabled="systemsEnabled()">play all systems</button>
      <button v-on:click='stopSystems()' :disabled="!systemsAnyEnabled()">stop all systems</button>

      <input type="checkbox" id="systems-verbose" v-model="showSystemsEvents"><label for="systems-verbose">show queries</label>
      <ul>
        <li v-for="system in data.systems" v-bind:class="{ running: !data.world.enabled && data.lastExecutedSystem === system.name }">
          <span @mouseover="overSystem(system)"><b>{{system.name}}</b>
            <button v-on:click='toggleSystem(system)'>{{system.enabled ? 'stop' : 'play'}}</button>
            <button v-on:click='stepSystem(system)' :disabled="system.enabled && world.enabled">step</button>
            <button v-on:click='soloPlaySystem(system)'>solo</button>

             ({{system.executeTime.toFixed(2)}}ms / {{(100 * systemPerc(system)).toFixed(2)}}%)
          </span>
          <ul v-if="showSystemsEvents">
            <li>queries:
              <ul>
                <li class="systemQuery" v-for="(value, name) in system.queries"
                    v-bind:class="{ active: highlightedQueries.indexOf(value.key) !== -1 }">
                  <span @mouseover="overSystemQuery(value.key)">{{name}}: {{value.key}} {{(queries.find(q => q.key === value.key)).numEntities}}</span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "./style.css";

export default {
  name: 'App',
  data() {
    return {
      data: {},
      components: {},
      systems: [],
      queries: [],
      world: {enabled: true},
      numEntities: 0,
      showSystemsEvents: true,
      highlightedQueries: [],
      highlightedComponents: [],
      showDebugInfo: false
    }
  },
  methods: {
    numSystems() {
      return this.data.systems ? this.data.systems.length : 0;
    },
    numComponents() {
      return this.data.components ? Object.keys(this.data.components).length : undefined;
    },
    numComponentInstances() {
      return this.components && Object.values(this.components).length > 0 ? Object.values(this.components).reduce((a, c) => a + c) : undefined;
    },
    totalSystemsTime() {
      return this.systems.reduce((acum, s) => acum + s.executeTime, 0);
    },
    systemPerc(system) {
      var total = this.totalSystemsTime();
      return total > 0 ? system.executeTime / total : 0;
    },
    updateComponents(components) {
      this.components = components;
    },
    toggleWorld() {
      window.ecsyDevtools.toggleWorld(this.world.enabled);
    },
    soloPlaySystem(system) {
      window.ecsyDevtools.soloPlaySystem(system);
    },
    toggleSystem(system) {
      window.ecsyDevtools.toggleSystem(system);
    },
    stepSystem(system) {
      window.ecsyDevtools.stepSystem(system);
    },
    stepWorld() {
      window.ecsyDevtools.stepWorld();
    },
    stepNextSystem() {
      window.ecsyDevtools.stepNextSystem();
    },
    overSystemQuery(queryKey) {
      this.highlightedQueries = [queryKey];
      var query = this.data.queries.find(q => q.key === queryKey);
      this.highlightedComponents = query.components;
    },
    overComponent(componentName) {
      this.highlightedComponents = [componentName];
      var queries = this.data.queries.filter(q => q.components.indexOf(componentName) !== -1);
      this.highlightedQueries = queries.map(q => q.key);
    },
    playSystems() {
      window.ecsyDevtools.playSystems();
    },
    stopSystems() {
      window.ecsyDevtools.stopSystems();
    },
    systemsEnabled() {
      return this.data.systems.reduce((a,c) => { return {enabled: a.enabled && c.enabled}; }).enabled;
    },
    systemsAnyEnabled() {
      return this.data.systems.reduce((a,c) => { return {enabled: a.enabled || c.enabled}; }).enabled;
    },
    overSystem(system) {
      this.highlightedQueries = [];
      this.highlightedComponents = [];
      for (var name in system.queries) {
        var systemQuery = system.queries[name];
        this.highlightedQueries.push(systemQuery.key);
        var query = this.data.queries.find(q => q.key === systemQuery.key);
        this.highlightedComponents = this.highlightedComponents.concat(query.components);
      }
    }
  }
}
</script>