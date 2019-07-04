import Button from './components/button/index'
import Toast from './components/toast/index'

const components = [
    Button
]

export default {
    install: (Vue) => {
        components.forEach(component => {
            Vue.component(component.name, component)
        })
        Object.defineProperty(Vue.prototype, '$toast', { value: toast })
    },
    Button,
    Toast
}
