
import Vue from 'vue'
import tpl from './main'

let showToast = false
let toastVm = null

const notice = (type, content, duration = 2000, hasMask, onClose, hasIcon = false) => {
  if (showToast) {
    return false
  } else if (!toastVm) {
    // Vue.component(tpl.name, tpl)
    let ToastTpl = Vue.extend({
      render (h) {
        let props = {
          content,
          hasIcon,
          type,
          hasMask,
          show: this.show
        }
        return h(tpl.name, { props })
      },
      components: {
        [tpl.name]: tpl
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

    toastVm.close = function () {
        try {
            showToast = toastVm.show = false
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
    }

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
    return toastVm
  }
}

const toast = {
  loading (content = '加载中...', duration, hasMask = true, onClose, hasIcon = true) {
    return notice('loading', content, duration, hasMask, onClose, hasIcon)
  },
  info (content, duration = 2000, hasMask = true, onClose, hasIcon) {
    notice('info', content, duration, hasMask, onClose, hasIcon)
  }
}

toast.install =  (Vue) => {
    Object.defineProperty(Vue.prototype, '$toast', { value: toast })
}

export default toast
