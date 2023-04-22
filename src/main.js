import Vue from 'vue'
import App from './App.vue'
import GdpUiJd from 'gdp-ui-jd'
import 'gdp-ui-jd/lib/gdp-ui-jd.css'

Vue.config.productionTip = false
Vue.use(GdpUiJd)

new Vue({
  render: h => h(App),
}).$mount('#app')
