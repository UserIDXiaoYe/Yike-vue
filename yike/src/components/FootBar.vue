<template>
  <div class="foot-bar">
    <div class="foot-left">
        <div class="logo">
            <img src="../assets/images/yksg.svg" class="logo-img">
            <p class="logo-name">一刻时光</p>
        </div>  
        <div class="text">
            <p class="top-p">一刻时光是独立开发，为便于和用户交流的平台。</p>
            <br>
            <p class="top-p">用户将留言便签贴在留言墙上，用户可以自定义便签颜色和内容属性，不仅可以用于交流，也是一场记录。</p>
        </div>
        <p class="state top-p"><span>声明</span>Copyright © 2025-present XIAOYE</p>
    </div>
    <div class="link">
        <p class="title">链接</p>
        <div class="line-inner">
            <a href="www.xiaoye.website" class="link-name">我的小站</a>
        </div>
    </div>
    

  </div>

</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.foot-bar{
    padding-top: 22px;
    width: 100%;
    height: 200px;
    background: @gray-1;
    position: absolute; /* 使用绝对定位 */
    bottom: 0;
    left: 0;
    display: flex;
    .foot-left{
        margin-left: 200px;
        margin-right: 200px;
        .logo{
            display: flex;
            margin-bottom: 20px;
            .logo-name{
                margin-left: 20px;
                font-weight: 600;
                font-size: 20px;
                color: #FFFFFF;
            }
        }
        .text{
            width: 400px;
            margin-bottom: 30px;
        }
        .top-p{
            opacity: 0.5;;
            font-weight: 400;
            font-size: 12px;
            color: #FFFFFF;
        }
    }
    .link{ 
        .title{
            width: 32px;
            height: 22px;
            opacity: 0.5;
            font-weight: 400;
            font-size: 16px;
            margin-bottom: 10px;
            color:#FFFFFF;
        }
        .line-inner{
            .link-name{
                opacity: 0.5;
                font-weight: 400;
                font-size: 12px;
                margin-bottom: 10px;
                color:#FFFFFF;
            }
        }
        
    }
}

</style>