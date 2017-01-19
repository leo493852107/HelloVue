import Vue from 'vue'
import App from './App.vue'

// import all components
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.use(Mint);

new Vue({
  el: '#app',
  render: h => h(App)
})
