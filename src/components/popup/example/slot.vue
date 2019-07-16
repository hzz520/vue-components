<template>
    <div class="slot-container">
        <div class="close" @click="close">x</div>
        <h1>提示</h1>
        <div class="content">这是一个简单例子</div>
        <div class="btns">
            <ui-button type='primary' @click="ensure">确定</ui-button>
            <ui-button @click="close($event, '取消按钮点击', true)">取消</ui-button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        ensure () {
            console.log('确定按钮点击')
            this.close(null, null, false)
        },
        close (e, type = '关闭按钮点击', csl = true) {
            if (csl) {
                console.log(type)
            }
            this.$emit('close')
        }
    }
}
</script>

<style lang='less'>
    .slot-container {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 500px;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;
        padding: 50px 30px 20px;

        h1 {
            font-size: 38px;
            color: #666;
            font-weight: normal;
        }
        
        .close {
            position: absolute;
            right: 30px;
            top: 30px;
            font-size: 50px;
            color: #ddd;
            line-height: 1;
            cursor: pointer;
        }

        .btns {
            width: 100%;
            display: flex;
            justify-content: space-between;

            .zf-ui-button:first-of-type {
               margin-right: 30px;
            }
        }

        .content {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            color: #333;
        }
    }
</style>

