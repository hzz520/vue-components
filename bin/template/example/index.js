import Vue from 'vue'
import IndexView from './main.vue'

import button from '../index'
import toast from '../../toast/index'

Vue.use(button)
Vue.use(toast)

new Vue({
    el: '#root',
    render: (h) => h(IndexView),
    mounted () {
        window._vue = this
    }
})
