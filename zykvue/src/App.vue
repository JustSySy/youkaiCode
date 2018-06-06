<template>
  <div id="app">
    <LayerOut>
    </LayerOut>
  </div>
</template>

<script>
import LayerOut from './LayerOut.vue'
export default {
  components: {LayerOut},
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3px;
}
</style>
