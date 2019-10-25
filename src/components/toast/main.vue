/*
 * @Author: huangzz 
 * @Date: 2019-07-25 11:17:59 
 * @Last Modified by:   huangzz 
 * @Last Modified time: 2019-07-25 11:17:59 
 */
<template>
    <div :class="[`${prefixCls}-toast-component`]">
        <div :class="[`${prefixCls}-toast-mask`]" v-if='hasMask'></div>
        <div :class="[`${prefixCls}-toast-container`, show ? `${prefixCls}-toast-container-${type}-show` : `zf-ui-toast-container-${type}-hide` ]">
            <div v-if='hasIcon' :class="['icon', hasIcon && !icon ? `${prefixCls}-icon-` + type : '']"></div>
            {{content}}
        </div>
    </div>
</template>

<script src='./main.js'></script>
