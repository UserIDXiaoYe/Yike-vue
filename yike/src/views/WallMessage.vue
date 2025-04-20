<template>
    <div class="wall-message">
        <p class="title">{{ wallType[id].name }}</p>
        <p class="slogan">{{ wallType[id].slogan }}</p>
    </div>
</template>

<script>
import { wallType,label } from '../utils/data.js'; 
export default {
    data(){
        return {
            wallType,
            label,
            //id控制墙切换
            id:0,
        }
    }
}
</script>

<style lang="less" scoped>
.wall-message{
    height: 2000;
}

</style>