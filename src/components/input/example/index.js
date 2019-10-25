
import Vue from 'vue'
import IndexView from './main.vue'

import {
    Input
} from '../../../index'

Vue.use(Input)

new Vue({
    el: '#root',
    render: (h) => h(IndexView),
    mounted () {
        window._vue = this
    }
})
