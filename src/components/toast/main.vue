<template>
    <div class="ui-toast-component">
        <div class="ui-toast-mask" v-if='hasMask'></div>
        <div :class="['ui-toast-container', show ? `ui-toast-container-${type}-show` : `ui-toast-container-${type}-hide` ]">
            <div v-if='hasIcon' :class="['icon', hasIcon && !icon ? 'ui-icon-' + type : '']"></div>
            {{content}}
        </div>
    </div>
</template>

<script src='./main.js'></script>
