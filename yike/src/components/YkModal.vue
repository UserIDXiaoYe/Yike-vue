<template>
<transition name="modal">
    <div class="yk-modal">
    <div class="yk-modal-head">
        <p class="modal-name">{{ title }}</p>
        <span class="iconfont icon-guanbi" @click="closeModal"></span>
    </div>
    <div class="yi-modal-main">
        <slot></slot>
    </div>
  </div>
</transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    title: {
        default: '标题',
    },
})
const emit = defineEmits(['close']);

function closeModal() {
    emit('close', '我是关闭');
}

props;

</script>

<style lang="less" scoped>
@import url('../assets/fonts/icon/iconfont.css');
.yk-modal{
    width: 360px;
    height: 100%;
    background: #ffffffcc;
    box-shadow: 0 0 20px 0 #00000014;
    backdrop-filter: blur(20px);
    position: fixed;
    right: 0;
    top: 52px;
    z-index: 1000;
    padding: 20px;
    box-sizing: border-box;
    .yk-modal-head{
        display: flex;
        justify-content: space-between;
        .modal-name {
            font-size: 16px;
            color: @gray-1;
            font-weight: 600;
        }

        .icon-guanbi {
            color: @gray-2;
            cursor: pointer;
            padding-left: 8px;
        }
    }
    .yk-modal-main {
        // border: 1px solid red;
        height: 100%;
        overflow-y: auto;
        padding-bottom: 116px;
        box-sizing: border-box;

        overflow-x: auto;
        margin: 2px;
    }

    .slot {
        height: 1200px;
        background: #eee;
    }
    /* 滚动条样式 */
    .yk-modal-main::-webkit-scrollbar {
        width: 4px;
        /*  设置纵轴（y轴）轴滚动条 */
        height: 4px;
        /*  设置横轴（x轴）轴滚动条 */
    }

    /* 滚动条滑块（里面小方块） */
    .yk-modal-main::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background: rgba(0, 0, 0, 0.2);
    }

    /* 滚动条轨道 */
    .yk-modal-main::-webkit-scrollbar-track {
        border-radius: 4px;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0);
    }

}
</style>