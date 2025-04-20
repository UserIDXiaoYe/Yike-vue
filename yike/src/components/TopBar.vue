<template>
  <div class="top-bar">
    <div class="logo">
        <img src="../assets/images/yksg.svg" class="logo-img"/>
        <p class="logo-name">一刻时光</p>
    </div>
    <div class="menu">
      <yk-button nom="cprimary" class="menu-message">留言墙</yk-button>
      <yk-button nom="csecondary" class="menu-photo">照片墙</yk-button>

    </div>
    <div class="user">
        <div class="user-head"></div>
    </div>
  </div>
</template>

<script>
import YkButton from './YkButton.vue';
export default {
  data(){
    return {

    }
  },
  // props:['size','nom'],
  components:{
    YkButton,
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/commons.less';
.top-bar{
    width: 100%;
    height: 52px;
    background: #ffffffcc;
    box-shadow: 0 0 4px 0 #0000001a;
    //毛玻璃效果
    backdrop-filter: blur(10px);
    //绝对定位
    position: fixed;
    top:0;
    left:0;
    z-index:999;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    box-sizing: border-box;

    .logo{
      width: 300px;
      display:flex;
      align-items: center;
      .logo-name{
        font-weight: 600;
        font-size: @size-20;
        color: @gray-1;
        padding-left:10px;
      }
    }
    .menu{
      .menu-message{
        margin-right: 24px;
      }
    }
    .user{
      width: 300px;
      .user-head{
        float:right;
        border-radius:50%;
        height: 36px;
        width: 36px;
        background-image: linear-gradient(180deg,#7BE7FF 2%,#1E85E2 2%);
      }
    }
}

</style>