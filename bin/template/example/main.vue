<template>
    <div class="example">
        <div v-for="(item, i) in btnArr" :key="i">
            <ui-button :type="item" :ghost="false" @click="handleclick(item, false)">{{item}}</ui-button>
            <ui-button :type="item" :ghost="true" @click="handleclick(item, true)">{{item}}-ghost</ui-button>
        </div>
    </div>
</template>

<script src='./main.js'></script>
