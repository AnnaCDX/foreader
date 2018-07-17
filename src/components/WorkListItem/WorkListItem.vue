<template>
  <li class="each-li">
    <div class="li-show" v-if='index===0'>
      <div class="li-show-left">
        <p class="num" :class="{'num-one':index==0}" >No.{{index+1}}</p>
        <p class="name">爵士渗透</p>
        <p class="clickNum">85777</p>
        <p class="authorName">作者名字</p>
      </div>
      <img src="../../assets/img/title.jpeg" alt="">
    </div>
    <div class="li-hide" v-else>
      <p class="li-hide-rank" :class="{'num-two':index==1,'num-three':index==2}" >{{index+1}}</p>
      <div class="hide-name-click">
        <span :class="{'isBold':index==1||index==2}">爵士渗透</span>
        <span>86777</span></div>
    </div>
  </li>
</template>

<script>
    export default {
      props:{
        index:Number
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
      .li-show-left
        float: left
        .num
          width: 34px
          height: 18px
          background #e8e8e8
          color: #ffffff
          font-size:12px
          margin-bottom 11px
        .num-one
          background #dc5b5b
        .name
          font-size 16px
          color: rgba(0,0,0,.85)
          line-height 14px
          margin-bottom 10px
          font-weight: 500;
        .clickNum
          color: #dc5b5b
          line-height: 12px
          margin-bottom 10px
        .authorName
          color: #9b9b9b
          line-height 10px
          font-size: 12px
      img
        float: right
        width:64px
        height:84px
    .li-hide
      position: relative;
      display block
      font-size 0
      height:28px
      .li-hide-rank
        position absolute
        bottom: 8px
        display inline-block
        width:18px
        height:18px
        text-align center
        line-height 18px
        font-size 12px
        color: #ffffff
        background #e8e8e8
      .num-two
        background #696edf
      .num-three
        background #fdd44c
      .hide-name-click
        display inline-block
        overflow hidden
        width:176px
        height:29px
        border-top:1px solid #e8e8e8
        line-height 29px
        margin-left 30px

        span
          vertical-align middle
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
