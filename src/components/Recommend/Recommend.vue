<template>
<div class="recommend-container">
  <div class="recommend-main">
    <a href="javascript:;" ><img src="../../assets/img/title.jpeg" alt=""></a>
    <div class="book-info">
     <div class="info-container">
       <a href="javascript:;">绝世神偷</a>
       <p class="book-intro">俗话说：光剑贼吃肉，没见贼挨打。这话用在沉默身上正好翻了过来，俗话说：光剑贼吃肉，没见贼挨打。这话用在沉默身上正打…</p>
       <p class="author-tag">
         <img src="../../assets/img/title.jpeg" alt="">
         <a href="javascript:;">作者名字</a> | <span>8467367</span>
       </p>
     </div>
     <div class="read-fav">
       <router-link to="/read" class="read-now">立即阅读</router-link>
       <a href="javascript:;" class="fav">加入收藏</a>
     </div>

    </div>
  </div>
  <div class="recommend-main">
    <a href="javascript:;" ><img src="../../assets/img/title.jpeg" alt=""></a>
    <div class="book-info">
      <div class="info-container">
        <a href="javascript:;">绝世神偷</a>
        <p class="book-intro">俗话说：光剑贼吃肉，没见贼挨打。这话用在沉默身上正好翻了过来，俗话说：光剑贼吃肉，没见贼挨打。这话用在沉默身上正打…</p>
        <p class="author-tag">
          <img src="../../assets/img/title.jpeg" alt="">
          <a href="javascript:;">作者名字</a> | <span>8467367</span>
        </p>
      </div>
      <div class="read-fav">
        <router-link to="/read" class="read-now">立即阅读</router-link>
        <a href="javascript:;" class="fav">加入收藏</a>
      </div>

    </div>
  </div>
  <div class="recommend-main">
    <a href="javascript:;" ><img src="../../assets/img/title.jpeg" alt=""></a>
    <div class="book-info">
      <div class="info-container">
        <a href="javascript:;">绝世神偷</a>
        <p class="book-intro">俗话说：光剑贼吃肉，没见贼挨打。这话用在沉默身上正好翻了过来，俗话说：光剑贼吃肉，没见贼挨打。这话用在沉默身上正打…</p>
        <p class="author-tag">
          <img src="../../assets/img/title.jpeg" alt="">
          <a href="javascript:;">作者名字</a> | <span>8467367</span>
        </p>
      </div>
      <div class="read-fav">
        <router-link to="/read" class="read-now">立即阅读</router-link>
        <a href="javascript:;" class="fav">加入收藏</a>
      </div>

    </div>
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
.recommend-container
  width 748px
  padding 20px
  .recommend-main
    margin-top 20px
    padding-bottom 20px
    border-bottom 1px solid #e8e8e8
    >a
      display inline-block
      img
        width:98px
        height:128px
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.45);
    .book-info
      float: right
      width:594px
      position relative
      .info-container
        width 340px
        >a
          color rgba(0,0,0,.85)
          font-family: PingFangSC;
          font-size: 16px;
          font-weight: 500;
        .book-intro
          font-family: PingFangSC;
          color: rgba(0, 0, 0, 0.65);
          margin: 7px 0 17px;
        .author-tag
          color #E8E8E8
          line-height 20px
          img,a,span
            vertical-align middle
          img
            width 14px
            height 14px
          >a
            font-size 14px
            color rgba(0,0,0,.65)
            margin 0 10px 0 6px
          span
            margin-left 10px
            font-size 12px
            color rgba(0,0,0,.65)


      .read-fav
        position absolute
        bottom 0
        right 0
        width 94px
        >a
          width 94px
          height 34px
          border 1px solid #4D8BEE
          border-radius 4px
          line-height 34px
          text-align center
        .read-now
          margin-bottom 12px
          background #4D8BEE
          color #fff
        .fav
          color #4D8BEE
    &:first-child
      margin-top 10px
</style>
