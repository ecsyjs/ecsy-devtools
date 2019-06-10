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
      <h3>Components: {{Object.keys(components).length}}</h3>
      <ul>
        <li v-for="(value, name) in components">
          <span>{{name}}: {{value}}</span>
        </li>
      </ul>
      <h3>Queries: {{queries.length}}</h3>
      <ul>
        <li v-for="query in queries">
          <b>{{query.key}}:</b> {{query.numEntities}} ({{query.components.join(', ')}})
        </li>
      </ul>
    </div>
    <div class="column">
      <h3>Systems: {{systems.length}}</h3>
      <button v-on:click='toggleWorld()'>{{world.enabled ? 'stop' : 'play'}}</button> <button v-on:click='stepWorld()'>step</button>
      <ul>
        <li v-for="system in systems">
          <b>{{system.name}}</b><button v-on:click='toggleSystem(system)'>{{system.enabled ? 'stop' : 'play'}}</button> <button v-on:click='stepSystem(system)'>step</button> ({{system.executeTime.toFixed(2)}}ms / {{(100 * systemPerc(system)).toFixed(2)}}%)
          <ul>
            <li>queries:
              <ul>
                <li v-for="(value, name) in system.queries">
                  {{name}}: {{value.key}} {{(queries.find(q => q.key === value.key)).numEntities}}
                  <ul>
                    <li v-for="(value, name) in value.events">
                      {{name}} <= {{value.eventName}} {{value.components ? '(' + value.components.join(', ') + ')' : ''}} {{value.numEntities}}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li v-if="Object.keys(system.events).length > 0">events:
              <ul>
                <li v-for="(value, name) in system.events">
                  {{name}} <= {{value.eventName}}
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
export default {
  name: 'App',
  data() {
    return {
      components: {},
      systems: [],
      queries: [],
      world: {enabled: true},
      numEntities: 0
    }
  },
  methods: {
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
    toggleSystem(system) {
      window.ecsyDevtools.toggleSystem(system);
    },
    stepSystem(system) {
      window.ecsyDevtools.stepSystem(system);
    },
    stepWorld() {
      window.ecsyDevtools.stepWorld();
    }
  }
}
</script>