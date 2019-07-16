import Button from './components/button'
import Toast from './components/toast'
import PopUp from './components/popup'

const components = [
    Button
]

const plugins = [
    Toast,
    PopUp
]

export default {
    install: (Vue) => {
        components.forEach(component => {
            Vue.component(component.name, component)
        })
        plugins.forEach(plugin => {
            Vue.use(plugin)
        })
    },
    Button,
    Toast,
    PopUp
}
