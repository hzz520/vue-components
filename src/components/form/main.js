import cls from '../../mixins/cls' 
import './main.less'

export default {
    name: 'ui-form',
    componentName: 'ui-form',
    mixins: [cls],
    data () {
        return {}
    },
    provide () {
        return {
            uiForm: this
        }
    },
    props: {
       model: Object,
       rules: Object,
       labelPosition: String,
       labelWidth: String,
       labelSuffix: {
        type: String,
        default: ''
      },
      inline: Boolean,
      inlineMessage: Boolean,
      statusIcon: Boolean,
      showMessage: {
        type: Boolean,
        default: true
      },
      size: String,
      disabled: Boolean,
      validateOnRuleChange: {
        type: Boolean,
        default: true
      },
      hideRequiredAsterisk: {
        type: Boolean,
        default: false
      }
    },
    methods: {
        
    },
    mounted() {
        
    }
}
