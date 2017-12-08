<template>
  <div id="app" class="uk-background-muted" style="height: 100%;">
    <router-view name="header"></router-view>
    <router-view name="container"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import "uikit/dist/css/uikit.css";
@import "./css/style.css";
</style>
