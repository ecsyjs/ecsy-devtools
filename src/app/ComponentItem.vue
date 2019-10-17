<template>
  <div>
    <div>
      <span class="name">{{name}}</span>
      <span class="value">{{value}}</span>
    </div>
    <div>
      <!--<pre>{{stats}}</pre>-->
      <ComponentTimeLine :stats="stats" :currentValue="value"/>
      <!--<em>{{data.componentsPools[name]}}</em>-->
      <!--<span><canvas id="{{name}}_graph"></canvas></span>-->
      <span>10</span>
    </div>
  </div>
</template>

<script>
import ComponentGraph from "./ComponentGraph.vue";
import ComponentTimeLine from "./ComponentTimeLine.vue";

export default {
  name: 'ComponentItem',
  props: ['name', 'value', 'stats'],
  components: {
    ComponentTimeLine
  }
}
</script>

<style scoped>
p {
  font-size: 20px;
  text-align: center;
}
</style>