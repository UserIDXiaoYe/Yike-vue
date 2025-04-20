<template>
  <router-view></router-view>
</template>
<script>
export default {
  name:'App',
  components: {
  }
}
</script>

<style lang="less" scoped>
// @import url(./styles/commons.less);
//引入字体图标
@import url('./assets/fonts/icon/iconfont.css');
.test{
  font-size: @size-16;
  color:@warning-color;
}
</style>
