import './main.less'
import slot from './slot'

export default {
    name: 'example',
    data () {
        return {
        }
    },
    mounted() {
       
    },
    methods: {
        handleclick () {
            this.$popup(slot)
        }
    }
}
