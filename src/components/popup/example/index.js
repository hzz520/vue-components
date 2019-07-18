import Vue from 'vue'
import IndexView from './main.vue'

import {
    Button,
    Popup
} from '../../../index'

Vue.use(Popup)
Vue.use(Button)

new Vue({
    el: '#root',
    render: (h) => h(IndexView),
    mounted () {
        window._vue = this
    }
})
