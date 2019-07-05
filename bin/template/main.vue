<template>
    <div :class="[`${prefixCls}-button`, type ? `${prefixCls}-button-${type}` : '', ghost ? `${prefixCls}-button-ghost` : '']" @click="handleclick($event)">
        <slot name='prefix-icon'></slot>
        <slot></slot>
        <slot name='after-icon'></slot>
    </div>
</template>
<script src='./main.js'></script>
