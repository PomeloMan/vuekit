// The Vue butild version to load with he `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import { mapGetters } from 'vuex'
import Plugin from './assets/plugins'
import Util from './assets/utils'

Vue.use(Plugin)
Vue.use(Util)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created: function () {
    this.$icon(this.$ui)// install UIkit-icon plugin
    console.log(this.$http ? 'Axios works!' : 'Uh oh..')
  },
  methods: {
    authentication: function (to, from) {
      if (to.meta.requireAuth && !this.getUser) {
        this.$router.push('/login?redirect=' + to.fullPath)
      }
    }
  },
  computed: {
    ...mapGetters([
      'getUser'
    ])
  },
  watch: {
    '$route': 'authentication'
  }
})
