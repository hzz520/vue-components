<template>
    <div :class="[`${prefixCls}-popup-container`, `${prefixCls}-popup-container-${show ? 'show' : 'hide'}`]" @click="autoClose && handleClose($event)">
        <popup-content :class="`${prefixCls}-popup-content ${prefixCls}-popup-content-${show ? 'show' : 'hide'}`"/>
    </div>
</template>
<script src='./main.js'></script>
