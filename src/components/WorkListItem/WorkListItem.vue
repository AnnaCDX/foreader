<template>
  <li class="each-li">
    <div class="li-show" v-if='index===0'>
      <div class="li-show-left">
        <p class="num" :class="{'num-one':index==0}" >No.{{index+1}}</p>
        <a class="name" href="javascript:;" @click="goDetail(each.bid)" :title="each.title">{{each.title}}</a>
        <p class="clickNum">{{each.num}}</p>
        <p class="authorName" v-for="(author,index) in each.authors" :key="index">{{author}}</p>
      </div>
      <a href="javascript:;" @click="goDetail(each.bid)"><img v-lazy="each.poster" alt=""></a>
    </div>
    <div class="li-hide" v-else>
      <p class="li-hide-rank" :class="{'num-two':index==1,'num-three':index==2}" >{{index+1}}</p>
      <div class="hide-name-click">
        <a class="span" href="javascript:;" :class="{'isBold':index==1||index==2}" @click="goDetail(each.bid)" :title="each.title">{{each.title}}</a>
        <span class="span">{{each.num}}</span></div>
    </div>
  </li>
</template>

<script>
  import Vue from 'vue'
  import VueLazyload from 'vue-lazyload'
  Vue.use(VueLazyload);

  export default {
      props:{
        index:Number,
        each:Object
      },
      methods:{
        goDetail(bid){
          let routeData = this.$router.resolve({ path: `/detail/bookIntro/${bid}`});
          window.open(routeData.href, '_blank')
        },
      },
        data() {
          return {

          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .each-li
    overflow hidden
    .li-show
      overflow hidden
      .li-show-left
        float: left
        width 65%
        .num
          width: 34px
          height: 18px
          background #e8e8e8
          color: #ffffff
          font-size:12px
          text-align center
          margin-bottom 11px
          border-radius 2px
        .num-one
          background #dc5b5b
        .name
          font-size 16px
          color: rgba(0,0,0,.85)
          line-height 14px
          margin-bottom 10px
          width 100%
          text-overflow ellipsis
          overflow hidden
          white-space nowrap
          font-weight: 500;
        .clickNum
          color: #dc5b5b
          line-height: 12px
          margin-bottom 10px
        .authorName
          color: #9b9b9b
          line-height 10px
          font-size: 12px
      a
        float: right
        img
          width:64px
          height:86px
          object-fit cover
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.45);
    .li-hide
      position: relative;
      display block
      font-size 0
      height:36px
      border-radius: 2px;
      .li-hide-rank
        position absolute
        bottom: 8px
        display inline-block
        width:18px
        height:18px
        text-align center
        line-height 18px
        font-size 12px
        color: rgba(0,0,0,.75)
        background #e8e8e8
        border-radius: 2px;

      .num-two
        background #696edf
        color: white
      .num-three
        background #fdd44c
        color: white
      .hide-name-click
        display inline-block
        overflow hidden
        width:176px
        height:34px
        border-top:1px solid #e8e8e8
        line-height 35px
        margin-left 30px

        .span
          vertical-align middle
          text-overflow ellipsis
          overflow hidden
          white-space nowrap
          width 176px
          &:first-child
            float left
            font-size 14px
            color: rgba(0,0,0,.85)

          &:last-child
            float right
            font-size 12px
            color: #9b9b9b

        .isBold
          font-weight 500

    &:first-child
      padding-bottom 12px
</style>
