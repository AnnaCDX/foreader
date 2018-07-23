<template>
  <p class="module-title"><i class="icon iconfont" :class="cls"></i> <span>{{title}}</span><slot name="more"></slot></p>
</template>

<script>
    export default {
      props:{
        title:String,
        cls:String
      },
        data() {
          return {

          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .module-title
    border-bottom 0.5px solid rgba(0,0,0,.65)
    padding-bottom 9px
    font-size 18px
    margin-bottom 20px
    .icon
      margin-right: 9px
    span
      line-height:18px
      color: rgba(0,0,0,.85)
      font-weight 500
    a
      float: right
      font-size 12px
      color:rgba(0,0,0,.65)
      margin-top:10px
      font-weight 500
</style>
