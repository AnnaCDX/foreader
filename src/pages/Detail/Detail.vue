<template>
  <div>
    <div class="detail-container">
      <div class="detail-main" v-if="bookDetail.book">
        <Breadcrumb separator="<b class='demo-breadcrumb-separator'>></b>">
          <BreadcrumbItem to="/">首页</BreadcrumbItem>
          <BreadcrumbItem >{{bookDetail.book.categories[0]}}</BreadcrumbItem>
          <BreadcrumbItem>{{bookDetail.book.title}}</BreadcrumbItem>
        </Breadcrumb>
        <div class="detail-info">
          <a href="javascript:;" class="book-face"><img :src="bookDetail.book.poster" alt=""></a>
          <div class="book-intro">
            <div class="intro-left">
              <p class="book-author">
                <span class="book-name">{{bookDetail.book.title}}</span><span class="author-name" v-for="(item) in bookDetail.book.authors" :key="item">{{item}}</span> 著
              </p>
              <p class="other-info">
                <a href="javascript:;" class="type" v-for="(per,index) in bookDetail.book.tags.slice(0,2)" :class="{comfort:index==2}"  :key="index">{{per}}</a>
                <a href="javascript:;" class="type comfort">{{bookDetail.book.status==0?"连载中":"已完结"}}</a>
                <a href="javascript:;" class="type">{{bookDetail.book.categories[0]}}</a>
              </p>
              <p class="words-num" v-if="bookDetail.book.wordCount > 10000"><span>{{(bookDetail.book.wordCount/10000).toFixed(1)}}</span> 万字</p>
              <p class="words-num" v-else><span>bookDetail.book.wordCount/10000)</span> 字</p>
              <div class="update-new">
                <p class="update-info"><span class="update-title">最近更新：</span><span class="update-time">{{bookDetail.book.updatedFormated}}</span><span class="chapter-name" v-if="bookDetail.book.latestChapter">{{bookDetail.book.latestChapter.title}}</span></p>
                <!--<span class="update-chapter">第多少张</span>-->
                <p class="update-intro">
                  {{ bookDetail.book.description}}
                  <a href="javascript:;" class="ellipsis">...</a>
                </p>
              </div>
              <div class="read-collect">
                <button class="free-read" @click.prevent="goReading(bookDetail.book.bid)">免费试读</button>
                <AddCollect :bid="bookDetail.book.bid" class="free-read"></AddCollect>
              </div>
            </div>
            <!--<div class="share">分享至-->
              <!--<a href="###"><img src="../../assets/img/title.jpeg" alt=""></a>-->
              <!--<a href="###"><img src="../../assets/img/title.jpeg" alt=""></a>-->
              <!--<a href="###"><img src="../../assets/img/title.jpeg" alt=""></a>-->
            <!--</div>-->
          </div>

        </div>
        <div class="book-nav">
          <router-link :to="'/detail/bookIntro/'+bookDetail.book.bid">书籍简介</router-link>
          <router-link :to="'/detail/directory/'+bookDetail.book.bid">目录（{{bookDetail.book.chapterCount}}章）</router-link>
        </div>
        <div class="bookInfo-directory">
          <router-view ></router-view>
        </div>
      </div>
      <div class="loading" v-else>
        <div class="loading-container">
          <img src="../../assets/img/fy_loading.gif" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  import {BreadcrumbItem,Breadcrumb} from "iview"
  import AddCollect from "../../components/AddCollect/AddCollect"
  import {rankAdd} from "../../api"
    export default {
      data() {
        return {}
      },
      async  mounted(){
          let bid = this.$route.params.bid
          this.$store.dispatch("getBookDetail", {bid})
          await rankAdd(bid, "pv")
      },
      methods:{
        goReading(bid){
          if (this.bookDetail.book.latestChapter) {
            let routeData = this.$router.resolve({path: `/reading/${bid}`});
            window.open(routeData.href, '_blank')
          } else {
            window.alert("没有章节")
          }
        }
      },
      computed:{
        ...mapState(["bookDetail"])
      },
      components:{
        AddCollect,
        Breadcrumb,
        BreadcrumbItem
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
      font-size 12px
      .demo-breadcrumb-separator
        color #000
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
          width 191px
          height 256px
      .book-intro
        float left
        margin-left 30px
        .intro-left
          width 440px
          float left
          .book-author

            font-size 14px
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
            .type
              height 20px
              border-radius: 2.4px;
              border: solid 0.5px #4d8bee
              margin-right: 13px
              text-align center
              line-height 20px
              padding: 0 4px;
              color #4d8bee
            .comfort
              color #f3799c
              border: solid 0.5px #f3799c

          .words-num

            font-size: 14px;
            font-weight: 500;
            color #9b9b9b
            margin 12px 0 16px
            span

              font-size: 20px;
              font-weight: 500;
              color: rgba(0, 0, 0, 0.65);
          .update-new

            font-size: 14px;
            color rgba(0,0,0,.65)
            .update-info
              .update-title
                color #f3799c
              .update-time,.update-chapter,.chapter-name
                margin-right 5px
            .update-intro
              height 44px
              position: relative;
              overflow: hidden;
              line-height 1.7
              letter-spacing 1px
              .ellipsis
                position: absolute;
                bottom: 0;
                right: 0;
                color rgba(0,0,0,.25)
                padding-left: 40px;
                font-size 18px
                height 18px
                line-height 14px
                background: linear-gradient(to right, rgba(255, 255, 255, 0), #fff 55%);
          .read-collect
            margin-top 18px
            .free-read
              width: 104px;
              height: 38px;
              border-radius: 4px;
              background-color: #4d8bee;
              margin-right 20px
              color #fff
              font-size 14px
              &:last-child
                background-color: #fff;
                color #4d8bee
                border 1px solid #4d8bee
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

        font-size: 18px;
        color rgba(0,0,0,.65)
        padding-bottom 3px
      .router-link-active
        border-bottom 3px solid #4d8bee
        color #4d8bee
    .bookInfo-directory
      margin-top 20px
  .loading
    width 100%
    .loading-container
      width 990px
      margin 20px auto
      background #fff
      height 434px
      text-align center
      line-height 434px
      img
        width 200px
        vertical-align middle
</style>
