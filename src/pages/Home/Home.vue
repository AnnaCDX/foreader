<template>
  <keep-alive>
    <div class="outer">
      <div class="main padding-top-20" v-if="homeInfo[0]">
        <div class="body " v-for="(item,index) in homeInfo" :key="index">
          <!--over-->
          <div class="recommend back-color " v-if="item.template===1">
            <div class="rcmd-left">
              <div class="left-container">

                <div class="banner swiper-container" >
                  <div class="banner-wrapper swiper-wrapper">
                    <div class="banner-slide swiper-slide" v-for="(per,index) in item.data.slice(0,3)" :key="index">
                      <a href="javascript:;" @click="goDetail(per.webUrl.slice(-8))">
                        <img v-lazy="per.poster">
                      </a>
                    </div>
                  </div>
                  <div class="pag-banner">
                    <!--<div class="pb-item" v-for="(per,index) in item.data.slice(0,3)" :key="index" :class="{'pb-item-active':num==index+1 || num == index+4}"></div>-->

                  </div>
                </div>
                <div class="ct-book-name swiper-container">
                  <div class="ct swiper-wrapper">
                    <div class="ct-slide swiper-slide" v-for="(each,inde) in item.data.slice(0,3)" :key="inde" >
                      <a href="javascript:;" class="ct-book-tag" :class="{active:num==inde+1 || num == inde+4}" >
                        <span>{{each.title}}</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="ct-book-content" v-if="item.data[num-1]"><span>{{item.data[num-1].content}}</span><p>{{item.data[num-1].extra}}</p></div>

              </div>
            </div>

            <div class="rcmd-right">
              <div class="right-container">
                <ul>
                  <li v-for="(per,index) in item.data.slice(3)" :key="index">
                    <a href="javascript:;" @click="goDetail(per.webUrl.slice(-8))"><img v-lazy="per.poster" alt=""></a>
                    <div class="book-info">
                      <p class="name-type"><a @click="goDetail(per.webUrl.slice(-8))" class="name">{{per.title}}</a><a class="type" to="/type"></a></p>
                      <span class="author-name">{{per.content}}</span>
                      <p class="simple-intro">{{per.extra}}</p>
                    </div>
                  </li>

                </ul>
                <div class="notice">
                  <div class="notice-main">
                    <a href="javascript:;" class="notice-item" @click="showDownloadCode('ios')">
                      <img src="../../assets/img/web/home/iphone.png" alt="">
                      <div class="notice-word">
                        <p class="for-chinese">速更小说</p>
                        <p class=for-chinese>for iPhone</p>
                      </div>
                    </a>
                    <a href="javascript:;" class="notice-item" @click="showDownloadCode('android')">
                      <img src="../../assets/img/web/home/android.png" alt="">
                      <div class="notice-word">
                        <p class="for-chinese">速更小说</p>
                        <p class="for-chinese">for Android</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--类型不可点，作者不可点-->
          <div class="strong-recommend back-color marginTop" v-else-if="item.template===2">
            <div class="strong-container">
              <div class="strong-left">
                <ModuleTitle :title="item.data[0].title"></ModuleTitle><!--:cls="'icon-sousuo'"-->
                <ul>
                  <LittleList v-for="(per,index) in item.data[0].list" :key="index" :per="per" :go-detail="goDetail"></LittleList>
                </ul>
              </div>
              <div class="strong-right">
                <ModuleTitle  :title="item.data[1].title"></ModuleTitle><!--:cls="'icon-sousuo'"-->
                <div class="swiper-list">
                  <div class="is-swiper">
                    <div class="sl-container swiper-container">
                      <div class="sl-wrapper swiper-wrapper">
                        <div class="sl-slide swiper-slide" v-for="(per,index) in item.data[1].list.slice(0,5)" :key="index">
                          <a href="javascript:;" @click="goDetail(per.bid)">
                            <img :src="per.poster" alt="">
                          </a>
                        </div>

                      </div>

                    </div>
                  </div>
                  <div class="is-list">
                    <div class="list-item " v-for="(per,index) in item.data[1].list.slice(0,5)" :class="{'list-item-active':index+3===index1 || index+8===index1}">
                      <div class="item-header"><a href="javascript:;" @click="goDetail(per.bid)">{{per.title}}</a></div>
                      <div class="item-content">
                        <span v-for="(each,index) in per.authors" :key="index">{{each}}</span>
                        <p class="main-desc">
                          {{per.description}}
                          <a href="javascript:;" class="ellipsis" @click="goDetail(per.bid)">...</a>

                        </p>
                        <p class="last-desc"><span></span><a href="javascript:;" @click="goReading(per.bid)">阅读全部</a></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pag-container">
                  <div class="each-item" v-for="(item,index) in item.data[1].list.slice(0,5)" :class="{'each-item-active':index+3===index1 || index+8===index1}">
                    <div class="each-inner"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <template v-else-if="item.template===3" slot-scope="item">
            <!--<div class="productive marginTop"></div>-->
            <div class="kindsOf-list back-color marginTop" >
              <WorkList v-for="(per,ind) in item.data" :key="ind" :per = 'per'></WorkList>
            </div>
          </template>
          <div class="three-pic back-color marginTop" v-else-if="item.template===4">
            <a href="javascript:;" class="pic" v-for="(book,index) in item.data" :key="index" @click="goDetail(book.bid)"><img v-lazy="book.poster" alt=""></a>
          </div>
          <div class="activity back-color marginTop" v-else-if="item.template===5" >
            <a href="javascript:;" class="img-left"><img src="../../assets/img/web/home/xianshimianfei.png" alt=""></a>
            <div class="arrow-container">
              <!--<div class="arrow-container swiper-container">-->
                <!--<div class="arrow-wrapper swiper-wrapper">-->
                  <!--<div class="arrow-slide swiper-slide">-->
                    <!--<div class="arrow-content" v-for="(per,index) in item.data.slice(0,6)" :key="index">-->
                      <!--<a href="javascript:;" class="arrow-img" @click="goDetail(per.bid)" :title="per.title"><img :src="per.poster" alt=""></a>-->
                      <!--<p class="arrow-title" @click="goDetail(per.bid)"><a href="javascript:;" :title="per.title">{{per.title}}</a></p>-->
                      <!--<p class="isPay">免费</p>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
                <!--&lt;!&ndash; 如果需要导航按钮 &ndash;&gt;-->
                <!--&lt;!&ndash;<div class="arrow-button swiper-button-prev" v-if=""></div>&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="arrow-button swiper-button-next" v-if=""></div>&ndash;&gt;-->

              <!--</div>-->
              <div class="arrow-wrapper swiper-wrapper">
                <div class="arrow-slide swiper-slide">
                  <div class="arrow-content" v-for="(per,index) in item.data.slice(0,6)" :key="index">
                    <a href="javascript:;" class="arrow-img" @click="goDetail(per.bid)" :title="per.title"><img :src="per.poster" alt=""></a>
                    <p class="arrow-title" @click="goDetail(per.bid)"><a href="javascript:;" :title="per.title">{{per.title}}</a></p>
                    <p class="isPay">免费</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <template v-else-if="item.template===6" slot-scope="item">
            <FemaleMagic :item="item" :title="item.data[0].title">
              <div class="col-right" slot="right" >
                <LittleList v-for="(per,index) in item.data[0].list.slice(5,12)" :key="index" :per="per" :goDetail="goDetail" ></LittleList>
              </div>
            </FemaleMagic>

            <!--<FemaleMagic :item="item" :title="item.data[0].title">-->
              <!--<div class="magic-col-right" slot="right">-->
                <!--<WorkListItem v-for="(each,index) in item.data[0].list"  @click="goDetail(each.bid)" :key="index" :index="index" :each="each" ></WorkListItem>-->
              <!--</div>-->
            <!--</FemaleMagic>-->
          </template>

          <!--completely undone-->
          <template v-else-if="item.template===7" slot-scope="item">
            <div class="update-list back-color marginTop">
              <ModuleTitle :cls="'icon-sousuo'" :title="'更新列表'"></ModuleTitle>
              <div class="update-list-body">
                <div class="list-body-left">
                  <UpdateItem v-for="(per,index) in item.data" :key="index" v-bind:per="per"></UpdateItem>
                </div>
                <UpdateRightItem v-for="(per,index) in item.data.slice(-3)" :key="index" v-bind:per="per"></UpdateRightItem>
              </div>
            </div>
          </template>


        </div>

      </div>
      <div class="loading" v-else>
        <div class="loading-container">
          <img src="../../assets/img/fy_loading.gif" alt="">
        </div>
      </div>


      <div class="right-side-floating">
          <div class="floating-fix-block float-download">
              <img src="../../assets/img/web/home/ic_phone.png">
              <p>手机端</p>
          </div>
          <a href="#top" class="floating-fix-block float-to-top">
              <img src="../../assets/img/web/home/ic_back_to_top.png">
              <p>返回顶部</p>
          </a>
      </div>


      <div class="footer  marginTop">
        <p class="friend-title">友情链接</p>
        <div class="all-friends">
          <a href="http://www.ireader.com/">掌阅书城</a>
          <a href="http://www.quyuewang.cn/" title="趣阅中文网" target="_blank">趣阅中文网</a>
          <a href="http://www.hongshu.com/" title="红薯中文网" target="_blank">红薯中文网</a>
          <a href="http://www.iciyuan.com/" title="i次元轻小说" target="_blank">i次元轻小说</a>
          <a href="http://www.pinyuew.com/" title="品阅中文网" target="_blank">品阅中文网</a>
          <a href="http://www.zhangyue.com" title="品阅中文网" target="_blank">掌阅科技</a>
          <a href="http://www.shenqiwang.cn" title="品阅中文网" target="_blank">神起中文网</a>

        </div>
        <div class="center">
          <router-link to="/helpCenter" >帮助中心</router-link>
          <router-link to="/privacy">隐私策略</router-link>
          <router-link to="/aggreement">使用协议</router-link>
        </div>
        <p class="copy-right ">CopyRight &copy; 2018 foreader.com.cn All Rights Reserved</p>
        <div class="copy-img">
          <!--<img src="../../assets/img/title.jpeg" alt="">-->
          <!--<img src="../../assets/img/title.jpeg" alt="">-->
          <!--<img src="../../assets/img/title.jpeg" alt="">-->
        </div>
      </div>
    </div>
  </keep-alive>
