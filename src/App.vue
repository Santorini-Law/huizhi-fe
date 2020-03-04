<template>
  <div id="app">
    <bar/>
    <router-view/>
  </div>
</template>

<script>

import bar from '@/views/common/bar'

export default {
  components: {bar},
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
    margin-top: 60px;
  }
</style>
