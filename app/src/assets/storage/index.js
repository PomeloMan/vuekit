
const storage = {

  storage: window.localStorage,

  setItem: function (key, value) {
    if (value instanceof Object) {
      value = JSON.stringify(value)
    }
    this.storage.setItem(key, value)
  },
  getItem: function (key, parse) {
    if (parse) {
      try {
        return JSON.parse(this.storage.getItem(key))
      } catch (e) {
        return this.storage.getItem(key)
      }
    }
    return this.storage.getItem(key)
  }
}

export default storage
