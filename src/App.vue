<template>
    <div>
      <div class="container">
        <Header v-show="$route.meta.showHead"></Header>
        <router-view></router-view>
      </div>
    </div>
</template>
<script>
  import Vue from 'vue'
 import Header from './components/Header/Header'
 export default {
        data(){
          return {

          }
        },
        components:{Header}

 }

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.container
  width:100%
  .header
    .header-top
      position relative
      margin:0 auto
      width: 990px
      height: 64px
      overflow hidden
      .top-head,.top-center,.top-tail
        line-height: 64px
        height:64px
      .top-head
        float left
        width 142px
        background rgba(216,216,216,1)
      .top-center
        position absolute
        top:0
        left:343px
        width:306px
        font-size 0
        .ivu-input-wrapper
          width:261px
        span
          display inline-block
          vertical-align middle
          width:45px
          height:32px
          line-height 32px
          text-align center
          background rgba(77,139,238,1)
          .icon
            font-size 14px
      .top-tail
          float: right
          width:135px
          font-size 0
        .search-btn
          display inline-block
          font-size 14px
          margin:0 8px
          .icon
            font-size:16px
      .private
          width 162px

    .header-bottom
      width: 100%
      background rgba(77,139,238,1)
      .bottom-content
        position relative
        margin:0 auto
        width: 990px
        height: 48px
        line-height: 48px
        a
          display inline-block
          width: 80px
          height: 47px
          font-size 14px
          text-align center
          color: #eee
          vertical-align middle
        .router-link-active
          background rgba(70,127,217,1)
          color: #fff
        .write
          float: right
</style>

