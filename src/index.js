export { default as Button } from './components/button/index'
export { default as Toast } from './components/toast/index'
export { default as Popup } from './components/popup/index'

const plugins = [
    Button,
    Toast,
    Popup
]

export default {
    install: (Vue) => {
        plugins.forEach(plugin => {
            Vue.use(plugin)
        })
    }
}
