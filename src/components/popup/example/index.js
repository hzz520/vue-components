import Vue from 'vue'
import IndexView from './main.vue'

import {
    Button,
    PopUp
} from '../../../index'

Vue.use(PopUp)
Vue.use(Button)

new Vue({
    el: '#root',
    render: (h) => h(IndexView),
    mounted () {
        window._vue = this
    }
})
