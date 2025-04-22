<template>
    <div class="wall-message">
        <p class="title">{{ wallType[id].name }}</p>
        <p class="slogan">{{ wallType[id].slogan }}</p>
        <div class="label">
            <p class="label-list" :class="{lbselected:nlabel == -1}" @click="selectNode(-1)">全部</p>
            <p class="label-list" :class="{lbselected:nlabel == index}" v-for="(e,index) in label[id]" @click="selectNode(index)">{{ e }}</p>
        </div>
        <div class="card" :style="{width:nWidth + 'px'}">
            <node-card v-for="(e,index) in note" :key="index" :note="e" class="card-inner" :width="'288px'"></node-card>
        </div>
        <div class="add" :style="{bottom: addBottom + 'px'}" @click="closeModal">
            <span class="iconfont icon-tianjia"></span>
        </div>
        <transition name="modal">
            <yk-modal v-if="modal" :title="title" @close="closeModal">
                <new-card :id="id" @addClose="closeModal()" v-if="cardSelected == -1"></new-card>
            </yk-modal>
        </transition>
    </div>
</template>

<script>
import NodeCard from '../components/NodeCard.vue'
import { wallType,label } from '../utils/data.js'
import {note} from "../../mock/index"
import YkModal from '../components/YkModal.vue'
import NewCard from '../components/NewCard.vue'
export default {
    components: { NodeCard ,YkModal, YkModal,NewCard},
    data(){
        return {
            wallType,
            label,
            //id控制墙切换
            id:0,
            //当前对应标签
            nlabel:-1,
            note:note.data,
            nWidth:0,//卡片宽度
            addBottom:30,//add按钮距离底部高度
            title:'写留言',
            modal:false,
            cardSelected:-1,
        }
    },
    methods:{
        //切换label
        selectNode(e){
            this.nlabel = e
        },
        notewidth(){
            let wWidth = document.body.clientWidth
            this.nWidth = Math.floor((wWidth-120)/300)*300 
        },
        //监听页面滚动
        scrollBottom(){
            //距离顶部距离
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            //屏幕高度
            let clientHeight = document.documentElement.clientHeight
            //获取内容高度
            let scrollHeight = document.documentElement.scrollHeight
            if(scrollTop+clientHeight+230>=scrollHeight){
                this.addBottom = scrollTop + clientHeight + 230 - scrollHeight
            } else {
                this.addBottom = 30
            }
        },
        closeModal(){
            this.modal = !this.modal;
            console.log(this.modal);
            
            // if (this.id == 1) {
            //     this.view = false;
            // }
        },
    },
    mounted(){
        this.notewidth();
        //监听屏幕宽度变化
        window.addEventListener('resize',this.notewidth);
        //监听高度变化
        window.addEventListener('scroll',this.scrollBottom)
    },
    unmounted(){
        window.addEventListener('resize',this.notewidth);
        //监听高度变化
        window.addEventListener('scroll',this.scrollBottom)
    }
}
</script>

<style lang="less" scoped>
@import url('../assets/fonts/icon/iconfont.css');
.wall-message{
    //右侧边栏的动画
    .modal {
        //入场
        &-enter {
            &-from {
                transform: translateX(360px);
            }

            &-active {
                transition: all 0.3s ease-out;
            }

            &-to {
                transform: translateX(0px);
            }
        }
        //出场
        &-leave {
            &-from {
                transform: translateX(0px);
            }

            &-active {
                transition: all 0.3s ease-in;

            }

            &-to {
                transform: translateX(360px);
            }
        }
    }
    height: 2000;
    //topbar的高度
    padding-top: 52px;
    .title{
        font-weight: 600;
        font-size: 56px;
        color: @gray-1;
        text-align: center;
        padding-top: 48px;
        padding-bottom: 8px;
    }
    .slogan{
        color: @gray-2;
        text-align: center;
    }
    .label{
        display: flex;
        justify-content: center;
        margin-top: 40px;
        .label-list{
            padding: 0 14px;
            display: flex;
            align-items: center;
            height: 30px;
            margin: 4px;
            color: #5B5B5B;
            box-sizing: border-box;
            cursor: pointer;
        }
        .lbselected{
            color: @gray-1;
            font-weight: 600;
            border: 1px solid #202020;
            border-radius: 16px;
        }
    }
    .card{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        // border: 1px solid red;
        padding-top: 28px ;
        margin: auto;
        .card-inner{
            margin: 6px;
        }
    }
    .add{
        width: 56px;
        height: 56px;
        background: @gray-1;
        box-shadow: 0 4px 8px 0 #00000014;
        border-radius: 28px;
        position: fixed;
        right:30px;
        // bottom: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.3;
        .icon-tianjia{
            color:white;
            font-size: 24px;
        }
    }
}

</style>