import './main.less'
import cls from '../../mixins/cls' 

export default {
    name: 'ui-toast',
    mixins: [cls],
    data () {
        return {
        }
    },
    props: {
        content: {
            type: String,
            default: ''
        },
        hasIcon: {
            type: Boolean,
            default: false
        },
        hasMask: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        show: {
            type: Boolean,
            default: false
        }
    }
}
