import cls from '../../mixins/cls' 
import './main.less'

export default {
    name: 'ui-input',
    componentName: 'ui-input',
    mixins: [cls],
    data () {
        return {
            inputValue: this.value
        }
    },
    props: {
        type: {
            type: String,
            default: 'text'
        },
        value: [String, Number],
        disabled: Boolean,
        readonly: Boolean,
        showWordLimit: {
           type: Boolean,
           default: false
        },
        clearable: {
            type: Boolean,
            default: false
        },
        showPassword: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'medium'
        },
        prefixIcon: String,
        suffixIcon: String
    },
    methods: {
        
    },
    mounted() {
        
    },
    watch: {
        inputValue (newVal) {
            this.$emit('input', newVal)
        }
    }
}
