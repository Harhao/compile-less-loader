import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.use(elSwitch)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  render: h => h(App)
})