<template>
<div class="outer">
  <div id="reading_root_container" :class="bgTheme">
    <HeaderWithSearch >
      <HeaderSearch slot="headerSearch"></HeaderSearch>
    </HeaderWithSearch>
    <div class="content">
      <div class="content-body">
        <div v-if="bookDetail.book" class="brew">
          <router-link to="/home">首页</router-link >
          <span v-for="(item,index) in bookDetail.book.categories" :key="index"> > {{item}}</span>

          <span> > {{bookDetail.book.title}}</span>
        </div>
        <div class="body-main">

          <!--左侧导航-->
          <div class="art-box-left" :class="bc1">
            <ul>
              <!--目录-->
              <li class="left-li" @click="toggleToolTip('cap')" :class="{isActive:which==='cap'&& isShow}">
                <p class="li-title"><img :src="isChange?mulu.muluNight:mulu.mulu" alt=""></p>目录
                <div class="trangle" v-show="which==='cap' && isShow"></div>
                <div class="trangle-body" v-show="which==='cap' && isShow" :class="{sameActive:which==='cap'}">
                  <p class="chapter-title">目录·共{{bookChapter.length}}章</p>
                  <div class="all-chapter">
                    <ul >
                      <li class="chapter-li" v-for="(item,index) in bookChapter" :key="index" @click="isFree(item.cid,item.bid,index,item.title)"><a href="javascript:;" class="cpt-title">{{item.title}}</a>
                        <a href="javascript:;" class="cpt-key"><i class="icon iconfont icon-icon-" v-show="!item.free"></i></a></li>
                    </ul>
                  </div>
                </div>
              </li>

              <!--全屏-->
              <!--<li class="left-li" @click="toggleFullScreen()">-->
                <!--<p><i class="icon iconfont icon-quanping"></i></p>全屏-->

              <!--</li>-->

              <!--字体-->
              <li class="left-li" @click="toggleToolTip('font')" :class="{isActive:which==='font'&& isShow}">
                <p><img :src="isChange?ziti.zitiNight:ziti.ziti" alt=""></p>字体
                <div class="trangle" v-show="which==='font' && isShow"></div>
                <div class="trangle-body font-body" v-show="which==='font' && isShow" :class="{sameActive:which==='font'}">
                  <div class="body-main">
                    <a href="javascript:;" @click.stop="curFontSize -= 1">-</a>
                    <a>{{ curFontSize }}</a>
                    <a href="javascript:;" @click.stop="curFontSize += 1">+</a>
                  </div>
                </div>
              </li>

              <!--背景-->
              <li class="left-li" @click="toggleToolTip('back')" :class="{isActive:which==='back'&& isShow}">
                <p class="back"></p>背景
                <div class="trangle" v-show="which==='back'&& isShow"></div>
                <div class="trangle-body back-body " v-show="which==='back'&& isShow" :class="{sameActive:which==='back'}">
                  <ul>
                    <li class="back-li bj01" @click="changeReadingBg('bgcolor01','bc1')"></li>
                    <li class="back-li bj02" @click="changeReadingBg('bgcolor02','bc2')"></li>
                    <li class="back-li theme-pink" @click="changeReadingBg('bgcolor03','bc4')"></li>
                    <li class="back-li bj04" @click="changeReadingBg('bgcolor04','bc3')"></li>
                    <li class="back-li bj05" @click="changeReadingBg('bgcolor05','bc5')"></li>
                    <li class="back-li bj06" @click="changeReadingBg('bgcolor06','bc6')"></li>
                  </ul>

                </div>
              </li>

              <!--收藏-->
              <li class="left-li" @click="addCollection">
                <p><img :src="isChange?shoucang.shoucangNight:shoucang.shoucang" alt=""></p>收藏
              </li>

              <!--手机端-->
              <li class="left-li" @click="">
                <p><img :src="isChange?shouji.shoujiNight:shouji.shouji" alt=""></p>手机
              </li>
            </ul>

          </div>

          <!--正文-->
          <div class="art_box" id="chapter_11040162">
            <div class="article" v-if="bookChapter.length">
              <h2>{{title}}</h2>
              <ul v-if="bookDetail.book">
                <li v-for="(item,index) in bookDetail.book.authors" :key="index">作者：{{item}}</li>
                <li>类别：<a href="javascript:;" v-for="(item,index) in bookDetail.book.categories" @click="" :key="index">{{item}}</a> </li>
                <li>更新时间：{{bookDetail.book.updated}}</li>
                <li>本书字数：{{Math.floor(bookDetail.book.wordCount / 10000)}}万字</li>
              </ul>

              <!--//小说内容-->
              <div class="art_con" v-if="!needPay" >
                <p :style="{fontSize : curFontSize + 'px'}" v-for="(item,index) in readInfo" :key="index">{{item}}</p>
              </div>

              <!--//需要购买时展示-->
              <!--<div class="sub-main">-->
                <!--<p class="sub-title">这是VIP章节 需要订阅后才能阅读</p>-->
                <!--<div class="sub-item" >-->
                  <!--<div class="item" v-for="(item,index) in chapterShow.chapter_shows" :class="{'active-item':buyWhich===item.id}" :key="index" @click="buySelect(item.id)">-->
                    <!--<span class="buy-num">订阅{{item.chapter_num===1?"本":("后续"+item.chapter_num)}}章</span>-->
                  <!--</div>-->
                  <!--<div class="item" :class="{'active-item':buyWhich===chapterShow.all_rest}" @click="buyAllSelect(chapterShow.all_rest)">-->
                    <!--<span class="buy-num">订阅后续全部{{chapterShow.all_rest}}章节</span>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class="agreement">-->
                  <!--<label><input name="isAgree" type="checkbox" v-model="isRight"/></label>-->
                  <!--<a href="javascript:;" class="is-agree">自动购买下一章，以后不再提示</a>-->
                <!--</div>-->

                <!--&lt;!&ndash;账户有钱，但不足时显示&ndash;&gt;-->
                <!--<div class="not-enough" v-show="myWallet.primary_balance<calculateResult.need_pay">-->
                  <!--余额不足，还差<span>{{(calculateResult.need_pay - myWallet.primary_balance)}}</span>阅读币-->
                <!--</div>-->


                <!--<div class="no-duty">-->
                  <!--<p class="onduty-title">温馨提示</p>-->
                  <!--<div class="onduty-content">-->
                    <!--<p>1.不足1000字免费，5阅读币/1000字</p>-->
                    <!--<p>2.已购章节不扣费</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class="buy-bottom">-->
                  <!--<p class="bottom-left">需支付：<span class="need-pay">{{calculateResult.need_pay}}币</span><span class="origin-pay">（原价：{{calculateResult.original_price}}币）</span></p>-->
                  <!--<button class="sub-btn" @click="subscribeRecharge">{{myWallet.primary_balance < calculateResult.need_pay?"去充值":"立即订阅"}}</button>-->
                <!--</div>-->

              <!--</div>-->


              <!--现在只弹出一个弹窗-->
              <div class="subscribe alert" v-else>
                <div class="alert-main ">

                    <p class="alert-title">后续内容，请在速更小说APP中阅读</p>
                    <div class="alert-img">
                      <a href="javascript:;"><img src="../../assets/img/qr_android_download.png" alt="">
                        </a>
                      <!--<a href="javascript:;"><img src="" alt=""><span>速更小说 for iPhone</span></a>-->
                    </div>
                    <p style="margin-top: 20px">速更小说 for Android</p>
                    <p class="alert-foot">更新<span>快</span>，爽文<span>多</span>，更多精彩尽在速更小说APP</p>
                </div>
              </div>
            </div>
          </div>

          <!--右侧导航-->
          <div class="art-box-right">
            <ul>
              <li class="right-li"><a @click="nextPrev(true)"><i class="icon iconfont icon-jiantou-zuo"></i></a></li>
              <li class="right-li"><a @click="nextPrev(false)"><i class="icon iconfont icon-jiantou-you"></i></a></li>
              <li class="right-li"><a href="#reading_root_container" ><i class="icon iconfont icon-tubiao02"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="read-foot">
          <a href="javascript:;" @click="nextPrev(true)" :disabled="whichCapter <= 0" :class="{dis:whichCapter <= 0}">上一章</a><a href="javascript:;" @click="goDetail">目录</a><a href="javascript:;" @click="nextPrev(false)" :disabled="whichCapter >= bookChapter.length-1" :class="{dis:whichCapter >= bookChapter.length-1}">下一章</a>
        </div>
      </div>
    </div>


  </div>
  <div class="mask" v-if="!hasShowIntro">
    <div class="mask-container">
      <div class="mask-left">
        <ul>
          <li class="mask-li">
            目录
            <div class="trangle"></div>
          </li>
          <!--<li class="mask-li">-->
            <!--全屏阅读-->
            <!--<div class="trangle"></div>-->
          <!--</li>-->
          <li class="mask-li">
            字体大小
            <div class="trangle"></div>
          </li>
          <li class="mask-li">
            阅读背景
            <div class="trangle"></div>
          </li>
          <li class="mask-li">
            收藏本书
            <div class="trangle"></div>
          </li>
          <li class="mask-li">
            手机阅读
            <div class="trangle"></div>
          </li>
        </ul>
      </div>
      <div class="mask-right">
        <p class="right-title">指南</p>
        <div class="right-main">
          <!--<div class="screen">-->
            <!--<p>全屏模式</p>-->
            <!--<a href="javascript:;">F11</a>-->
          <!--</div>-->
          <div class="page">
            <p>翻页</p>
            <a href="javascript:;"><i class="icon iconfont icon-zuojiantou"></i></a><a href="javascript:;"> <i class="icon iconfont icon-youjiantou"></i></a>
          </div>
          <div class="move">
            <p>上下移动</p>
            <a href="javascript:;"><i class="icon iconfont icon-shangjiantou"></i></a><a href="javascript:;"><i class="icon iconfont icon-xiajiantou"></i></a>
          </div>
        </div>
        <div class="btn">
          <button @click="readyRead">关闭</button>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
  import vueHeadful from 'vue-headful';
  import HeaderWithSearch from "../../components/HeaderWithSearch/HeaderWithSearch"
  import HeaderSearch from "../../components/HeaderSearch/HeaderSearch"
  import {mapState,mapActions} from "vuex"
  import {reqReadInfo,reqChapterShow,reqCalPrice,reqCalPriceAll,buyChapter,buyChapterAll,askAutoBuy} from "../../api"
  // todo how to import this css more elegant
  import "../../../reader/reader_common.css";
  // import "../../../reader/layer.css";
  import "../../../reader/read.css";
  import {addCollection} from "../../api"
  export default {
    data(){
      return {
        which:"",//初始化选择操作哪个小工具
        bgTheme: 'bgcolor01',//初始化背景色
        curFontSize: 16,//初始化字体大小
        bc1:'bc1',//初始化颜色盘
        isRight:true,//初始化是否自动购买
        buyWhich:1,//初始化购买哪个套餐
        isShow:false,//初始化是否显示
        maskShow:true,//初始化遮罩层是否显示
        bid:"",
        cid:"",
        hasShowIntro: true,
        title:"",
        whichCapter:0,//初始化选择哪个章节阅读
        token:this.$cookie.get('web_tk'),
        needPay:false,//判断是否需要付钱，并控制购买页面的显示与隐藏
        isAll:false,//是否购买剩下的全部
        status:1,
        isChange:false,

        mulu:{
          mulu:require("../../assets/img/web/reading/ydjm_mulu.png"),
          muluNight:require("../../assets/img/web/reading/ydjm_mulu_night.png")
        },
        ziti:{
          ziti:require("../../assets/img/web/reading/ydjm_ziti.png"),
          zitiNight:require("../../assets/img/web/reading/ydjm_ziti_night.png")
        },
        shoucang:{
          shoucang:require("../../assets/img/web/reading/ydjm_shoucang.png"),
          shoucangNight:require("../../assets/img/web/reading/ydjm_shoucang_night.png")
        },
        shouji:{
          shouji:require("../../assets/img/web/reading/ydjm_shouji.png"),
          shoujiNight:require("../../assets/img/web/reading/ydjm_shouji_night.png")
        }

      }
    },
    created: function () {
      window.addEventListener('keyup', this.onKeyPressed)
        var hasShowIntroFlag = localStorage.getItem("hasShowIntro")
        if (!hasShowIntroFlag || hasShowIntroFlag == null || hasShowIntroFlag == undefined) {
          localStorage.setItem("hasShowIntro",true)
          this.hasShowIntro = false
        }
    },

    beforeDestroy: function () {
      window.removeEventListener('keyup', this.onKeyPressed)
    },
    mounted(){
      let {bid} = this.$route.params
      this.$store.dispatch("getBookChapter",{bid})
      this.$store.dispatch("getBookDetail",{bid})
    },
    watch:{
      async bookChapter(value){
        let bid
        let cid
        if(this.$route.params.cid){
          bid = this.$route.params.bid
          cid = this.$route.params.cid
          this.title=this.$route.params.title
        }else{
          bid = this.bookChapter[0].bid
          cid= this.bookChapter[0].cid
          this.title = this.bookChapter[0].title
        }
        let token = this.$cookie.get('web_tk')
        let id = this.$cookie.get("id")
        let config={
          headers:{
            "Authorization":"Bearer "+token
          }
        }
        let initData
        if(!id){
          initData = await reqReadInfo(bid,cid)
        }else{
          initData = await reqReadInfo(bid,cid,config)
        }
        let {data} = initData

        if(!data){
         // this.$router.push('/home')
         //  this.$store.dispatch("showLoginDialog",true)
         //  let content = ""
         //  this.recordReadInfo({content})

          this.needPay = true

        }else if(data.need_pay){
          // let user_id = this.$cookie.get("id")
          // let result = await reqChapterShow(user_id,bid,cid)
          // this.getChapterShow({result})
          let {content} = data
          this.recordReadInfo({content})
          this.needPay = data.need_pay

        }else{
          let {content} = data
          this.recordReadInfo({content})
        }
      }
    },
    methods:{
      ...mapActions(["recordReadInfo","getChapterShow","recordCalculate"]),
      onKeyPressed(e) {
        if (e.code === "ArrowRight") {
          this.nextPrev(false)
        } else if (e.code === "ArrowLeft") {
          this.nextPrev(true)
        }
      },
      // 太多复用未处理
      //购买时才用到，将html打开
     //  async subscribeRecharge(){
     //    if(this.myWallet.primary_balance < this.calculateResult.need_pay){
     //      let routeData = this.$router.resolve({ path: `/recharge`});
     //      window.open(routeData.href, '_blank')
     //    }else{
     //      let {buyWhich,cid,bid,} = this
     //      let user_id = this.$cookie.get("id")
     //      let {need_pay} = this.calculateResult
     //      if(this.isAll){
     //        await buyChapterAll(user_id,cid,bid,need_pay,buyWhich)
     //
     //      }else{
     //        await buyChapter(user_id,buyWhich,cid,bid,need_pay)
     //      }
     //      if(this.isRight){
     //        this.status = 1
     //      }else{
     //        this.status = 0
     //      }
     //      await askAutoBuy(user_id,this.status,bid)
     //      this.needPay = false
     //
     //
     //    }
     //  },
     //  async buySelect(index){
     //    this.buyWhich = index
     //    this.isAll = false
     //    let {bid,cid} = this
     //    let token = this.$cookie.get('web_tk')
     //    let config={
     //      headers:{
     //        "Authorization":"Bearer "+token
     //      }
     //    }
     //    let user_id = this.$cookie.get("id")
     //    let dtResult = await reqCalPrice(user_id,index,cid,bid)
     //    this.recordCalculate({dtResult})
     //
     //    this.$store.dispatch("getWalletInfo",{user_id,config})
     //  },
     //  async buyAllSelect(allIndex){
     //    this.isAll = true
     //    this.buyWhich = allIndex;
     //   let {bid,cid} = this
     //   let user_id = this.$cookie.get("id")
     //    let dtResult = await reqCalPriceAll(user_id,cid,bid,allIndex)
     //   this.recordCalculate({dtResult})
     //   let token = this.$cookie.get('web_tk')
     //   let config={
     //     headers:{
     //       "Authorization":"Bearer "+token
     //     }
     //   }
     //   this.$store.dispatch("getWalletInfo",{user_id,config})
     //
     // },
      goDetail(){
        let {bid} = this.$route.params

        let routeData = this.$router.resolve({ path: `/detail/directory/${bid}`});
        window.open(routeData.href, '_blank')
      },
      readyRead(){
        localStorage.setItem("hasShowIntro",true)
        this.hasShowIntro = true
      },
      toggleToolTip(id) {
        this.which = id
        this.isShow = !this.isShow
      },
      changeReadingBg(bg_name,bc) {
        if(bg_name=="bgcolor06"){
          this.isChange = true
        }else{
          this.isChange = false
        }
        this.bgTheme = bg_name
        this.bc1 = bc
      },
      //加入收藏
      async addCollection(){
        if (this.loginInfo.id) {
          let {bid} = this.$route.params
          let token = this.$cookie.get('web_tk')
          let config = {
            headers: {
              "Authorization": "Bearer " + token
            }
          }
          let data = await addCollection(bid, config)
          let isSuccess = /^2\d{2}$/.test(data)
          isSuccess ? alert("收藏成功") : alert("收藏失败")
        } else {
          this.$store.dispatch("showLoginDialog",true)
        }
      },
      // 点击列表进行阅读
      async isFree(cid,bid,wCapter,title){
        this.bid = bid
        this.cid = cid
        let id = this.$cookie.get("id")
        this.whichCapter = wCapter
        this.title = title
        this.needPay = false
        let token=this.$cookie.get('web_tk')
        let config={
          headers:{
            "Authorization":"Bearer "+token
          }
        }

        let initData
        if(!id){
          initData = await reqReadInfo(bid,cid)

        }else{
          initData = await reqReadInfo(bid,cid,config)
        }
        let {data} = initData
        if(!data){
          // this.$router.push('/home')
          // this.$store.dispatch("showLoginDialog",true)
          // let content = ""
          // this.recordReadInfo({content})
          this.needPay = true


        }else if(data.need_pay){
          // let user_id = this.$cookie.get("id")
          // let result = await reqChapterShow(user_id,bid,cid)
          // this.getChapterShow({result})
          // let dtResult = await reqCalPrice(user_id,1,cid,bid)
          // this.recordCalculate({dtResult})
          let {content} = data
          this.recordReadInfo({content})
          this.needPay = data.need_pay
        }else{
          let {content} = data
          this.recordReadInfo({content})
          document.documentElement.scrollTop = 0
          document.body.scrolltop = 0
        }
      },
      // 点击上下章进行阅读
      async nextPrev(isPrev){
        // let {bookChapter,whichCapter} = this

        if(isPrev){
          this.whichCapter--
          if (this.whichCapter < 0) {
             this.whichCapter = 0
          }
          let cid = this.bookChapter[this.whichCapter].cid
          let bid = this.bookChapter[this.whichCapter].bid
          this.title = this.bookChapter[this.whichCapter].title
          let id = this.$cookie.get("id")
          let token=this.$cookie.get('web_tk')
          let config={
            headers:{
              "Authorization":"Bearer "+token
            }
          }
          let initData
          if(!id){
            initData = await reqReadInfo(bid,cid)
          }else{
            initData = await reqReadInfo(bid,cid,config)
          }
          let {data} = initData
          if(!data){
            // this.$router.push('/home')
            this.needPay = true

          }else if(data.need_pay){
            // let user_id = this.$cookie.get("id")
            // let result = await reqChapterShow(user_id,bid,cid)
            // this.getChapterShow({result})
            // let dtResult = await reqCalPrice(user_id,1,cid,bid)
            // this.recordCalculate({dtResult})
            let {content} = data
            this.recordReadInfo({content})
            this.needPay = data.need_pay

          }else{
            let {content} = data
            this.recordReadInfo({content})
            this.needPay = data.need_pay
            document.documentElement.scrollTop = 0
            document.body.scrolltop = 0
          }
        }else{
          this.whichCapter++
          if (this.whichCapter > this.bookChapter.length - 1) {
            this.whichCapter = this.bookChapter.length - 1
          }
          let cid = this.bookChapter[this.whichCapter].cid
          let bid = this.bookChapter[this.whichCapter].bid
          this.title = this.bookChapter[this.whichCapter].title
          let token=this.$cookie.get('web_tk')
          let config={
            headers:{
              "Authorization":"Bearer "+token
            }
          };
          let initData
          if(!token){
            initData = await reqReadInfo(bid,cid)
          }else{
            initData = await reqReadInfo(bid,cid,config)
          }
          let {data} = initData;
          if(!data){
            // this.$router.push('/home')
            // this.$store.dispatch("showLoginDialog",true)
            // let content = ""
            // this.recordReadInfo({content})


            this.needPay = true
          }else if(data.need_pay){
            // let user_id = this.$cookie.get("id")
            // let result = await reqChapterShow(user_id,bid,cid)
            // this.getChapterShow({result})
            // let dtResult = await reqCalPrice(user_id,1,cid,bid)
            // this.recordCalculate({dtResult})
            let {content} = data
            this.recordReadInfo({content})
            this.needPay = data.need_pay
          }else{
            let {content} = data
            this.recordReadInfo({content})
            this.needPay = data.need_pay
            document.documentElement.scrollTop = 0
            document.body.scrolltop = 0
          }
        }
      }
    },
    computed:{
      ...mapState(["bookChapter","bookDetail","readInfo","chapterShow","calculateResult" ,"myWallet","loginInfo"])
    },
    components:{
      HeaderWithSearch,
      HeaderSearch
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .brew
    padding-top 20px
    height 60px
    a
      color: rgba(255,255,255,0.85);
    span
      color: rgba(255,255,255,0.85);
  .outer
    position relative
    .header-fix
      background rgba(255,255,255,.5)
      .fix-body
        .top-center
          position absolute
          top 3px
          left 342px
    .content
      width:100%

      //置于中间位置
      .content-body
        width 982px
        margin 0 auto

        //面包屑
        .ivu-breadcrumb
          margin: 23px 0

         //左中右的父亲
        .body-main
          position relative
          overflow hidden
          .art_box
            min-height 700px
          .art-box-left
            position absolute
            top 0
            left 0
            margin:0 14px
            background #eaeaea
            ul
              padding-left: 1px;
              padding-top: 1px;
              padding-bottom: 1px;
              text-align center
              border 1px solid #a1a3b0
              &:last-child
                border 1px solid #a1a3b0
              .left-li
                cursor: pointer;
                position relative
                padding 5px 15px
                border 1px solid #a1a3b0
                border-bottom none
                >p
                  img
                    width 22px
                    height 22px
                .trangle
                  position: absolute;
                  top: 50%;
                  right: -11px;
                  width 0
                  height 0
                  border-top 3px solid rgba(255, 255, 255, 0)
                  border-bottom 3px solid rgba(255, 255, 255, 0)
                  border-right 6px solid #eaeaea
                .trangle-body
                  position absolute
                  top:0
                  /*height 800px*/
                  background #fff
                  left: 66px;
                  padding 20px
                  z-index 100
                  border-radius: 4px;
                  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.45);
                  border none
                    ul
                      border none
                  /*overflow auto*/
                  .chapter-title
                    font-size 20px
                    color rgba(0,0,0,.85)
                    font-weight 500
                  .all-chapter
                    width 760px
                    max-height 1500px
                    overflow auto
                    ul
                      width 100%
                      overflow hidden
                      border none
                      .chapter-li
                        height 40px
                        width 50%
                        line-height 40px
                        float left
                        border-bottom 1px solid #e8e8e8
                        .cpt-title
                          width 226px
                          color rgba(0,0,0,.85)
                          font-size 14px
                          text-overflow ellipsis
                          overflow hidden
                          white-space nowrap
                          vertical-align: top;
                          text-align left
                        .cpt-key
                          text-align center
                          width 16px
                          .icon
                            width 16px
                            height 16px
                            color #000000
                            font-size 16px

                .font-body
                  padding 0
                  border: none
                  .body-main
                    width 184px
                    height 52px
                    line-height 52px
                    text-align center
                    .sameActive
                      min-height 350px
                    a
                     margin 0 20px
                     color rgba(0,0,0,.65)
                     font-size 18px
                .back-body
                  width 380px
                  height 52px
                  padding 0
                  ul
                    overflow hidden
                    border: none
                    .back-li
                      float left
                      width 40px
                      height 40px
                      border-radius 50%
                      margin 6px 11px
                    .bj01
                      background #e9e9e9
                    .bj02
                      background #fbf0cd
                    .theme-pink
                      background #ebcecf
                    .bj04
                      background #cfdde0
                    .bj05
                      background #bdcace
                    .bj06
                      background #212121
                .li-title
                    .icon
                      font-size 22px
                .back
                  width 22px
                  height 22px
                  background: #e9e9e9
                  border-radius 50%
                  border 1px solid #a1a3b0
                  margin-bottom: 2px;


           //控制颜色
          .bc1
            background #e9e9e9
            ul
              &:last-child
                border 1px solid #a1a3b0
              .left-li
                border-bottom 1px solid #a1a3b0
                .back
                  background: #e9e9e9
                .trangle
                  border-right 6px solid #e9e9e9
              .isActive
                background #f8f8f8
                .sameActive
                  background #f8f8f8
                  border #a1a3b0
          .bc2
            background #FAF3DB
            ul
              &:last-child
                border 1px solid #daca92
              .left-li
                border 1px solid #daca92
                .back
                  background: #fbf0cd
                .trangle
                  border-right 6px solid #FAF3DB
              .isActive
                background #FDFBED
                .sameActive
                  background #FDFBED
                  border 1px solid #DACA92
              &:last-child
                border-bottom 1px solid #daca92
          .bc3
            background #E1EEF3
            ul
              &:last-child
                border-bottom  1px solid #bfcdd1
              .left-li
                border 1px solid #bfcdd1
                .back
                  background: #cfdde0
                .trangle
                  border-right 6px solid #E1EEF3
              .isActive
                background #eefaff
                .sameActive
                  background #eefaff
                  border 1px solid #bfcdd1
          .bc4
            background #F5E4E4
            ul
              &:last-child
                border 1px solid #d7c4c4
              .left-li
                border 1px solid #d7c4c4
                .back
                  background: #ebcecf
                .trangle
                  border-right 6px solid #F5E4E4
              .isActive
                background #fbf1f1
                .sameActive
                  background #fbf1f1
                  border 1px solid #d7c4c4
              &:last-child
                border-bottom  1px solid #d7c4c4
          .bc5
            background #E3EFE3
            ul
              &:last-child
                border 1px solid #C5D3C7
              .left-li
                border 1px solid #C5D3C7
                .back
                  background: #bdcace
                .trangle
                  border-right 6px solid #E3EFE3
              .isActive
                background #F0FAF0
                .sameActive
                  background #F0FAF0
                  border 1px solid #C5D3C7
          .bc6
            background #333

            ul
              &:last-child
               border 1px #212121 solid
              .left-li
                border 1px solid #212121
                .back
                  background: #212121
                  border 1px #212121 solid
                .trangle
                  border-right 6px solid #333
              .isActive
                background #444444
                .sameActive
                  background #444444
                  border 1px solid #333333

          //内容区
          .art_box
            width 800px
            .article
              min-height 650px
              position relative
              /*.subscribe
                .sub-main
                  width 366px
                  margin 0 auto
                  .sub-title

                    font-size: 24px;
                    font-weight: 600;
                    color: #9b9b9b;
                    margin 30px 0
                  .sub-item
                    overflow hidden
                    .item
                      float: left
                      margin-right 38px
                      width: 164px;
                      height: 68px;
                      border-radius: 4px;
                      background-color: rgba(255, 255, 255, 0.55);
                      border: solid 1px #cccccc;
                      text-align center
                      line-height 68px
                      margin-bottom 22px
                      &:last-child
                        width 366px
                        margin-bottom 11px
                      .buy-num

                        font-size: 14px;
                        font-weight: 500;
                        line-height 1.57
                        color: rgba(0, 0, 0, 0.85);
                        .need-num

                          font-size: 12px;
                          line-height 1.83
                          color #9b9b9b
                    .active-item
                      background #4d8bee
                    .item:nth-child(2n+0)
                      margin-right 0

                  .agreement
                    margin-bottom 10px
                    .is-agree

                      font-size: 12px;
                      color rgba(0,0,0,.65)
                  .not-enough

                    font-size: 14px;
                    color: rgba(0, 0, 0, 0.85);
                    margin-bottom 5px
                    span
                      color #d0021b;
                  .no-duty
                    .onduty-title
                      margin 15px 0 5px
                      color #9b9b9b
                      font-size 14px
                    .onduty-content
                      p
                        color #9b9b9b
                        font-size 12px
                  .buy-bottom
                    overflow hidden
                    margin 20px 0

                    .bottom-left
                      float left
                      width 206px
                      height 38px
                      border-radius: 4px;
                      background-color: #ffffff;
                      border: solid 0.5px #4d8bee;
                      text-align center
                      line-height 38px
                      .need-pay
                        font-size 12px
                        color #d0021b
                        font-family "PingFang SC"
                      .origin-pay
                        color #9b9b9b
                        font-size 12px
                        font-family "PingFang SC"
                        text-decoration line-through
                    .sub-btn
                      float: right
                      width: 148px;
                      height: 38px;
                      border-radius: 4px;
                      background-color: #4d8bee;
                      color #fff*/
              .alert
                position absolute
                top 230px
                left 115px
                z-index 150px
                .alert-main
                  width 570px
                  height 388px
                  padding 54px 121px
                  text-align center
                  .alert-title
                    font-size 20px
                    font-weight 500
                    color #9b9b9b
                    font-family "PingFang SC"
                    margin-bottom 20px
                  .alert-img
                    a
                      width 100px
                      height 100px
                      text-align center
                      &:first-child
                        display: block;
                        margin-left auto
                        margin-right auto
                      img
                        width 100px
                        height 100px

                      span
                        font-family Helvetica
                        color #9b9b9b
                        font-size 12px
                        margin-top 10px
                  .alert-foot
                    color rgba(0,0,0,.5)
                    font-size 14px
                    text-align center
                    margin-top 20px
                    span
                      color rgba(0,0,0,.85)
                    a
                      color #4d8bee

                  .icon
                    position absolute
                    top 0
                    line-height 1
                    color #000
                    right 0
                    font-size 18px
                    width 18px
                    height 18px

          //右侧导航
          .art-box-right
            position absolute
            right 14px
            bottom 0
            width 64px
            height 192px
            .right-li
              height 63px
              border-bottom 1px solid #d9d9d9
              text-align center
              line-height 64px
              &:last-child
                border none
              a
                .icon
                  width 24px
                  height 24px
                  font-size 24px
                  color #000

        .read-foot
          width 800px
          height 70px
          margin-top 30px
          margin-left 82px
          padding 22px 0
          a
            padding 0 106px
            border-right 1px solid #d9d9d9
            font-size 20px
            color rgba(0,0,0,.65)
            &:last-child
              border none
          .dis
            color #9b9b9b
    .art_con
      p
        line-height: 30px;
        letter-spacing: 2px
        padding-bottom  0
    .mask
      position absolute
      top: 0
      left 0
      right 0
      bottom 0
      margin auto
      background rgba(0,0,0,.3)
      .mask-container
        position fixed
        top 95px
        left 95px
        width: 1150px;
        .mask-left
          ul
            .mask-li
              position relative
              width 81px
              height 41px
              background #fff
              border-radius 2.6px
              box-shadow: 0 0 4px 0 #c4b78a;
              margin-top 15px
              text-align center
              line-height 41px

              font-size: 16px;
              color rgba(0,0,0,.85)
              .trangle
                position: absolute
                top 50%
                left 81px
                margin-top -2px
                height 0
                width 0
                border-top 3px solid rgba(255, 255, 255, 0)
                border-bottom 3px solid rgba(255, 255, 255, 0)
                border-left 6px solid #fff
        .mask-right
          position absolute
          top: 40%
          left: 50%
          width 433px
          height 255px
          background #fff
          box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
          padding 14px 16px
          transform translateX(-25%)
          .right-title
            font-size: 18px;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.85);
          .right-main
            margin-top 36px
            overflow hidden

            .screen,.page,.move
              float left
              margin-left 12px
              margin-right 41px
              p
                margin-bottom 12px

                font-size: 14px;
                font-weight: 500;
                color: #9b9b9b;
              a
                width 44px
                height 44px
                background #f5f5f5
                border: solid 1px #e2e2e2;
                border-radius 4px
                margin-right 12px
                text-align center
                line-height 44px
                color #808080
            .move
              margin-right 0

          .btn
            margin-top 40px
            text-align center
            button
              width: 65px;
              height: 32px;
              border-radius: 4px;
              background-color: #4d8bee;
              color #fff
  #reading_root_container
    min-height 100vh
</style>
