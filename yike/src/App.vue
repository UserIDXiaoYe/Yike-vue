<template>
  <router-view></router-view>
  <p class="test">aaaaa</p>
</template>
<script>
export default {
  name:'App',
  components: {
  }
}
</script>

<style lang="less" scoped>
@import url(./styles/commons.less);
.test{
  font-size: @size-16;
  color:@warning-color;
}
</style>
