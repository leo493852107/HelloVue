<template>
  <div id="app">
    <h3>Welcome Vue-webpack</h3>
    <strong>{{msg}}</strong>
    <News></News>
  </div>
</template>

<script>
import News from './components/News.vue'
export default {
  data () {
    return {
      msg: '我是数据'
    }
  },
  components: {
    News
  }
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
