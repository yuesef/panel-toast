import testPanel from './panel.vue'
import testToast from './toast.vue'

let test = {}

test.install = function (Vue, option) {
  Vue.prototype.$msg = 'Hello I am test.js'
  Vue.prototype.$myMethod = function (arr) {
    if (arr.length < 0) {
      return false
    } else {
      arr = arr.join('连接你我')
      return arr
    }
  }
  Vue.component(testPanel.name, testPanel)
  Vue.component(testToast.name, testToast)
}

export default test
