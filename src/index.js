import Button from './components/button'
import Toast from './components/toast'
import PopUp from './components/popup'

const components = {
    Button
}

const plugins = {
    Toast,
    PopUp
}

export default {
    install: (Vue) => {
        Object.keys(components).forEach(key => {
            let component = components[key]
            Vue.component(component.name, component)
        })
        Object.keys(plugins).forEach(key => {
            let plugin = plugins[key]
            Vue.use(plugin)
        })
    },
    ...components,
    ...plugins
}
