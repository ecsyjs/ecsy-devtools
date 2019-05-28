<template>
  <div id="app">
    <h3>Entities</h3>
    Num: {{numEntities}}
    <h3>Components</h3>
    <ul>
      <li v-for="(value, name) in components">
        <span>{{name}}: {{value}}</span>
      </li>
    </ul>
    <h3>Systems</h3>
    <ul>
      <li v-for="system in systems">
        {{system}}
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
      numEntities: 0
    }
  },
  methods: {
    updateComponents(components) {
      this.components = components;
    }
  }
}
</script>