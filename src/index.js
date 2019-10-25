export { default as Button } from './components/button'
export { default as Toast } from './components/toast'
export { default as Popup } from './components/popup'
export { default as Input } from './components/input'
export { default as Form } from './components/form'
export { default as FormItem } from './components/form-item'

const plugins = [
    Button,
    Toast,
    Popup,
    Input,
    Form,
    FormItem
]

export default {
    install: (Vue) => {
        plugins.forEach(plugin => {
            Vue.use(plugin)
        })
    }
}
