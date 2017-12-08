<template>
  <div class="login-page">
    <div class="logo-sign"><img :src="img.logo"></div>
    <form class="uk-form-stacked login-form">
      <div class="form-header">
        <h4 class="signature">Sign in to ...</h4>
      </div>
      <div class="form-body">
        <div class="uk-margin">
          <label class="uk-form-label signature" for="Username">Username</label>
          <div class="uk-inline uk-form-controls">
            <span class="uk-form-icon" uk-icon="icon: user"></span>
            <input class="uk-input signature" id="Username" ref="username" type="text" placeholder="Pick a username">
          </div>
        </div>
        <div class="uk-margin">
            <label class="uk-form-label signature" for="Password">Password</label>
            <div class="uk-inline uk-form-controls">
                <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                <input class="uk-input signature" id="Password" ref="password" type="password" placeholder="Enter a password">
            </div>
        </div>
        <div class="uk-form-controls">
          <button class="uk-button uk-button-primary" @click="login" ref="signIn">Sign in</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import logo from '@/assets/logo.png'
import bg from '@/assets/img/bg-login.jpg'
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      img: {
        logo: logo,
        bg: bg
      }
    }
  },
  computed: {
    ...mapGetters([
      'getBaseUrl'
    ])
    // baseUrl () {
    //   return this.$store.getters.baseUrl
    // }
  },
  methods: {
    ...mapMutations({user: 'user'}), // this.currentUser(obj) == this.$store.commit('user', obj)
    ...mapActions(['saveUser']), // this.user(obj) == this.$store.dispatch('user', obj)
    login: function (e) {
      e.preventDefault()
      var _this = this
      if (this.$refs.signIn.disabled) return
      this.$refs.signIn.disabled = true
      this.$http.post(this.getBaseUrl + 'login', {username: this.$refs.username.value, password: this.$refs.password.value}).then((resp) => {
        var data = resp.data
        if (data.success) {
          _this.saveUser(data.data)
          var to = '/'
          if (_this.$route.query.redirect) {
            to = _this.$route.query.redirect
          }
          _this.$router.push(to)
          _this.$util.success(_this, 'Welcome back! ' + data.data.displayName)
        } else {
          _this.$util.warn(_this, data.message)
          console.warn(resp)
        }
        this.$refs.signIn.disabled = false
      }, (resp) => {
        _this.$util.error(_this, resp.response.status + ':' + resp.response.data.error + '<br/>' + resp.response.data.message)
        console.error(resp)
        this.$refs.signIn.disabled = false
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-page {
  width: 340px;
  margin: 0 auto;
  height: 100%;
}
.login-page > .logo-sign {
  padding: 24px 0px;
  max-width: 48px;
  max-height: 48px;
  margin: 0 auto;
}
.login-form > .form-header {
  text-align: center;
}
.login-form > .form-body {
  padding: 20px;
  border: 1px solid #d8dee2;
}
.login-form > .form-body .uk-form-controls,
.login-form > .form-body .uk-form-controls > button {
  width: 100%;
}
</style>
