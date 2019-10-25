<template>
    <div class="example">
        <header class="header">
            Form组件
        </header>
        <ui-form
            :model="model"
            :rules="rules"
        >
            <ui-form-item
                label="姓名"
                prop="name"
            >
                <ui-input type='text' v-model="model.name"/>
            </ui-form-item>
        </ui-form>
    </div>
</template>

<script src='./main.js'></script>
