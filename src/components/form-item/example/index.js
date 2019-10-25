import Vue from 'vue'
import IndexView from './main.vue'

import {
    FormItem
} from '../../../index'

Vue.use(FormItem)

new Vue({
    el: '#root',
    render: (h) => h(IndexView),
    mounted () {
        window._vue = this
    }
})
