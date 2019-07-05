import Button  from './main'

Button.install = (Vue) => {
    Vue.component(Button.name, Button)
}

export default Button