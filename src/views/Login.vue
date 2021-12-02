<template>
  <form @submit.prevent="login">

  <h2>Login</h2>

  <p>
    <label for="username">Usuário</label>
    <input type="text" id="username" required autofocus v-model="username">
  </p>

  <p>
    <label for="inputPassword">Senha</label>
    <input type="password" id="inputPassword" required v-model="password">
  </p>
  <button type="submit">Ok</button>
  </form>

</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    auth () {
      this.login({ usuario: this.username, senha: this.password })
    }
  }
}
</script>