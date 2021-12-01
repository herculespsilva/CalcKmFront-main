import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
//import { config } from 'vue/types/umd'

axios.defaults.baseURL = 'https://8080-sapphire-lobster-6tfatmab.ws-us20.gitpod.io/calculo_do_Km/'

//'https://8080-red-catshark-41sm8v52.ws-us18.gitpod.io'

/*axios.interceptors.request.use(config =>{
  config.headers.Authorization = 'um token';
  return config
})*/

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
