<template>
  <div>
    <p class="title">index</p>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  components:{

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
.title {
  font-size: 24px;
  background-color: aqua;
}
</style>