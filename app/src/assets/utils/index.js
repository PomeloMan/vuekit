
const util = {
  error: function (vue, msg) {
    vue.$ui.notification({ message: msg, status: 'danger', pos: 'top-right' })
  },
  warn: function (vue, msg) {
    vue.$ui.notification({ message: msg, status: 'warning', pos: 'top-right' })
  },
  success: function (vue, msg) {
    vue.$ui.notification({ message: msg, status: 'success', pos: 'top-right' })
  }
}

export default {
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, '$util', { value: util })
  }
}
