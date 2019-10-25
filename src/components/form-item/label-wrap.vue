<template>
    <div v-if='$slots.default' class="ui-form-item__label-wrap">
        <div class="ui-form-item__label-wrap" :style="style">
            {{$slots.default}}
        </div>
    </div>
    <div v-else></div>
</template>

<script>
export default {
    componentName: 'label-wrap',
    data () {
        return {
            computedWidth: 0
        }
    },
    props: {
        isAutoWidth: Boolean,
        updateAll: Boolean
    },

    inject: ['uiForm', 'uiFormItem'],

    methods: {
        getLabelWidth() {
            if (this.$el && this.$el.firstElementChild) {
                const computedWidth = window.getComputedStyle(this.$el.firstElementChild).width;
                return Math.ceil(parseFloat(computedWidth))
            } else {
                return 0
            }
        },
        updateLabelWidth(action = 'update') {
            if (this.$slots.default && this.isAutoWidth && this.$el.firstElementChild) {
                if (action === 'update') {
                this.computedWidth = this.getLabelWidth()
                } else if (action === 'remove') {
                this.uiForm.deregisterLabelWidth(this.computedWidth)
                }
            }
        } 
    },
    computed: {
        style () {
            const styleSheet = {}
            const { 
                autoLabelWidth 
            } = this.uiForm
            if (autoLabelWidth && autoLabelWidth !== 'auto') {
                const marginLeft = parseInt(autoLabelWidth, 10) - this.computedWidth
                if (marginLeft) {
                    styleSheet.marginLeft = marginLeft + 'px'
                }
            }
            return styleSheet
        }
    },
    watch: {
        computedWidth(val, oldVal) {
            if (this.updateAll) {
                this.uiForm.registerLabelWidth(val, oldVal)
                this.uiFormItem.updateComputedLabelWidth(val)
            }
        }
    },
    mounted() {
        this.updateLabelWidth('update')
    },
    updated() {
        this.updateLabelWidth('update')
    },
    beforeDestroy() {
        this.updateLabelWidth('remove')
    }
}
</script>