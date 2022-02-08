<script>
import ToDo from './components/ToDo.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    ToDo,
    Header
  }
}
</script>

<template>
  <div id="app">
    <Header>ToDo</Header>
    <to-do />
  </div>
</template>

<style lang="scss">
#app {
  font-family: $base-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: $primary-background;
  min-height: 100vh;
}

html,
body {
  margin: 0px !important;
  padding: 0px !important;
}
</style>
