import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: '',
    senha: ''
  },
  mutations: {
    setUsuario(state, valor) {
      state.usuario = valor;
    },
    setSenha(state, valor) {
      state.senha = valor;
    }
  },
  actions: {
  },
  modules: {
  }
})
