
import Vue from 'vue'
import tpl from './main'

let showToast = false
let toastVm = null

const notice = (type, content, duration = 2000, hasMask, onClose, hasIcon = false) => {
  if (showToast) {
    return false
  } else if (!toastVm) {
    Vue.component('toast', tpl)
    let ToastTpl = Vue.extend({
      render (h) {
        let props = {
          content,
          hasIcon,
          type,
          hasMask,
          show: this.show
        }
        return h('toast', { props })
      },
      data () {
        return {
          show: showToast
        }
      }
    })

    toastVm = new ToastTpl()
    toastVm = toastVm.$mount()
    document.body.appendChild(toastVm.$el)

    toastVm.show = showToast = true

    if (type !== 'loading') {
      setTimeout(() => {
        toastVm.show = showToast = false
        setTimeout(() => {
          let {
            $el: e
          } = toastVm
          document.body.removeChild(e)
          toastVm = null
        }, 300)
      }, duration)
    }
  }
}

export const toast = {
  loading (content = '加载中...', duration, hasMask = true, onClose, hasIcon = true) {
    notice('loading', content, duration, hasMask, onClose, hasIcon)
  },
  async hideloading () {
    try {
      showToast = false
      let {
        $el: e
      } = toastVm
      setTimeout(() => {
        document.body.removeChild(e)
        setTimeout(() => {
          toastVm = null
        }, 200)
      }, 300)
    } catch (error) {
      console.log(error)
    }
  },
  info (content, duration = 2000, hasMask = true, onClose, hasIcon) {
    notice('info', content, duration, hasMask, onClose, hasIcon)
  }
}

export default {
    install: (Vue) => {
        Object.defineProperty(Vue.prototype, '$toast', { value: toast })
    }
}
