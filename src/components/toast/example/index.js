import 'babel-polyfill'
import Vue from 'vue'
import IndexView from './main.vue'

import plugin from '../index'
import UIButton from '../../ui-button/index' 
Vue.use(plugin)
Vue.use(UIButton)

new Vue({
    el: '#root',
    render: (h) => h(IndexView),
    mounted () {
        window._vue = this
    }
})
