<template>
    <div>
      <div class="comments-container">
        <div class="comments-main">
          <div class="comments-left">
            <Breadcrumb separator=">">
              <BreadcrumbItem to="/">首页</BreadcrumbItem>
              <BreadcrumbItem to="/components/breadcrumb">玄幻</BreadcrumbItem>
              <BreadcrumbItem to="/detail">重生最轻女帝</BreadcrumbItem>
              <BreadcrumbItem to="/comments">评论区</BreadcrumbItem>
            </Breadcrumb>
            <div class="write-comments">
              <p class="book-title">血染长生《评论区》</p>
              <div class="comments-input">
                <img src="../../assets/img/title.jpeg" alt="">
                <Input v-model="myComments" placeholder="我也来说一句" />
              </div>
              <button class="publish">发表评论</button>
            </div>
            <div class="comments-content">
              <p class="all-title">全部评论 <span>(18888)条</span></p>
              <div class="all-comments">
                  <ul>
                    <li class="comments-item" v-for="(item,index) in data[flag]">
                      <img src="../../assets/img/title.jpeg" alt="">
                      <div class="comment-info">
                        <p class="who-when"><span class="whose-comment">昵称昵称</span><span class="when-comment">34分钟前</span></p>
                        <div class="comment-content">
                          <p class="content-main">{{item.content}}</p>                         <!--<a href="javascript:;">展开全部</a>-->
                        </div>
                      </div>
                    </li>
                  </ul>
              </div>
              <PageControl :flag="this.flag" :pageTab="this.pageTab" :skip="this.skip" :prevNext="this.prevNext" :data="this.data"></PageControl>
            </div>
          </div>
          <div class="coments-right">
            <div class="right-top">
              <div class="top-body">
                <img src="../../assets/img/title.jpeg" alt="">
                <p>血染长生</p>
                <button class="collect-read collect">收藏本书</button>
                <button class="collect-read">开始阅读</button>
              </div>
            </div>
            <div class="right-bottom">
              <div class="bottom-body">
                <img src="../../assets/img/title.jpeg" alt="">
                <p >下载APP阅读</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import PageControl from "../PageControl/PageControl"
    export default {
        data() {
            return {
              myComments:"",
              flag:0,
              data:[
                [
                  {title:"aa",content:"作者辛苦了！送上鲜花，聊表心意作者辛苦，了送上，鲜花聊表心意作，者辛苦了送上鲜花聊表心 意作者辛苦了送上鲜花，聊表心意！作者辛苦了！送上鲜花，聊表心意！作者辛苦了！送上鲜花，聊表心意作者辛苦了！送上鲜花聊表心意！作者辛苦了！送上鲜花，聊表心意！作者辛苦了！送上鲜花，聊表心意作者辛苦了！送上鲜花…"},
                  {title:"aa",content:"作者辛苦了！送上鲜花，聊表心意作者辛苦，了送上，鲜花聊表心意作，者辛苦了送上鲜花聊表心 意作者辛苦了送上鲜花，聊表心意！作者辛苦了！送上鲜花，聊表心意！作者辛苦了！送上鲜花，聊表心意作者辛苦了！送上鲜花聊表心意！作者辛苦了！送上鲜花，聊表心意！作者辛苦了！送上鲜花，聊表心意作者辛苦了！送上鲜花…"},
                  {title:"aa",content:"作者辛苦了！送上鲜花，聊表心意作者辛苦，了送上，鲜花聊表心意作，者辛苦了送上鲜花聊表心 意作者辛苦了送上鲜花，聊表心意！作者辛苦了！送上鲜花，聊表心意！作者辛苦了！送上鲜花，聊表心意作者辛苦了！送上鲜花聊表心意！作者辛苦了！送上鲜花，聊表心意！作者辛苦了！送上鲜花，聊表心意作者辛苦了！送上鲜花…"}
                ],
                [
                  {title:"aa",content:"作者辛苦了！送上鲜花，聊表心意作者辛苦，了送上，鲜花聊表心意作，者辛苦了送上鲜花聊表心 意作者辛苦了送上鲜花，聊表心意！作者辛苦了！送上鲜花，聊表心意！作者辛苦了！送上鲜花，聊表心意作者辛苦了！送上鲜花聊表心意！作者辛苦了！送上鲜花，聊表心意！作者辛苦了！送上鲜花，聊表心意作者辛苦了！送上鲜花…"},
                  {title:"aa",content:"作者辛苦了！送上鲜花，聊表心意作者辛苦，了送上，鲜花聊表心意作，者辛苦了送上鲜花聊表心 意作者辛苦了送上鲜花，聊表心意！作者辛苦了！送上鲜花，聊表心意！作者辛苦了！送上鲜花，聊表心意作者辛苦了！送上鲜花聊表心意！作者辛苦了！送上鲜花，聊表心意！作者辛苦了！送上鲜花，聊表心意作者辛苦了！送上鲜花…"}
                ]
              ]
            }
        },
        methods:{
          pageTab(index){
            this.flag = index
          },
          skip(page){
            this.flag=page-1
          },
          prevNext(bool){
            if(bool===true){

              if(this.flag===0){
                return
              }
              this.flag--
            }else{

              if(this.flag===this.data.length-1){
                return
              }
              this.flag ++
            }

            console.log(bool)
          }
        },
        components:{
          PageControl
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.comments-container
  width 100%
  .comments-main
    width 990px
    margin 0 auto
    overflow hidden
    .comments-left
      width 710px
      float left
      .ivu-breadcrumb
        margin: 23px 0 20px 10px
      .write-comments
        padding 23px 43px
        background #fff

        overflow hidden
        .book-title
          width: 216px;
          height: 33px;
          font-family: PingFangSC;
          font-size: 24px;
          font-weight: 500;
          color: #4d8bee;
        .comments-input
          margin-top 37px
          img
            width 40px
            height 40px
            border-radius 50%
            object-fit cover
            vertical-align middle
            margin-right 10px
          .ivu-input-wrapper
            width 570px
        .publish
          width 104px
          height 38px
          background #4d8bee
          line-height 38px
          text-align center
          border-radius 4px
          float: right
          margin-top 14px
          color #fff
      .comments-content
        margin-top 20px
        background #fff
        .all-title
          padding-left 43px
          height 60px
          line-height 60px
          font-family: PingFangSC;
          font-size: 18px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.85);
          border-bottom 1px solid #e8e8e8
          span
            font-family: PingFangSC;
            font-size: 18px;
            line-height: 1.33;
            color: rgba(0, 0, 0, 0.65);
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
                    font-size 12px
                    line-height 24px

    .coments-right
      width 260px
      float right
      margin-top 65px
      .right-top
        background #fff
        padding 25px 0
        .top-body
          width 98px
          margin 0 auto
          img
            width 98px
            height 128px
            object-fit cover
          p
            font-family: PingFangSC;
            font-size: 16px;
            font-weight: 500;
            line-height: 1;
            color: rgba(0, 0, 0, 0.85);
            text-align center
          .collect-read
            margin-top 20px
            width 104px
            height 38px
            border 1px solid #4d8bee
            text-align center
            line-height 38px
            font-size 14px
            border-radius 4px
            &:last-child
              color #4d8bee
          .collect
            color #fff
            background #4d8bee



      .right-bottom
        margin-top 20px
        background #fff
        padding 22px 0
        .bottom-body
          width 170px
          margin 0 auto
          img
            width 170px
            height 170px
          p
            font-family: PingFangSC;
            font-size: 18px;
            line-height 1
            text-align: center;
            color: rgba(0, 0, 0, 0.65);
            margin-top 16px
</style>
