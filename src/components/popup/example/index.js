import Vue from 'vue'
import IndexView from './main.vue'

import popup from '../index'
import button from '../../button'

Vue.use(popup)
Vue.use(button)

new Vue({
    el: '#root',
    render: (h) => h(IndexView),
    mounted () {
        window._vue = this
    }
})