</template>

<script>
  import Vue from 'vue'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {Spin,Col,Icon} from "iview"
  import ModuleTitle from '../../components/ModuleTitle/ModuleTitle'
  import LittleList from '../../components/LittleList/LittleList'
  import FemaleMagic from '../../components/FemaleMagic/FemaleMagic'
  import WorkList from '../../components/WorkList/WorkList'
  import WorkListItem from '../../components/WorkListItem/WorkListItem'
  import UpdateItem from '../../components/UpdateItem/UpdateItem'
  import UpdateRightItem from '../../components/UpdateRightItem/UpdateRightItem'
  import Loading from "../../components/Loading/Loading"
  import {mapState} from "vuex"
  import VueLazyload from 'vue-lazyload'
  import {reqHomeInfo} from "../../api";
  Vue.use(VueLazyload);

  export default {
      data(){
        return {
          pagNum:0,
          num:1,
          index1:3,
          value2:0,
          shuju5:[1,1,1],
          book:{},
          homeInfo:[]
        }
      },
      mounted(){
        let that = this;
        // this.$store.dispatch("getHomeInfo",{limit,offset})
          reqHomeInfo().then(function (successMessage) {
            that.homeInfo = successMessage
          }).catch(function (successMessage) {

          })

      },
      watch:{
        homeInfo(value){
          let that = this;
          this.$nextTick(() => {


            let mySwiper1 = new Swiper('.sl-container.swiper-container',{
              autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false
              },
              loop: true,
              effect : 'coverflow',
              slidesPerView: 3,
              centeredSlides: true,
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 400,
                modifier: 1,
                slideShadows : true
              },
              on: {
                slideChangeTransitionStart: function(){
                  that.index1 = this.activeIndex
                }}
            });
            let mySwiper = new Swiper('.banner.swiper-container', {
              autoplay: {
                delay: 2000,
                stopOnLastSlide: false,
                disableOnInteraction: false
              },
              pagination: {
                el: '.swiper-pagination',
                clickable :true,
                bulletActiveClass: 'my-bullet-active',
              },
              loop: true,
              on: {
                slideChangeTransitionStart: function(){
                  that.num = this.activeIndex

                }},
            })
            let mySwiper2 = new Swiper(".ct-book-name.swiper-container",{
            })
            mySwiper.params.control = mySwiper2
            mySwiper2.params.control = mySwiper
          });

        }
      },

      computed:{
        // ...mapState(["homeInfo"])
      },
      methods:{
        goDetail(bid){
          let routeData = this.$router.resolve({ path: `/detail/bookIntro/${bid}`});
          window.open(routeData.href, '_blank')
        },
        goReading(bid){
          let routeData = this.$router.resolve({ path: `/reading/${bid}`});
          window.open(routeData.href, '_blank')
        },
        showDownloadCode(platform) {
          if (platform == "ios") {

          } else {

          }
        }
      },
      components:{
        ModuleTitle,
        LittleList,
        FemaleMagic,
        WorkList,
        WorkListItem,
        UpdateItem,
        UpdateRightItem,
        Loading
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/style/mixin.styl'
img
  object-fit cover;
  .demo-spin-col{
    height: 100px;
    position: relative;
    border: 1px solid #eee;

  }
.padding-top-20
  padding-top 20px
.main
  width: 100%
  background #f8f8f8
  .body
    width:990px
    margin: 0 auto
    margin-top 20px
    .marginTop
      margin-top 20px
    .back-color
      background #ffffff
    .recommend
      height:428px
      margin-bottom 10px 0
      .rcmd-left,.rcmd-right
        float: left
      .rcmd-left
        width:430px
        margin:20px
        .left-container
          position: relative
          .banner
            height:263px
            width 434px
            position relative
            .banner-wrapper
              .banner-slide
                a
                  img
                    width:100%;
                    height 100%
                    object-fit contain
                    box-shadow none
            .pag-banner
              position absolute
              bottom 40px
              left 190px
              z-index 100
              overflow hidden
              .pb-item
                float: left
                margin-right 10px
                width 10px
                height 10px
                background-color rgba(255,255,255,.65)
                border-radius 50%
              .pb-item-active
                background-color #f3799c
                width 20px
                border-radius 5px
          .ct-book-name
              position: absolute
              bottom: 124px
              width:430px;
              height:34px;
              font-size 0
              z-index: 199
              .ct
                .ct-slide
                  width 33.3333%
                  background rgba(0,0,0,.85)
                  border-radius 0
                  &:first-child
                    border-radius 4px 0 0 0
                  &:last-child
                    border-radius 0 4px 0 0
                  .ct-book-tag
                    display inline-block
                    width 100%
                    height:34px;
                    line-height 34px
                    font-size 14px
                    opacity 0.85
                    color: #fff
                    vertical-align middle
                    text-align center
                    span
                      max-width 120px
                      text-overflow ellipsis
                  .active
                    background:#4d8bee;
                    opacity 1
                    border-radius 4px 4px 0 0

          /*.ct-book-tag
            display inline-block
            width:33.333%;
            height:34px;
            line-height 34px
            font-size 14px
            opacity 0.85
            border-radius 0
            background rgba(0,0,0,.85)
            color: #fff
            vertical-align middle
            text-align center
          span
            max-width 120px
            text-overflow ellipsis

          .active
            background:#4d8bee;
            opacity 1*/
          .ct-book-content
            bg-title(rgba(0,0,0,.65),14px)
            line-height:28px
            width:100%;
            height:124px;
            padding:8px 10px
            span
              margin: 10px 0
              color: $authName_Intro
              line-height 12px
            p
              width 420px
              height 84px
              overflow hidden
      .rcmd-right
        margin:20px 0
        margin-right:20px
        width:495px
        .right-container
          ul
            li
              &:first-child
                margin-bottom 14px
              img
                width 88px
                height 121px
                box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.35);
              .book-info
                width 378px
                float right
                overflow hidden
                margin-right 8px
                text-overflow: ellipsis;
                .name-type
                  margin-bottom 5px
                  .name
                    font-size 16px
                    color: rgba(0,0,0,.85)
                    font-family:PingFangSC-Medium
                  .type
                    float: right
                .author-name
                  color: $authName_Intro
                  font-size 12px
                  margin-top 4px
                .simple-intro
                  line-height:22px
                  font-size:14px
                  height:66px
                  color: $authName_Intro
                  margin-top:9px

          .notice
            position relative
            height: 96px
            width: 495px
            margin-top 22px
            background url("../../assets/img/web/home/download_app_banner.png")
            background-repeat no-repeat
            background-size 100% 100%
            .notice-main
              position absolute
              bottom:10px
              right 0
              .notice-item
                width 114px
                height 38px
                background #fff
                margin-right 20px
                border-radius 4px
                img
                  width 20px
                  height 20px
                  margin-top 8px
                  margin-left 10px
                .notice-word
                  float right
                  height 38px
                  width 60%
                  margin-right 5px
                  .for-chinese
                    font-size 12px
                    color #4a4a4a
                    font-family "PingFang SC"
    .strong-recommend
      min-height:382px
      padding:5px 20px
      .strong-container
        display flex
        flex-direction row
        justify-content space-between
        height auto
        width:100%
        .strong-left
          width:224px
          margin 0
          ul
            li
              height 42px
              padding-top 10px
        .strong-right
          margin 0
          position relative
          width:654px
          .swiper-list
            .is-swiper
              margin-top 18px
              display inline-block
              width:460px
              .sl-container
                .sl-wrapper
                  .sl-slide
                    a
                      img
                        width:160px
                        height:215px
                        box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.35)
            .is-list
              background-color #f6f8fc
              width:184px
              height:307px
              float: right
              margin-top 13px
              .list-item
                border-bottom 1px solid #e8e8e8
                padding:0 10px
                .item-header
                  height:38px
                  line-height 38px
                  font-size:14px
                  a
                    color: rgba(0,0,0,.85)
                    text-overflow ellipsis
                    overflow hidden
                    white-space nowrap
                    width 164px
                .item-content
                  height: 0
                  overflow: hidden
                  span
                    font-size 12px
                    color: $authName_Intro
                  .main-desc
                    font-size 12px
                    color: rgba(0,0,0,.65)
                    margin-top 14px
                    width 163px
                    height 35px
                    position: relative;
                    overflow: hidden;
                    line-height 1.5
                    .ellipsis
                      position: absolute;
                      bottom: 0;
                      right: 0;
                      color rgba(0,0,0,.25)
                      padding-left: 40px;
                      font-size 18px
                      height 18px
                      line-height 14px
                      background: linear-gradient(to right, rgba(255, 255, 255, 0), #f6f8fc 55%);
                  .last-desc
                    position relative
                    a
                      position absolute
                      bottom -10px
                      right 0
                      color: #4D8BEE
                &:last-child
                  border-bottom none
              .list-item-active
                height:137px
                .item-header
                  margin-top:10px
                  a
                    color: #4d8bee
                .item-content
                  height:114px
                  transition 1s


          .pag-container
            position absolute
            bottom 35px
            left 190px
            width 100px
            height 10px
            background rgba(255, 255, 255, 0)
            .each-item
              position relative
              float left
              width 10px
              height 10px
              background #fff
              border-radius 50%
              margin-right 10px
              .each-inner
                position absolute
                top 2px
                left 2px
                border-radius 50%
                width 6px
                height 6px
                background #dedede
            .each-item-active
              background #ff3a6f
              .each-inner
                background #fff
    /*.productive*/
      /*height:100px*/
      /*background url("../../assets/img/title.jpeg")*/
      /*background-repeat no-repeat*/
      /*background-size 100% 100%*/
    .kindsOf-list
      height:522px
      padding: 0 20px
      .kindsOf-listItem
        margin: 24px 42px 24px 0;
        &:last-child
          margin-right 0
    .three-pic
      height: 235px
      line-height 235px
      text-align center
      .pic
        vertical-align middle
        height: 191px
        display inline-block
        margin-left 11px
        margin-right: 12px
        img
          width:300px
          height:191px

    .activity
      position: relative
      padding:0px
      display flex
      width 100%
      flex-direction row
      .img-left
        display inline-block
        width:142px
        height:215px
        img
          width:142px
          height:215px
      .arrow-container
        height:215px
        overflow hidden
        .arrow-wrapper
          .arrow-slide
            padding:0 px
            &:first-child
              margin-left 20px
            .arrow-content
              margin: 19px 18px
              display: inline-block
              .arrow-img
                img
                  width: 94px;
                  height: 126px;
                  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.45);
              .arrow-title
                text-align center
                width 98px
                text-overflow ellipsis
                white-space nowrap
                overflow hidden
                margin-top 6px
                a
                  color: #9b9b9b
                  font-size 14px
              .isPay
                text-align center
                color #e94e71
                line-height 14px
                margin-top 6px
                font-size 14px
                font-weight 500
        .arrow-button
          width:26px
          height:26px

        .swiper-button-prev
          background url("../../assets/img/web/home/last.png")
          background-size 26px 26px
          background-repeat no-repeat
        .swiper-button-next
          background url("../../assets/img/web/home/next.png")
          background-size 26px 26px
          background-repeat no-repeat
    .update-list
      padding:24px 11px 5px
      .update-list-body
        overflow hidden
        .list-body-left
          float left

