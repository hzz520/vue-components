export { default as Button } from './components/button'
export { default as Toast } from './components/toast'
export { default as Popup } from './components/popup'

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
