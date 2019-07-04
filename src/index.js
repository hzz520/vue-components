import UiButton from './components/ui-button/index'
import toast from './components/toast/index'

const components = [
    UiButton
]

export default {
    install: (Vue) => {
        components.forEach(component => {
            Vue.component(component.name, component)
        })
        Object.defineProperty(Vue.prototype, '$toast', { value: toast })
    },
    UiButton,
    toast
}
