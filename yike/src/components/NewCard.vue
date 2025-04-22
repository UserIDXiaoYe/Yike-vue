<template>
  <div class="new-card">
    <div class="colors">
        <p 
        class="color-li" v-for="(e,index) in  cardColor1" 
        :key="index" 
        :style="{background: e}" 
        :class="{colorselected :index == colorselected}"
        @click="changeColor(index)"
        ></p>
    </div>
    <div class="card-main" :style="{background: cardColor[colorselected]}">
        <textarea placeholder="留言~~" class="message" maxlength="96"></textarea>
        <input type="text" placeholder="签名" class="name">
    </div>
    <div class="labels">
        <p class="title">选择标签</p>
        <div class="label">
            <p 
            v-for="(e,index) in label[id]" 
            :key="index" 
            class="label-li"
            :class="{ labelselected: index == labelSelected }"
            @click="changLabel(index)"
            >{{ e }}</p>
        </div>
    </div>
    <div class="footbt">
        <yk-button-vue size="max" nom="secondary" @click="colseModal(0)">丢弃</yk-button-vue>
        <yk-button-vue size="max" class="submit" @click="submit()">确定</yk-button-vue>
    </div>
  </div>
</template>

<script>
import { cardColor,cardColor1,label } from '../utils/data';
import YkButtonVue from "./YkButton.vue";
export default {
    data(){
        return {
            cardColor,
            cardColor1,
            label,
            colorselected:0,//背景初始颜色
            selected:0,//当前选择颜色
            labelSelected:0,
        }
    },
    props:{
        id:{
            default:0,
        }
    },
    methods:{
        changeColor(e){
            this.colorselected = e
        },
        //点击切换标签
        changLabel(e) {
            this.labelSelected = e;
        },
        colseModal(data) {
            this.$emit('addClose', data);
        },
    },
    components: {
        YkButtonVue,
    },
}
</script>

<style lang="less" scoped>
.new-card{
    .colors{
        display: flex;
        .color-li{
            width: 24px;
            height: 24px;
            margin-right: 8px;
            margin-top: 32px;
            cursor: pointer;
        }
        .colorselected{
            border: 1px solid rgba(59, 115, 240, 1);
        }
    }
    .card-main{
        margin-top: 12px;
        height: 240px;
        width: 100%;
        // background-color: antiquewhite;
        padding: 12px;
        box-sizing: border-box;
        .message{
            background: none;
            border: none;
            height: 172px;
            width: 280px;
            resize: none;
            padding: 8px;
        }
        .name{
            width: 94%;
            height: 11px;
            // box-sizing: border-box;
            padding: 8px;
            background: none;
            // border: none;
            line-height: 20px;
            border: #ffffff 1px solid;
        }
        
    }
    .title{
        color:@gray-1;
        font-weight: 600;
        padding-top: 30px;
    }
    .label{
        display: flex;
        flex-wrap:wrap;
        .label-li{
            padding: 2px 10px;
            border-radius: 20px;
            margin: 16px @padding-4 0 0;
            cursor: pointer;
            color: @gray-2;
            transition: all 0.3s;
        }
        .labelselected{
            background: #ebebeb;
            font-weight: 600;
            color: @gray-1;
        }
    }
    .footbt {
        padding: @padding-20;
        box-sizing: border-box;
        position: fixed;
        bottom: 52px;
        left: 0;
        // background: rgba(255, 255, 255, 0.6);
        width: 100%;
        backdrop-filter: blur(10px);
        cursor: pointer;
        .submit {
            margin-left: @padding-20;
            width: 200px;
        }
    }
}

</style>