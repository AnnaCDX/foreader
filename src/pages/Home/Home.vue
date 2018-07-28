<template>
  <div>
    <div class="main" >
      <div class="body" v-for="(item,index) in homeInfo" :key="index">
        <!--over-->
        <div class="recommend back-color marginTop" v-if="item.template===1">
          <div class="rcmd-left">
            <div class="left-container">
              <div class="banner swiper-container" >
                <div class="banner-wrapper swiper-wrapper">
                  <div class="banner-slide swiper-slide" v-for="(per,index) in item.data.slice(0,3)" :key="index">
                    <a href="javascript:;" @click="goDetail(per.webUrl.slice(-8))">
                      <img :src="per.poster">
                    </a>
                  </div>
                </div>
                <div class="swiper-pagination">
                </div>
              </div>
              <div class="ct-book-name" >
                <a href="javascript:;" class="ct-book-tag" v-for="(each,inde) in item.data.slice(0,3)" :class="{active:num==inde+1 || num == inde+4}" :key="inde" @click="goDetail(each.webUrl.slice(-8))">{{each.title}}</a>
              </div>
              <div class="ct-book-content" v-if="item.data[num-1]"><span>{{item.data[num-1].content}}</span><p>{{item.data[num-1].extra}}</p></div>

            </div>
          </div>

          <div class="rcmd-right">
            <div class="right-container">
              <ul>
                <li v-for="(per,index) in item.data.slice(3)" :key="index">
                  <a href="javascript:;" @click="goDetail(per.webUrl.slice(-8))"><img :src="per.poster" alt=""></a>
                  <div class="book-info">
                    <p class="name-type"><a @click="goDetail(per.webUrl.slice(-8))" class="name">{{per.title}}</a><a class="type" to="/type">类型</a></p>
                    <span class="author-name">{{per.content}}</span>
                    <p class="simple-intro">{{per.extra}}</p>
                  </div>
                </li>

              </ul>
              <div class="notice">
                <i class="icon iconfont icon-sousuo"></i>
                <div class="want-articles">
                  <p class="ad-title">
                    <router-link to="/newFashion">新风尚征文大赛</router-link>
                    <router-link to="/glory" class="list-left">王者荣耀新赛季征文</router-link>
                  </p>
                  <p class="ad-content">
                    <router-link to="/toBeAuthor">白金神作，霸气来袭成为作者</router-link>
                    <router-link to="/contributeDeclare" class="list-left">作者投稿说明</router-link>
                  </p>
                  <p class="ad-content">
                    <router-link to="/fastUpdate">作者投稿说明</router-link>
                    <router-link to="/fastUpdate" class="list-left">作者投稿说明</router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--类型不可点，作者不可点-->
        <div class="strong-recommend back-color marginTop" v-else-if="item.template===2">
          <div class="strong-container">
            <div class="strong-left">
              <ModuleTitle :cls="'icon-sousuo'" :title="item.data[0].title"></ModuleTitle>
              <ul>
                <LittleList v-for="(per,index) in item.data[0].list" :key="index" :per="per"></LittleList>
              </ul>
            </div>
            <div class="strong-right">
              <ModuleTitle :cls="'icon-sousuo'" :title="item.data[1].title"></ModuleTitle>
              <div class="swiper-list">
                <div class="is-swiper">
                  <div class="sl-container swiper-container">
                    <div class="sl-wrapper swiper-wrapper">
                      <div class="sl-slide swiper-slide" v-for="(per,index) in item.data[1].list.slice(0,5)" :key="index">
                        <router-link to="/detail">
                          <img :src="per.poster" alt="">
                        </router-link>
                      </div>

                    </div>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>
                  </div>
                </div>
                <div class="is-list">
                  <div class="list-item " v-for="(per,index) in item.data[1].list.slice(0,5)" :class="{'list-item-active':index+3===index1 || index+8===index1}" @click="gotoDetail(per)">
                    <div class="item-header"><a href="javascript:;" @click="gotoDetail(book)">{{per.title}}</a></div>
                    <div class="item-content">
                      <span v-for="(each,index) in per.authors" :key="index">{{each}}</span>
                      <p>{{per.recDesc}} <router-link to="/read">阅读全部</router-link></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="productive marginTop" v-else-if="index==1"></div>
        <div class="kindsOf-list back-color marginTop" v-else-if="item.template===3">
          <WorkList v-for="(per,ind) in item.data" :key="ind" :per = 'per'></WorkList>
        </div>
        <div class="three-pic back-color marginTop" v-else-if="item.template===4">
          <a href="javascript:;" class="pic" v-for="(book,index) in item.data" :key="index" @click="goDetail(book.bid)"><img :src="book.poster" alt=""></a>
        </div>
        <div class="activity back-color marginTop" v-else-if="item.template===5" >
          <a href="javascript:;" class="img-left" @click="gotoDetail()"><img src="../../assets/img/title.jpeg" alt=""></a>
          <div class="arrow-swiper">
            <div class="arrow-container swiper-container">
              <div class="arrow-wrapper swiper-wrapper">
                <div class="arrow-slide swiper-slide">
                  <div class="arrow-content" v-for="(per,index) in item.data" :key="index">
                    <a href="javascript:;" class="arrow-img"><img :src="per.poster" alt=""></a>
                    <p class="arrow-title"><a href="javascript:;">{{per.title}}</a></p>
                    <p class="isPay">不知道</p>
                  </div>

                </div>
              </div>
              <!-- 如果需要导航按钮 -->
              <div class="arrow-button swiper-button-prev"></div>
              <div class="arrow-button swiper-button-next"></div>

            </div>
          </div>
        </div>
       <template v-else-if="item.template===6">
         <FemaleMagic slot-scope="item">
           <div class="col-right" slot="right">
             <LittleList v-for="(per,index) in item.data" :key="index" :per="per"></LittleList>
           </div>
         </FemaleMagic>
         <FemaleMagic slot-scope="item">
           <div class="magic-col-right" slot="right">
             <WorkListItem v-for="(per,index) in shuju1"  @click="goDetail(index)" :key="index" :index="index"></WorkListItem>
           </div>
         </FemaleMagic>
       </template>
        <div class="update-list back-color marginTop" v-else-if="item.template===7">
          <ModuleTitle :cls="'icon-sousuo'" :title="'更新列表'"></ModuleTitle>
          <div class="update-list-body">
            <div class="list-body-left">
              <UpdateItem v-for="(per,index) in shuju4" :key="index"></UpdateItem>
            </div>
            <UpdateRightItem v-for="(per,index) in shuju5" :key="index"></UpdateRightItem>
          </div>
        </div>
        <div class="footer back-color marginTop" v-else-if="item.template==7" >
          footer
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import ModuleTitle from '../../components/ModuleTitle/ModuleTitle'
  import LittleList from '../../components/LittleList/LittleList'
  import FemaleMagic from '../../components/FemaleMagic/FemaleMagic'
  import WorkList from '../../components/WorkList/WorkList'
  import WorkListItem from '../../components/WorkListItem/WorkListItem'
  import UpdateItem from '../../components/UpdateItem/UpdateItem'
  import UpdateRightItem from '../../components/UpdateRightItem/UpdateRightItem'
  import {mapState} from "vuex"
    export default {
      mounted(){
        this.$store.dispatch("getHomeInfo")

      },
      watch:{
        homeInfo(value){
          let that = this;
          this.$nextTick(() => {
            let mySwiper = new Swiper('.banner.swiper-container', {
              autoplay: {
                delay: 2000,
                stopOnLastSlide: false,
                disableOnInteraction: false
              },
              pagination: {
                el: '.swiper-pagination',
                clickable :true
              },
              loop: true,
              on: {
                slideChangeTransitionStart: function(){
                  that.num = this.activeIndex

                }},
            })
            let mySwiper1 =new Swiper('.sl-container.swiper-container',{
              autoplay: {
                delay: 2000,
                stopOnLastSlide: false,
                disableOnInteraction: false
              },
              pagination: {
                el: '.swiper-pagination',
                clickable :true
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
            })
            let mySwiper2 = new Swiper('.arrow-container.swiper-container', {
              direction: 'horizontal',
              loop: true,
              // 如果需要前进后退按钮
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            })
          });

        }
      },

      computed:{
        ...mapState(["homeInfo"])
      },
      methods:{
        goDetail(bid){
          let routeData = this.$router.resolve({ path: `/detail/bookIntro/${bid}`});
          window.open(routeData.href, '_blank')
        },
        gotoDetail(per){
          //将数据存好传递给详情页
        this.book = per
         //详情页组件显示
         //  this.$ref.datail.toggleShow()
        },

      },
      data(){
        return {
          num:1,
          index1:3,
          value2:0,
          shuju1:[1,2,3,4,5,6,7,8,9,10],
          shuju:[1,2,3,4,5],
          shuju3:[1,2,3,4,5,6,7,8,9,10,1,1,1],
          shuju2:[1,2,3,4],
          shuju4:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
          shuju5:[1,1,1],
          book:{}
        }
      },
      components:{
        ModuleTitle,
        LittleList,
        FemaleMagic,
        WorkList,
        WorkListItem,
        UpdateItem,
        UpdateRightItem
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/style/mixin.styl'
.main
  width: 100%
  .body
    width:990px
    margin: 0 auto
    .marginTop
      margin-top 20px
    .back-color
      background #ffffff
    .recommend
      height:434px
      margin-bottom 10px 0
      .rcmd-left,.rcmd-right
        float: left
      .rcmd-left
        width:430px
        margin:20px
        .left-container
          position: relative
          .banner
            height:274px
            .banner-wrapper
              .banner-slide
                a
                  img
                    width:430px;
                    height 274px
                    object-fit fill
            .swiper-pagination
              bottom:40px

          .ct-book-name
              position: absolute
              bottom: 126px
              width:430px;
              height:34px;
              background:rgba(0,0,0,1);
              border-radius:4px 4px 0px 0px;
              opacity:0.85;
              font-size 0
              z-index: 199
              .ct-book-tag
                display inline-block
                width:33.333%;
                height:34px;
                line-height 34px
                font-size 14px
                background transparent
                border-radius:4px 4px 0px 0px;
                opacity:0.85;
                color: #fff
                vertical-align middle
                text-align center
              .active
                background:rgba(77,139,238,1);
          .ct-book-content
            bg-title(rgba(0,0,0,.65),14px)
            font-family:PingFangSC-Regular;
            line-height:28px
            width:100%;
            height:124px;
            padding:8px 10px
            span
              margin: 10px 0
              color: $authName_Intro
              line-height 12px
      .rcmd-right
        margin:20px 0
        margin-right:20px
        width:495px
        .right-container
          ul
            li
              &:first-child
                margin-bottom 32px
              img
                width:90px
                height 118px
              .book-info
                width 378px
                float right
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
                .simple-intro
                  line-height:22px
                  font-size:14px
                  height:44px
                  color: $authName_Intro
                  margin-top:28px

          .notice
            height: 96px
            background-color #f6f8fc
            margin-top 20px
            i
              margin:0 25px
              font-size 32px
            .want-articles
              margin: 18px 0 14px
              display inline-block
              a
                display inline-block
                width:156px
              .list-left
                margin-left:70px
              .ad-top
                margin-bottom 10px
                a
                  color #4d8bee
                  font-size:14px
              .ad-content
                margin: 4px 0
                a
                  color rgba(0,0,0,.75)
                  font-size 12px
                  line-height 12px
    .strong-recommend
      height:382px
      padding:20px
      .strong-container
        width:100%
        .strong-left
          width:224px
          float left




        .strong-right
          float: right
          width:654px
          .swiper-list
            .is-swiper
              display inline-block
              width:460px
              .sl-container
                .sl-wrapper
                  .sl-slide
                    a
                      img
                        width:160px
                        height:215px
            .is-list
              background-color #f6f8fc
              width:184px
              height:292px
              float: right
              .list-item
                border-bottom 1px solid #e8e8e8
                padding:0 10px
                .item-header
                  height:34px
                  line-height 34px
                  font-size:14px
                  a
                    color: rgba(0,0,0,.85)
                .item-content
                  height: 0
                  overflow: hidden
                  span
                    font-size 12px
                    color: $authName_Intro
                  p
                    font-size 12px
                    position relative
                    line-height: 20px
                    color: rgba(0,0,0,.65)
                    margin-top 24px
                    a
                      position absolute
                      right: 8px
                      bottom: 0
                      color: #f3799c
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


    .productive
      height:100px
      background url("../../assets/img/title.jpeg")
      background-repeat no-repeat
      background-size 100% 100%
    .kindsOf-list
      height:460px
      .kindsOf-listItem
        margin: 24px 29px 24px 12px;
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
      padding:20px 24px
      .img-left
        display inline-block
        height: 175px
        margin-right: 25px
        img
          width:115px
          height:175px
      .arrow-swiper
        width:798px
        display inline-block
        .arrow-container
          .arrow-wrapper
            .arrow-slide
              padding:0 40px
              .arrow-content
                margin: 0 9px
                display: inline-block
                .arrow-img
                  img
                    width: 98px;
                    height: 128px;
                    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.45);
                .arrow-title
                  text-align center
                  a
                    color: #9b9b9b
                    font-size 14px
                .isPay
                  text-align center
                  color #e94e71
                  line-height 14px
          .arrow-button
            width:26px
            height:28px
    .update-list
      padding:24px 11px 5px
      .update-list-body
        overflow hidden
        .list-body-left
          float left

    .footer
      width: 990px;
      height: 255px;
      background-color: #f5f5f5;
      text-align center
      line-height 255px
      font-size 36px
</style>
