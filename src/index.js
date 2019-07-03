import UiButton from './components/ui-button/main'
import { toast } from './components/toast/index'

export default {
    install: (Vue) => {
        Vue.component(UiButton.name, UiButton)
        Object.defineProperty(Vue.prototype, '$toast', { value: toast })
    }
}
