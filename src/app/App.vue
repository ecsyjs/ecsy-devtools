<template>
  <div id="app">
    <pre style="background-color: #888" id="debug"></pre>
    <h3>Entities</h3>
    <ul>
      <li>Num: {{numEntities}}</li>
    </ul>
    <h3>Components</h3>
    <ul>
      <li v-for="(value, name) in components">
        <span>{{name}}: {{value}}</span>
      </li>
    </ul>
    <h3>Systems ({{systems.length}})</h3>
    <button v-on:click='toggleSystems()'>{{true ? 'stop' : 'play'}}</button> <button v-on:click='stepSystems()'>step</button>
    <ul>
      <li v-for="system in systems">
        {{system.name}} ({{system.executeTime}}ms)<button v-on:click='toggleSystem(system)'>{{system.enabled ? 'stop' : 'play'}}</button> <button v-on:click='stepSystem(system)'>step</button>
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
    <h3>Queries ({{queries.length}})</h3>
    <ul>
      <li v-for="query in queries">
        <b>{{query.key}}:</b> {{query.numEntities}} ({{query.components.join(', ')}})
      </li>
    </ul>
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