import Vue from 'vue'
import IndexView from './main.vue'

import {
    Form,
    FormItem,
    Input
} from '../../../index'

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

new Vue({
    el: '#root',
    render: (h) => h(IndexView),
    mounted () {
        window._vue = this
    }
})
