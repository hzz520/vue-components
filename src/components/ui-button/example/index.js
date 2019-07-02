import Vue from 'vue'
import IndexView from './main.vue'

import button from '../index'

Vue.use(button)

new Vue({
    el: '#root',
    render: (h) => h(IndexView),
    mounted () {
        window._vue = this
    }
})
