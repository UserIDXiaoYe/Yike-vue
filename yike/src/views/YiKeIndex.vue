<template>
  <div>
    <router-view></router-view>
    <topBar></topBar>
  </div>
</template>

<script>
import topBar from '@/components/TopBar.vue'
export default {
  data(){
    return{

    }
  },
  components:{
    topBar
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
.title {
  font-size: @size-24;
  background-color: @warning-color;
  color: @gray-2;
}
</style>