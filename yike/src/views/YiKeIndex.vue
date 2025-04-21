<template>
  <div class="wall-index">
    <topBar></topBar>
    <video
    src="../assets/images/qm1.mp4" 
    autoplay="autoplay" 
    muted="true" 
    loop="loop"
    class="bg-video"
    ></video>
      <router-view></router-view>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import FootBar from '@/components/FootBar.vue'
export default {
  data(){
    return{

    }
  },
  components:{
    TopBar,
    FootBar,
  },
  computed:{

  },
  beforeCreated(){
    this.getUser()
  },
  methods:{
    getUser(){
      this.axios.post('http://182.61.20.123:3001/signin/match',{
        data:'aaa',
        pwd:'bbb',
      }),then((res) =>{
        console.log(res)
      })
    }
  }
}
</script>

<style lang='less' scoped>
// @import '@/styles/commons.less';
//引入字体图标
@import url('../assets/fonts/icon/iconfont.css');
.bg-video{
  height: 800px;
  position:fixed;
  top:0;
  left: 0;
  z-index:-1;
}

</style>