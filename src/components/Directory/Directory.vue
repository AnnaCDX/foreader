<template>
  <div>
    <div class="all-chapter">
      <ul v-for="(item,index) in jiade">
        <li v-for="(item,index) in jiade1"><a href="###">第三章：天啦噜</a><i class="icon iconfont icon-icon-" v-show="item"></i></li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
              jiade :[1,1,1],
              jiade1:[1,1,1,0,0,1,0,1,1,0,1,1,1,0]
            }
        }}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.all-chapter
  padding 30px
  background #fff
  min-height 655px
  ul
    width 33.3%
    float left
    li
      height 40px
      line-height 40px
      border-bottom 1px solid #e8e8e8
      a
        width 226px
        color rgba(0,0,0,.85)
        font-size 14px
        text-overflow ellipsis
        overflow hidden
        white-space nowrap
        vertical-align: top;
      .icon
        width 16px
        height 16px
        color #000000
        font-size 16px
        margin-left 34px
</style>
