import Vue from 'vue'
import IndexView from './main.vue'

import {
    Button,
    Toast
} from '../../../index'

Vue.use(Button)
Vue.use(Toast)

new Vue({
    el: '#root',
    render: (h) => h(IndexView),
    mounted () {
        window._vue = this
    }
})
