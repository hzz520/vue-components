import './main.less'
export default {
    name: 'ui-button',
    data () {
        return {}
    },
    methods: {
        handleclick (event) {
            this.$emit('click', event)
        }
    }
}
