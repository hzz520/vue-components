import Vue from 'vue'
import IndexView from './main.vue'

import {
    <%= upperName %>
} from '../../../index'

Vue.use(<%= upperName %>)

new Vue({
    el: '#root',
    render: (h) => h(IndexView),
    mounted () {
        window._vue = this
    }
})
