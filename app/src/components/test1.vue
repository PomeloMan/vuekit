<template>
  <div>
    <h1>{{ msg }}</h1>
    <button class="uk-button uk-button-default" @click="greet">Click</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World2!'
    }
  },
  methods: {
    greet: function () {
      this.$ui.notification(
        {
          message: '1',
          status: 'danger',
          pos: 'top-right'
        }
      )
    }
  }
}
</script>