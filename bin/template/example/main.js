import './main.less'

export default {
    name: 'example',
    data () {
        return {
            btnArr: [
                'primary',
                'default',
                'info',
                'warning',
                'error',
                'success'
            ]
        }
    },
    mounted() {
        
    },
    methods: {
        handleclick (e, ghost) {
            this.$toast.info(e + (ghost ? '-ghost' : ''))
        }
    }
}
