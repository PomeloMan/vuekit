<template>
  <div class="index-page">
    <div v-text="msg"></div>
    <div id="head"></div>
    <a class="uk-button uk-button-primary" href="#foot" uk-scroll>Scroll down</a>
    <div style="height: 1500px">
    </div>
    <div id="foot"></div>
    <a class="uk-button uk-button-primary" href="#head" uk-scroll>Scroll down</a>
    <div style="height: 500px"></div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to hello page!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
