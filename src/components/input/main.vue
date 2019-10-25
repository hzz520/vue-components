<template>
    <div :class="[`${prefixCls}-${type === 'textarea' ? 'textarea' : 'input'}`]">
        <template v-if="type !== 'textarea'">
            <input 
                v-bind="$attrs"
                v-model="inputValue"
                :class="[`${prefixCls}-input__inner`]"
                :disabled="disabled"
                :readonly="readonly"
            />
        </template>
        <template  v-else>
            <textarea
                v-bind="$attrs"
                v-model="inputValue"
                :class="[`${prefixCls}-textarea__inner`]"
                :disabled="disabled"
                :readonly="readonly"
            />
        </template>
    </div>
</template>
<script src='./main.js'></script>
