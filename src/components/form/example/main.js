import './main.less'

export default {
    name: 'example',
    data () {
        return {
            model: {
               name: ''
            },
            rules: {
                name: [
                    {
                        required: true, 
                        message: '请输入姓名', 
                        trigger: 'change'
                    },
                    {
                        min: 3,
                        max: 5,
                        message: '长度在3到5个字符之间',
                        trigger: 'change'
                    }
                ]
            }
        }
    },
    mounted() {
        
    },
    methods: {
    }
}
