<template>
  <div class="female-chanel back-color marginTop">
    <ModuleTitle :cls="'icon-sousuo'" :title="'女频四部曲'"></ModuleTitle>
    <div class="female-body">
      <div class="fml-body-left">
        <div class="fml-left-content">
          <a href="javascript:;" class="book-img"><img src="../../assets/img/title.jpeg" alt=""></a>
          <p class="book-name"><a href="javascript:;">爵士渗透</a></p>
          <p class="book-click">85276</p>
          <p class="book-author">作者名字</p>
          <p class="book-intro">俗话说：光剑贼吃肉，没见贼挨打。这话用在  洒…</p>
          <a href="javascript:;" class="to-read">阅读</a>
        </div>
      </div>
      <div class="fml-body-right">
        <div class="col-list">
          <ul>
            <div class="list">
              <a href="javascript:;" ><img src="../../assets/img/title.jpeg" alt=""></a>
              <div class="book-info">
                <a href="javascript:;">绝世神偷</a>
                <p class="book-intro">俗话说：光剑贼吃肉光剑贼吃肉…</p>
                <p class="author-tag">
                  <a href="javascript:;">作者名字</a>
                  <a href="javascript:;">标签</a>
                </p>
              </div>
            </div>
            <div class="list">
              <a href="javascript:;" ><img src="../../assets/img/title.jpeg" alt=""></a>
              <div class="book-info">
                <a href="javascript:;">绝世神偷</a>
                <p class="book-intro">俗话说：光剑贼吃肉光剑贼吃肉…</p>
                <p class="author-tag">
                  <a href="javascript:;">作者名字</a>
                  <a href="javascript:;">标签</a>
                </p>
              </div>
            </div>
            <div class="list">
              <a href="javascript:;" ><img src="../../assets/img/title.jpeg" alt=""></a>
              <div class="book-info">
                <a href="javascript:;">绝世神偷</a>
                <p class="book-intro">俗话说：光剑贼吃肉光剑贼吃肉…</p>
                <p class="author-tag">
                  <a href="javascript:;">作者名字</a>
                  <a href="javascript:;">标签</a>
                </p>
              </div>
            </div>
          </ul>
        </div>
        <div class="col-list">
          <ul>
            <div class="list">
              <a href="javascript:;" ><img src="../../assets/img/title.jpeg" alt=""></a>
              <div class="book-info">
                <a href="javascript:;">绝世神偷</a>
                <p class="book-intro">俗话说：光剑贼吃肉光剑贼吃肉…</p>
                <p class="author-tag">
                  <a href="javascript:;">作者名字</a>
                  <a href="javascript:;">标签</a>
                </p>
              </div>
            </div>
            <div class="list">
              <a href="javascript:;" ><img src="../../assets/img/title.jpeg" alt=""></a>
              <div class="book-info">
                <a href="javascript:;">绝世神偷</a>
                <p class="book-intro">俗话说：光剑贼吃肉光剑贼吃肉…</p>
                <p class="author-tag">
                  <a href="javascript:;">作者名字</a>
                  <a href="javascript:;">标签</a>
                </p>
              </div>
            </div>
            <div class="list">
              <a href="javascript:;" ><img src="../../assets/img/title.jpeg" alt=""></a>
              <div class="book-info">
                <a href="javascript:;">绝世神偷</a>
                <p class="book-intro">俗话说：光剑贼吃肉光剑贼吃肉…</p>
                <p class="author-tag">
                  <a href="javascript:;">作者名字</a>
                  <a href="javascript:;">标签</a>
                </p>
              </div>
            </div>
          </ul>
        </div>
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import ModuleTitle from "../ModuleTitle/ModuleTitle"
    export default {
        data() {
          return {

          }
        },
        components:{
          ModuleTitle
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .female-chanel
    padding:22px 20px

    .female-body
      overflow hidden

      .fml-body-left
        float: left
        width:166px
        background #f6f8fc
        .fml-left-content
          width: 142px
          margin:0 auto
          text-align center
          .book-img
            display inline-block
            margin-top 28px
            margin-bottom 10px
            img
              width:98px
              height 128px
              box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.45);
          .book-name
            font-size 16px
            a
              color: rgba(0,0,0,.85)
              font-weight: 500;
          .book-click
            margin:8px 0
            font-size 14px
            color #dc5b5b
          .book-author ,.book-intro
            font-size 12px
            color #9b9b9b
          .book-intro
            margin:12px auto 20px
          .to-read
            display inline-block
            width:74px
            height:32px
            margin-bottom 22px
            border-radius: 4px;
            background-color: #f3799c;
            line-height 32px
            font-size 14px
            color: #fff

      .fml-body-right
        float right
        overflow hidden
        .col-list
          width: 232px
          float: left
          margin-right 24px
          margin-left 22px
          ul
            .list
              margin-top 26px
              >a
                display inline-block
                img
                  width:76px
                  height:102px
                  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.45);
              .book-info
                float: right
                width:142px
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
                  overflow hidden
                  >a
                    font-size 12px
                    &:first-child
                      float left
                      color: #9b9b9b
                    &:last-child
                      display block
                      width: 44px
                      height: 19px
                      float: right
                      border-radius: 2.4px;
                      border: solid 0.5px #4f6ac5;
                      text-align center
                      line-height: 19px
                      color: #4f6ac5




              &:first-child
                margin-top:0
        .col-right
          width:224px
          float: left
          li
            padding-top 1px
        .magic-col-right
          width:224px
          float: left
          li
            padding-top 3px
</style>
