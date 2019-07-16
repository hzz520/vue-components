import Button from './components/button'
import Toast from './components/toast'
import PopUp from './components/popup'
import toast from './components/toast';

const components = [
    Button
]

export default {
    install: (Vue) => {
        components.forEach(component => {
            Vue.component(component.name, component)
        })
        // Vue.use(Toast)
        // Vue.use(PopUp)
        Object.defineProperty(Vue.prototype, '$toast', { value: Toast })
        Object.defineProperty(Vue.prototype, '$popup', { value: PopUp.install })
    },
    Button,
    Toast,
    PopUp
}
