<template>
    <div :class="[`${prefixCls}-form-item`]">
        <label-wrap
            :is-auto-width="labelStyle && labelStyle.width === 'auto'"
            :update-all="form.labelWidth === 'auto'"
        >
            <label :for="labelFor" class="ui-form-item__label" :style="labelStyle" v-if="label || $slots.label">
                {{label + form.labelSuffix}}
            </label>
        </label-wrap>
    </div>
</template>
<script src='./main.js'></script>
