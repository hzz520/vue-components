import cls from '../../mixins/cls' 
import './main.less'

export default {
    name: 'ui-popup',
    componentName: 'ui-popup',
    mixins: [cls],
    data () {
        return {}
    },
    props: {
        show: {
            type: Boolean
          },
          autoClose: {
            type: Boolean,
            default: true
          }      
    },
    methods: {
        handleClose (e) {
            if (e.currentTarget === e.target) {
              this.$emit('close', '点击了蒙层')
            }
        }
      
    }
}
