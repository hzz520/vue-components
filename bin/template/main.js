import cls from '../../mixins/cls' 
import './main.less'

export default {
    name: 'ui-button',
    mixins: [cls],
    data () {
        return {}
    },
    props: {
        type: {
            type: String,
            validator: (value) => {
                return ['primary', 'default', 'error', 'warning', 'info', 'success'].includes(value)
            }
        },
        ghost: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleclick (event) {
            this.$emit('click', event)
        }
    }
}
