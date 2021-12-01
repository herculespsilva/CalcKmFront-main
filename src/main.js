import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'https://8080-salmon-wildfowl-1q6ae3na.ws-us20.gitpod.io/calculo_do_Km/';

// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')