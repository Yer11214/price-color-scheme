import Vue from 'vue'
import App from './App.vue'


import priceColorScheme from '../packages/index.js'

Vue.use(priceColorScheme)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
