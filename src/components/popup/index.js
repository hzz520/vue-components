import Vue from 'vue'
import MainIndex from './main.vue'

let popUpVm = null

const getType = (ins) => {
  let res
  try {
    let temp = Object.prototype.toString.call(ins)
    switch (temp) {
      case '[object String]':
        if (/\//g.test(ins)) {
          res = 'path'
        } else {
          res = 'name'
        }
        break
      case '[object Module]':
      case '[object Object]':
        res = 'vue'
        break
      default:
        break
    }
    return res
  } catch (error) {
    console.log(error)
    return res
  }
}

const getInstance = (com, props = {}, on = {}) => {
  let comp = null
  try {
    switch (getType(com)) {
      case 'vue':
        comp = com
        break
      default:
        break
    }
  } catch (error) {
    console.log(error)
  }

  if (!comp) {
    console.log('组件不存在')
    return false
  }

  Vue.component('PopupContent', Vue.extend({
    render (h) {
      return h(comp.default || comp, { props, on })
    }
  }))

  let Tpl = Vue.extend({
    render (h) {
      props.show = this.show
      return h(
        MainIndex,
        {
          props,
          on
        }
      )
    },
    data () {
      return {
        show: true
      }
    },
    mounted () {
      setTimeout(() => {
        popUpVm.$el.addEventListener('touchmove', this.prevent)
      }, 500)
    },
    beforeDestroy () {
      popUpVm.$el.removeEventListener('touchmove', this.prevent)
    },
    methods: {
      preventMove (e) {
        if (e.currentTarget === e.target) {
          e.preventDefault()
        }
      },
      close: on.close
    }
  })
  if (!popUpVm) {
    popUpVm = new Tpl().$mount()
    document.body.appendChild(popUpVm.$el)
  }
  return popUpVm
}

const setPopup = (com, options = {}) => {
  // let _this = this
  const defaultOptions = {}
  options = {
    ...defaultOptions,
    ...options
  }

  let on = {
    close: async (data) => {
      if (data) {
        console.log(data)
      }
      popUpVm.show = false
      setTimeout(() => {
        let {
          $el: el
        } = popUpVm
        popUpVm = null
        document.body.removeChild(el)
      }, 500)
    },
    weblog: (eventId, name = 'custom') => {
      console.log('eventId', eventId, 'name', name, window.WMDA_REPORT)
      setTimeout(() => {
        window.WMDA_REPORT && eventId && window.WMDA_REPORT('custom', { event_id: eventId })
      }, 0)
    }
  }

  let instance = getInstance(com, options, on)
  return instance
}

export default {
  install: (Vue) => {
    Object.defineProperty(Vue.prototype, '$popup', { value: setPopup })
  }
}