.footer
  width: 990px;
  display block
  margin-left auto
  margin-right auto
  .friend-title
    color #000
    font-family "PingFang SC"
    font-weight 600
    font-size 14px
    padding-top 30px
    padding-left 20px
  .all-friends
    margin-top 6px
    width 720px
    a
      margin-left 20px
      font-size 14px
      color rgba(0,0,0,.85)
  .copy-right
    margin 0
    margin-left auto
    margin-right auto
    padding-bottom 30px
    width 720px
    color #d9d9d9
    text-align center
  .center
    width 720px
    margin 30px auto
    text-align center
    a
      color #b9b9b9
      padding-left 20px
      padding-right 20px
  .copy-img
    text-align center
    img
      width 100px
      height 50px
      margin-right 20px

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
.right-side-floating
  position fixed
  right 24px
  top 50%
  display flex
  flex-direction column
  .float-download
    background: #F3799C;
  .float-to-top
    background: #4d8bee;
    margin-top 10px
  .floating-fix-block
    width 56px
    height 56px
    text-align center
    border-radius: 4px;
    img
      width 17px
      height 17px
      object-fit contain
      display block
      margin-top 7px
      margin-left auto
      margin-right auto
    p
      display block
      color white
      margin-top 7px
      margin-left auto
      margin-right auto
</style>
