<style>
#app {
  background-color: #333;
  display: flex;
}

.column {
  width: 50%;
}
</style>

<template>
  <div id="app" style="display: flex">
    <pre style="background-color: #888" id="debug"></pre>
    <div class="column">
      <h3>Entities: {{numEntities}}</h3>
      <h3>Components</h3>
      <ul>
        <li v-for="(value, name) in components">
          <span>{{name}}: {{value}}</span>
        </li>
      </ul>
      <h3>Queries ({{queries.length}})</h3>
      <ul>
        <li v-for="query in queries">
          <b>{{query.key}}:</b> {{query.numEntities}} ({{query.components.join(', ')}})
        </li>
      </ul>
    </div>
    <div class="column">
      <h3>Systems ({{systems.length}})</h3>
      <button v-on:click='toggleSystems()'>{{true ? 'stop' : 'play'}}</button> <button v-on:click='stepSystems()'>step</button>
      <ul>
        <li v-for="system in systems">
          {{system.name}} ({{system.executeTime.toFixed(2)}}ms / {{(100 * systemPerc(system)).toFixed(2)}}%)<button v-on:click='toggleSystem(system)'>{{system.enabled ? 'stop' : 'play'}}</button> <button v-on:click='stepSystem(system)'>step</button>
          <ul>
            <li>queries:</li>
            <ul>
              <li v-for="(value, name) in system.queries">
                <ul>
                  <li>
                    {{name}}: {{value.key}} {{(queries.find(q => q.key === value.key)).numEntities}}
                  </li>
                  <li>events:
                    <ul>
                      <li v-for="(value, name) in value.events">
                        {{name}} <= {{value.eventName}} {{value.components ? '(' + value.components.join(', ') + ')' : ''}} {{value.numEntities}}
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <li>events:</li>
            <ul>
              <li v-for="(value, name) in system.events">
                {{name}} <= {{value.eventName}}
              </li>
            </ul>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      components: {},
      systems: [],
      queries: [],
      numEntities: 0
    }
  },
  methods: {
    totalSystemsTime() {
      return this.systems.reduce((acum, s) => acum + s.executeTime, 0);
    },
    systemPerc(system) {
      return system.executeTime / this.totalSystemsTime();
    },
    updateComponents(components) {
      this.components = components;
    },
    toggleSystems(system) {
      window.toggleSystems();
    },
    toggleSystem(system) {
      window.toggleSystem(system);
    },
    stepSystem(system) {
      window.stepSystem(system);
    },
    toggleSystems() {
      window.toggleSystems();
    },
    stepSystems() {
      window.stepSystems();
    }
  }
}
</script>