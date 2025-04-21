<template>
  <div class="yk-node-card" :style = "{width:width,background: cardColor[card.imgurl],opacity:0.8}">
    <div class="top">
        <p class="time">{{dateOne(card.moment)}}</p>
        <p class="label">{{ label[card.type][card.label] }}</p>
    </div>
    <p class="message">{{card.message}}</p>
    <div class="foot">
        <div class="foot-left">
            <div class="like">
                <span class="iconfont icon-aixin1"></span>
                <span class="value">{{card.like}}</span>
            </div>
            <div class="icon">
                <span class="iconfont icon-liuyan"></span>
                <span class="value">{{card.comment}}</span>
            </div>
        </div>
        <div class="name">{{card.name}}</div>
    </div>
  </div>
</template>

<script>
import {label,cardColor} from '../utils/data'
import {dateOne} from '../utils/yksg'
export default {
    data(){
        return {
            label,
            dateOne,
            cardColor
        }
    },
    props:{
        width:{
            default: '288px',
        },
        note:{
            default:{},
        }
    },
    computed:{
        card(){
            return this.note;
        }
    },
    created(){
        console.log(this.card);
        
    }
}
</script>

<style lang="less" scoped>
@font-face {
    font-family: fa;
    src: url("../assets/fonts/icon/iconfont.ttf");
}
@import url('../assets/fonts/icon/iconfont.css');
.yk-node-card{
    height: 240px;
    padding: 10px 20px 16px;
    box-sizing: border-box;
    position: relative;
    
    .top{
        display: flex;
        justify-content: space-between;
        padding-bottom: 16px;
        p{
            font-size: 12px;
            color:@gray-3;
        }
    }
    .message{
        height: 140px;
        font-size: 14px;
        color: @gray-1;
        font-family: fa;
        cursor: pointer;
        margin: auto;
        // white-space: pre-line;    /* 保留换行符，允许自动换行 */
        // word-break: break-word;   /* 允许在单词内换行 */
        // overflow-wrap: break-word;/* 确保长单词/URL换行 */
    }
    .foot{
        display: flex;
        justify-content: space-between;
        position: absolute;
        left: 0;
        bottom: 16px;
        padding: 0 20px;
        box-sizing: border-box;
        width: 100%;
        .foot-left{
            display: flex;
            .value{
                font-size: 12px;
                color: @gray-2;
                line-height: 16px;
                padding-left: @padding-4;
            }
            .iconfont{
                font-size: 16px;
                color: @gray-2;
                cursor: pointer;
            }
            .icon{
                padding-right: @padding-8;
                display: flex;
                align-items: center;
            }
            .icon-aixin1{
                
                transition: all 0.3s;
                &:hover{
                    color: #f67770;
                }
            }
        }
        .name{
            font-size: 16px;
            color: @gray-2;
            font-weight: 600;
        }
    }
}
</style>