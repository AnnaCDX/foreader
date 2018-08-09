<template>
  <div class="loading" v-else>
    <div class="loading-container">
      <img src="../../assets/img/fy_loading.gif" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .loading
    width 100%
    .loading-container
      width 990px
      margin 20px auto
      background #fff
      height 434px
      text-align center
      line-height 434px
      img
        width 200px
        vertical-align middle
</style>
