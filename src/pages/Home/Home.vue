<template>
  <div>
    <div class="main">
      <div class="body">
        <div class="recommend">
          <div class="rcmd-right">
            <h1>绝世神偷</h1>
            <p>俗话说：光剑贼吃肉，没见贼挨打。这话用在沉默身上正好翻了过来，作为子承父业的小偷，他是光挨打也没吃到肉，半年进了六次局子，这次更不得了，竟然大厅…</p>
            <div>
              <ul>
                <li><span class="rcmd-type">「玄幻」</span><span class="rcmd-name">重生最轻女滴女帝</span></li>
                <li><span class="rcmd-type">「玄幻」</span><span class="rcmd-name">重生最轻女滴女帝</span></li>
                <li><span class="rcmd-type">「玄幻」</span><span class="rcmd-name">重生最轻女滴女帝</span></li>
                <li><span class="rcmd-type">「玄幻」</span><span class="rcmd-name">重生最轻女滴女帝</span></li>
              </ul>
              <ul>
                <li><span class="rcmd-type">「玄幻」</span><span class="rcmd-name">重生最轻女滴女帝</span></li>
                <li><span class="rcmd-type">「玄幻」</span><span class="rcmd-name">重生最轻女滴女帝</span></li>
                <li><span class="rcmd-type">「玄幻」</span><span class="rcmd-name">重生最轻女滴女帝</span></li>
                <li><span class="rcmd-type">「玄幻」</span><span class="rcmd-name">重生最轻女滴女帝</span></li>
              </ul>
            </div>
          </div>
          <div class="rcmd-center">
            <div class="banner swiper-container" >
              <div class="banner-wrapper swiper-wrapper">
                <div class="banner-slide swiper-slide">
                  <router-link to="/detail">
                      <img src="../../assets/img/loading.gif">
                  </router-link>
                </div>
                <div class="banner-slide swiper-slide">
                  <router-link to="/detail">
                    <img src="../../assets/img/loading.gif">
                  </router-link>
                </div>
                <div class="banner-slide swiper-slide">
                  <router-link to="/detail">
                    <img src="../../assets/img/loading.gif">
                  </router-link>
                </div>
              </div>
              <div class="swiper-pagination">
              </div>
            </div>
            <div class="ct-book-name" >
              <router-link to="/detail" v-for="(pe,inde) in banners" :class="{active:index==inde+1 || index == inde+4}" :key="inde">{{pe.name}}</router-link>
            </div>
            <p>俗话说：光剑贼吃肉，没见贼挨打。这话用在沉默身上正好翻了过来，作为子承父业的小偷，他是光挨打也没吃到肉，半年进了六次局子，这次更不得了，竟然大厅…</p>
          </div>
          <div class="rcmd-tail">
            <ul>
              <li><i class="icon iconfont icon-gonggao"></i><span>公告公告公告公告公告公公告公告告… </span></li>
              <li><i class="icon iconfont icon-gonggao"></i><span>公告公告公告公告公告公公告公告告… </span></li>
              <li><i class="icon iconfont icon-gonggao"></i><span>公告公告公告公告公告公公告公告告… </span></li>
              <li><i class="icon iconfont icon-gonggao"></i><span>公告公告公告公告公告公公告公告告… </span></li>
              <li><i class="icon iconfont icon-gonggao"></i><span>公告公告公告公告公告公公告公告告… </span></li>
              <li><i class="icon iconfont icon-gonggao"></i><span>公告公告公告公告公告公公告公告告… </span></li>
              <li><i class="icon iconfont icon-gonggao"></i><span>公告公告公告公告公告公公告公告告… </span></li>
            </ul>
            <img src="../../assets/img/loading.gif" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
    export default {
      mounted(){
        let that = this;
        this.$nextTick(() => {
          let mySwiper = new Swiper('.swiper-container', {
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
                that.index = this.activeIndex
              }},
          })
        })
      },
      methods:{

      },
      data(){
        return {
          index:1,
          banners:[
            {cover:"https://img3.doubanio.com/view/photo/albumcover/public/p2317457275.webp",name:"banner 1",url:""},
            {cover:"https://img3.doubanio.com/view/photo/albumcover/public/p2317457275.webp",name:"banner 2",url:""},
            {cover:"https://img3.doubanio.com/view/photo/albumcover/public/p2317457275.webp",name:"banner 3",url:""}
            ]
        }
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
    .recommend
      height:334px
      background #fff
      margin-bottom 10px
      .rcmd-right,.rcmd-center,.rcmd-tail
        float: left
        margin 21px 8px
        height:292px
      .rcmd-right
        width:328px
        h1
          bg-title(rgba(0,0,0,0.85),16px)
          font-family:PingFangSC-Medium;
          line-height:16px;
          font-weight:bold
          margin-top: 14px
        p
          bg-title(rgba(0,0,0,0.65),14px)
          width:288px;
          height:88px;
          font-family:PingFangSC-Regular;
          line-height:22px;
          margin 28px 0
        div
          overflow hidden
          width:328px;
          height:118px;
          background:rgba(246,248,252,1);
          ul
            float: left
            width: 50%
            li
              border-top:1px solid rgba(232,232,232,1);
              height:28px
              line-height:28px
              .rcmd-type,.rcmd-name
                vertical-align middle
              .rcmd-type
                bg-title(rgba(155,155,155,1),12px)
                font-family:PingFangSC-Regular;
                line-height:12px;
              .rcmd-name
                bg-title(rgba(0,0,0,0.85),12px)
                font-family:PingFangSC-Regular;
                line-height:12px;
                text-overflow ellipsis
                overflow hidden
                white-space nowrap
              &:first-child
                border-top none
      .rcmd-center
        position relative
        margin 21px 5px
        font-size 0
        width:330px
        .banner
          .banner-wrapper
            .banner-slide
              a
                img
                  width:330px;
                  height:210px;
          .swiper-pagination
            bottom:40px

        .ct-book-name
            position: absolute
            bottom: 78px
            width:330px;
            height:34px;
            background:rgba(0,0,0,1);
            border-radius:4px 4px 0px 0px;
            opacity:0.85;
            font-size 0
            z-index: 199
            a
              display inline-block
              width:110px;
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


        p
          bg-title(rgba(155,155,155,1),12px)
          font-family:PingFangSC-Regular;
          line-height:22px
          width:330px;
          height:82px;
          background:rgba(255,255,255,1);
          border:1px solid rgba(234,235,235,1);
          padding:8px 10px
      .rcmd-tail
        width: 248px
        ul
          width:248px;
          height:196px;
          border:1px solid rgba(234,235,235,1);
          margin-bottom 7px
          border-bottom none
          li
            border-bottom:1px solid rgba(232,232,232,1);
            height:28px
            line-height:28px
            .icon
              bg-title(rgba(77,139,238,1),12px)
              margin-left 7px
            span
              bg-title(rgba(0,0,0,0.75),12px)
              margin-left 9px
              font-family:PingFangSC-Regular;
              line-height:12px;
        img
          width:248px;
          height:90px;
</style>
