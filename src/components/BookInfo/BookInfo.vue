<template>
  <div>
    <div class="introduction">
      <div class="introduction-left">
          <div class="intro-content">
            <p >{{bookDetail.book.description}}</p>
            <!--v-for="(item,index) in bookDetail.book.description.split('，')" :key="index"-->
          </div>
          <!--<p class="update-info"><span class="update-title">最近更新：</span><span class="update-time">3小时前</span><span class="update-chapter">第一百七十五章</span><span class="chapter-name">城运会前的比赛</span></p>-->
      </div>
      <div class="introduction-right">
        <div class="avatar-name">
          <img v-lazy="bookDetail.book.mainAuthor.avatar" alt="">
          <p class="author-name" v-for="(item) in bookDetail.book.authors">{{item}}</p>
          <!--<p class="author-type">大神作家</p>-->
          <!--<p class="update-info"><span class="update-time">{{bookDetail.book.updatedFormated}}</span><span class="chapter-name">{{bookDetail.book.latestChapter.title}}</span></p>-->
          <!--&lt;!&ndash;<span class="update-chapter">第一百七十五章</span>&ndash;&gt;-->
        </div>
      </div>
    </div>
    <div class="others-like">
      <p class="like-title">喜欢这本书的人还喜欢</p>
      <div class="like-body">
        <div class="like-item" v-for="(item,index) in bookDetail.recommends" :key="index">
          <a href="javascript:;" @click="goDetail(item.bid)" :title="item.title"><img :src="item.poster" alt=""></a>
          <a class="like-book" @click="goDetail(item.bid)" :title="item.title">{{item.title}}</a>
          <p class="who-read">{{item.mainAuthor.name}}</p>
        </div>
      </div>
    </div>
    <div class="comments" v-if="bookDetail.comments">
      <p class="comment-title">书友评论({{bookDetail.comments.length}}条)
        <a href="javascript:;" class="want-comment" @click="goComments(bookDetail.book.bid)" >我要评论</a>
      </p>
      <div class="all-comments" v-if="bookDetail.comments.length">
        <ul>
          <li class="comments-item" v-for="(item,index) in bookDetail.comments" :key="index">
            <img v-lazy="item.user.avatar" alt="">
            <div class="comment-info">
              <p class="who-when"><span class="whose-comment">{{item.user.name}}</span><span class="when-comment">{{item.createdFormated}}</span></p>
              <div class="comment-content">
                <p class="content-main">{{item.content}}</p>                         <!--<a href="javascript:;">展开全部</a>-->
              </div>
            </div>
          </li>
        </ul>
        <div class="more-comments">
          <div class="more-click">
            <a href="javascript:;" @click="goComments(bookDetail.book.bid)">更多评论 ></a>
          </div>
        </div>
      </div>
      <div class="empty-collection" v-else>
        <div class="empty-main">
          <img src="../../assets/img/web/defaultLose/default_result.png" alt="">
          <p>暂无评论</p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  import Footer from "../Footer/Footer"
    export default {
        data() {
            return {
              jiade:[1,1,1,1,1,1]
            }
        },
      mounted(){

      },
      computed:{
        ...mapState(["bookDetail", "loginInfo"])
      },
      methods:{
        goComments(bid){
          let routeData = this.$router.resolve({path: `/comments/${bid}`});
          window.open(routeData.href, '_blank')
        },
        goDetail(bid){
          let routeData = this.$router.resolve({ path: `/detail/bookIntro/${bid}`});
          window.open(routeData.href, '_blank')
        },
      },
      components:{
        Footer
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.introduction
  overflow hidden
  .introduction-left
    width: 710px;
    height: 230px;
    border-radius: 4px;
    background-color: #ffffff;
    float: left
    padding 20px 0 23px 45px
    .intro-content
      width 440px
      p
        font-size 14px
        color rgba(0,0,0,.65)
        line-height 3
        display:-webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    .update-info
      .update-title
        color #f3799c
      .update-time,.update-chapter,.chapter-name
        margin-right 5px
  .introduction-right
    float: right
    width: 260px;
    height: 230px;
    border-radius: 4px;
    background-color: #ffffff;
    .avatar-name
      width: 100%
      height: 208px
      border-radius: 4px;
      text-align center
      padding-top: 41px;
      img
        border-radius 50%
        width: 100px
        height: 100px
      .author-name
        font-size 18px
        margin:15px 0 20px
        color rgba(0,0,0,.85)
      .update-info,.author-type
        width 190px
        margin 20px auto 0
        color #9b9b9b

.others-like
  background #fff
  margin-top 20px
  padding: 26px 0 36px 46px
  .like-title

    font-size: 24px;
    font-weight: 500;
    color rgba(0,0,0,.85)
  .like-body
    margin-top 27px
    overflow hidden
    .like-item
      float: left
      margin-right 53px
      width 104px
      a
        img
          width 101px
          height 136px
          box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.35);
      .like-book,.who-read

        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        text-align left
        margin 5px auto 0
      .like-book
        width: 96px;
        font-size: 16px;
        font-weight: 500;
        color rgba(0,0,0,.85)
      .who-read
        width: 100px;
        font-size: 14px;
        color #9b9b9b
      &:last-child
        margin-right none
.comments
  min-height 270px
  background #fff
  margin-top 20px
  .comment-title
    height 74px
    line-height 74px
    padding 0 40px

    font-size: 18px;
    font-weight: 500;
    color rgba(0,0,0,.85)
    border-bottom 1px solid #e8e8e8
    a
      margin-left 680px
      width: 104px;
      height: 38px;
      text-align center
      line-height 38px
      border-radius: 4px;
      background-color: #4d8bee;

      font-size: 14px;
      color #fff
  .empty-collection
    min-height 270px
    position relative
    .empty-main
      position absolute
      top: 0
      bottom 0
      left 0
      right 0
      text-align center
      width 308px
      height 150px
      margin auto
      img
        width 96px
        height 96px
        object-fit cover
        margin-bottom 25px
      p

        font-size: 18px;
        line-height: 1.33;
        color: #cccccc;

  .all-comments
    padding 0 43px 20px
    ul
      .comments-item
        overflow hidden
        padding 14px 0
        border-bottom 1px solid #e8e8e8
        img
          width 40px
          height 40px
          border-radius 50%
          object-fit cover
        .comment-info
          float: right
          width 94%
          .who-when
            font-size 12px
            color #9b9b9b
            overflow hidden
            .whose-comment
              float left
            .when-comment
              float right
          .comment-content
            width 570px
            /*height 96px*/
            position relative
            .content-main
              font-size 14px
              line-height 24px

    .more-comments
      margin-top 30px
      width 100%
      .more-click
        margin 0 auto
        width 494px
        height 44px
        background #f6f8fc
        border 1px solid #f6f8fc
        border-radius 4px
        text-align center
        line-height 44px
        a
          width 100%

</style>
