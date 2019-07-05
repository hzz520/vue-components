import './main.less'

export default {
    name: 'example',
    data () {
        return {

        }
    },
    mounted() {
        
    },
    methods: {
        handleclick (type, t = 3000) {
            let {
                loading,
                info
            } = this.$toast
            switch (type) {
                case 'toast':
                    info(type)
                    break
                case 'loading':
                    let loadVm = loading(type)
                    setTimeout(() => {
                        loadVm.close()
                    }, t)
                    break
                default:
                    break;
            }
        }
    }
}
