<template>
  <header class="card-dark" :class="{scrolled: scrolled}" uk-sticky='{"offset": 0, "top": 0}'>
    <div class="uk-container uk-container-expand">
      <nav class="uk-navbar" uk-navbar>
        <div class="uk-navbar-left">
          <a class="uk-navbar-item logo-text signature" :class="{scrolled: scrolled}" href="/">
            <img class="logo-sign" :class="{scrolled: scrolled}" :src="img.logo">
            Alt
          </a>
        </div>
        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav uk-visible@m">
            <li><router-link class="uk-navbar-item" :class="{scrolled: scrolled}" to="/test">One</router-link></li>
            <li><router-link class="uk-navbar-item" :class="{scrolled: scrolled}" :to="{ name: 'index' }">Two</router-link></li>
            <li><router-link class="uk-navbar-item" :class="{scrolled: scrolled}" :to="'/test1'">Three</router-link></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import logo from '@/assets/logo.png'
export default {
  name: 'header',
  data () {
    return {
      img: {
        logo: logo
      },
      scrolled: false
    }
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 0
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* <header> */
header {
  height: 80px;
  min-width: 100%;
  background: linear-gradient(to left, #1e87f0, #1976D2);
}
header.scrolled {
  height: 48px;
}
header, header.scrolled,
header .logo-sign, header .logo-sign.scrolled,
header .logo-text, header .logo-text.scrolled {
  /* transition: property duration timing-function delay; */
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}
header .logo-sign, header .logo-text {
  max-height: 48px;
  font-size: 24px;
}
header .logo-sign.scrolled, header .logo-text.scrolled {
  max-height: 32px;
  font-size: 18px;
}
header .uk-container, header .uk-container > .uk-navbar {
  height: 100%;
}
/* <a> */
header .uk-navbar-item {
  color: #fff;
}
header .uk-navbar > .uk-navbar-left > a,
header .uk-navbar > .uk-navbar-left > a:hover {
  text-decoration: none
}
header .uk-navbar > .uk-navbar-right > .uk-navbar-nav > li > a {
  position: relative;
  text-decoration: none;
}
header .uk-navbar > .uk-navbar-right > .uk-navbar-nav > li > a:before {
  content: "";
  position: absolute;
  height: 1px;
  bottom: 20px;
  background-color: #fff;
  width: calc(100% - 30px);
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  visibility: hidden;
}
header .uk-navbar > .uk-navbar-right > .uk-navbar-nav > li > a.scrolled:before {
  bottom: 25px;
}
header .uk-navbar > .uk-navbar-right > .uk-navbar-nav > li > a:hover {
  color: #fff;
}
header .uk-navbar > .uk-navbar-right > .uk-navbar-nav > li > a:hover:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
header .uk-navbar > .uk-navbar-right > .uk-navbar-nav > li > a.router-link-exact-active.router-link-active {
  color: #fff;
}
header .uk-navbar > .uk-navbar-right > .uk-navbar-nav > li > a.router-link-exact-active.router-link-active:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
</style>
