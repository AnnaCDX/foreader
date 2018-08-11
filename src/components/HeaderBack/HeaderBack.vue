<template>
  <div class="header-back">
    <div class="header-top">
      <div class="top-content">
        <router-link to="/home" replace>
          <div class="top-logo"></div>
        </router-link>
        <HeaderSearch></HeaderSearch>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderSearch from '../HeaderSearch/HeaderSearch'

  export default {
    data() {
            return {}
        },
    components:{
      HeaderSearch
    }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .header-back
    background url("../../assets/img/web/home/top_bg.png")
    background-repeat no-repeat
    background-size contain
    background-position:center;
    background-color #e8f4fc
    .header-top
      position relative
      margin:0 auto
      width: 990px
      height: 170px
      overflow hidden
    .top-content
      width:60%
      overflow hidden
      margin-top: 77px
      .top-logo,.top-center
        line-height: 64px
        height:64px
      .top-logo
        float left
        width 142px
        background url("../../assets/img/web/home/top_logo.png")
        background-repeat no-repeat
        background-size 100%
      .top-center
        float: right
        font-size:0
        .ivu-input-wrapper
          width:261px
          .ivu-input
            border-radius 0
        .skipTo
          display inline-block
          vertical-align middle
          width:45px
          height:32px
          line-height 32px
          text-align center
          background rgba(77,139,238,1)
          .icon
            font-size 14px

</style>
