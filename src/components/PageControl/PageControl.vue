<template>
  <div class="pageControl">
    <div class="pageControl-main">
      <a href="javascript:;" :disabled="flag<0 " class="prev" @click.prevent="prevNext(true)"><i class="icon iconfont icon-jiantou-zuo"></i></a>
      <a href="javascript:;" class="page-btn"  v-for="(item,index) in data" v-show="index<1" :class="{'page-btn-active':index==flag}" @click.prevent="pageTab(index)">{{index+1}}</a>
      <a href="javascript:;" v-show="data.length>1">...</a>
      <a href="javascript:;" :disabled="flag>data.length-1" class="next" @click.prevent="prevNext(false)"><i class="icon iconfont icon-jiantou-you"></i></a>
      <input type="text" class="page-input" v-model="page">
      <a href="javascript:;" class="skip" @click.prevent="skip(page)">GO</a>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
        props:{
          flag:Number,
          pageTab:Function,
          skip:Function,
          prevNext:Function,
          data:Array
        },
        data() {
            return {
              page:1,
            }
        },
      methods:{
      },
      computed:{
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .pageControl
    width 100%
    margin-top 26px
    .pageControl-main
      width 300px
      margin 0 auto
      text-align center
      a
        vertical-align bottom
      .icon
        width 12px
        height 12px
        color #bfbfbf
        font-size 12px
      .prev
        margin-right 22px
      .page-btn
        width 20px
        height 20px
        background #d9d9d9
        text-align center
        line-height 20px
        font-size 12px
        color #fff
        margin-right 10px
        border-radius 4px
      .page-btn-active
        background #f3799c
      .next
        margin-left 12px
      .page-input,.skip
        width 36px
        height 20px
        border 1px solid #d9d9d9
        border-radius 4px
        margin-left 5px
        text-align center
        line-height 20px
        color rgba(0,0,0,.65)
        font-size 12px


</style>
