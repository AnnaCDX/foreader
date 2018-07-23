<template>
  <div>
    <div class="detail-container">
      <div class="detail-main">
        <Breadcrumb separator=">">
          <BreadcrumbItem to="/">首页</BreadcrumbItem>
          <BreadcrumbItem to="/components/breadcrumb">玄幻</BreadcrumbItem>
          <BreadcrumbItem>重生最轻女帝</BreadcrumbItem>
        </Breadcrumb>
        <div class="detail-info">
          <a href="###" class="book-face"><img src="../../assets/img/title.jpeg" alt=""></a>
          <div class="book-intro">
            <div class="intro-left">
              <p class="book-author">
                <span class="book-name">重生最轻女帝</span><span class="author-name">作者名字 著</span>
              </p>
              <p class="other-info">
                <router-link class="type" to="/type">玄幻</router-link>
                <router-link class="loading" to="/loading">连载中</router-link>
                <router-link class="comfort" to="/comfort">爽文</router-link>
              </p>
              <p class="words-num"><span>19</span>万字</p>
              <div class="update-new">
                <p class="update-info"><span class="update-title">最近更新：</span><span class="update-time">3小时前</span><span class="update-chapter">第一百七十五章</span><span class="chapter-name">城运会前的比赛</span></p>
                <p class="update-intro">俗话说：光剑贼吃肉，没见贼挨打。这话用在沉默身上正好翻了过来，作为子承父业的小偷俗话说：光剑贼吃肉，没见贼挨打。这话用在…</p>
              </div>
              <div class="read-collect">
                <button class="free-read">免费试读</button>
                <button class="free-read">加入收藏</button>
              </div>
            </div>
            <div class="share">分享至
              <a href="###"><img src="../../assets/img/title.jpeg" alt=""></a>
              <a href="###"><img src="../../assets/img/title.jpeg" alt=""></a>
              <a href="###"><img src="../../assets/img/title.jpeg" alt=""></a>
            </div>
          </div>

        </div>
        <div class="book-nav">
          <router-link to="/detail/bookIntro">书籍简介</router-link>
          <router-link to="/detail/directory">目录（1789章）</router-link>
        </div>
        <div class="bookInfo-directory">
          <router-view></router-view>
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
.detail-container
  width 100%
  .detail-main
    width 990px
    margin 0 auto
    .ivu-breadcrumb
      margin: 23px 0 20px 10px
    .detail-info
      height: 386px;
      border-radius: 4px;
      background-color: #ffffff;
      padding 64px 0
      .book-face
        padding: 0 65px;
        float: left;
        border-right: 1px solid #e8e8e8;
        img
          width 196px
          height 256px
      .book-intro
        float right
        .intro-left
          width 440px
          float left
          .book-author
            font-family: PingFangSC;
            .book-name
              font-size: 24px;
              font-weight: 500;
              color rgba(0,0,0,.85)
              margin-right 20px
            .author-name
              font-size: 14px;
              color rgba(0,0,0,.86)
          .other-info
            margin-top 18px
            a
              width 44px
              height 20px
              border-radius: 2.4px;
              border: solid 0.5px #4f6ac5
              margin-right: 13px
              text-align center
              line-height 20px
          .words-num
            font-family: PingFangSC;
            font-size: 14px;
            font-weight: 500;
            color #9b9b9b
            margin 20px 0 18px
            span
              font-family: PingFangSC;
              font-size: 20px;
              font-weight: 500;
              color: rgba(0, 0, 0, 0.65);
          .update-new
            font-family: PingFangSC;
            font-size: 14px;
            color rgba(0,0,0,.65)
            .update-info
              .update-title
                color #f3799c
              .update-time,.update-chapter,.chapter-name
                margin-right 5px
            .update-intro
              line-height 24px
          .read-collect
            margin-top 5px
            .free-read
              width: 104px;
              height: 38px;
              border-radius: 4px;
              background-color: #4d8bee;
              margin-right 20px

        .share
          float right
          width 190px
          a
            margin-left 24px
            img
              width 16px
              height 16px
              border-radius 50%
    .book-nav
      height 65px
      padding-top 34px
      a
        width 150px
        height 30px
        text-align center
        font-family: PingFangSC;
        font-size: 18px;
        color rgba(0,0,0,.65)
        padding-bottom 3px
      .router-link-active
        border-bottom 3px solid #4d8bee
        color #4d8bee
    .bookInfo-directory
      margin-top 20px
</style>
