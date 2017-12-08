import Uikit from 'uikit'
import UikitIcon from 'uikit/dist/js/uikit-icons'
import Axios from 'axios'

export default {
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, '$ui', { value: Uikit })
    Object.defineProperty(Vue.prototype, '$icon', { value: UikitIcon })
    Object.defineProperty(Vue.prototype, '$http', { value: Axios })
  }
}
