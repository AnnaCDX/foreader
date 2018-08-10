<template>
  <div class="recommend-container" v-if="rankList.length">
    <div class="recommend-main" v-for="(item,index) in rankList" :key="index" >
      <a href="javascript:;" @click.prevent="goDetail(item.bid)">
        <img class="avatar" :src="item.poster" alt="">
        <img class="little-icon" :src="index==0?img.top1:(index==1?img.top2:(index==2?img.top3:img.top4))" alt="">
        <span class="little-icon font">{{index+1}}</span>
      </a>
      <div class="book-info">
        <div class="info-container">
          <a href="javascript:;" @click="goDetail(item.bid)">{{item.title}}</a>
          <p class="book-intro">
            {{item.description}}
            <a href="javascript:;" class="ellipsis" @click="goDetail(item.bid)" v-show="item.description" title="了解更多">...</a>
          </p>
          <p class="author-tag">
            <img :src="item.poster" alt="">
            <a href="javascript:;" v-for="(per,index) in item.authors" :key="per" >{{per}}</a> | <span>{{item.num}}</span>
          </p>
        </div>

        <div class="read-fav">
          <button @click.prevent="goReading(item.bid)" class="read-now">立即阅读</button>
          <AddCollect :bid="item.bid"></AddCollect>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  import AddCollect from '../AddCollect/AddCollect'
  export default {
    data() {
      return {
        img:{
          top1:require('../../assets/img/web/rank/top1.png'),
          top2:require('../../assets/img/web/rank/top2.png'),
          top3:require('../../assets/img/web/rank/top3.png'),
          top4:require('../../assets/img/web/rank/top4.png')
        }
      }
    },
    created(){
      let type = this.$route.params.type
      let count = 6
      this.$store.dispatch("getRankList",{type,count})
    },
    watch:{
      rankList(){
        let type = this.$route.params.type
        this.$emit("global:more",type)
      }
    },
    methods:{
      goDetail(bid){
        console.log(bid)
        let routeData = this.$router.resolve({ path: `/detail/bookIntro/${bid}`});
        window.open(routeData.href, '_blank')
      },
      goReading(bid){
        let routeData = this.$router.resolve({ path: `/reading/${bid}`});
        window.open(routeData.href, '_blank')
      }

    },
    computed:{
      ...mapState(["rankList"])
    },
    components:{
      AddCollect
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
        position relative
        display inline-block
        .avatar
          width:98px
          height:128px
          box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.45);
        .little-icon
          width 24px
          height 28px
          position absolute
          top:0
          left -1px
        .font
          text-align center
          line-height 28px
          color #fff
          font-size 16px
          font-family Helvetica
          font-weight bold
      .book-info
        float: right
        width:594px
        min-height 133px
        position relative
        .info-container
          width 340px
          >a
            color rgba(0,0,0,.85)

            font-size: 16px;
            font-weight: 500;
          .book-intro

            margin: 3px 0 5px;
            width 340px
            position: relative;
            height: 72px;
            overflow: hidden;
            font-size: 14px;
            line-height 1.7
            color rgba(0,0,0,.65)
            .ellipsis
              position: absolute;
              bottom: 0;
              right: 0;
              color rgba(0,0,0,.65)
              padding-left: 40px;
              font-size 18px
              font-weight 600
              background: linear-gradient(to right, rgba(255, 255, 255, 0), #fff 55%);
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
          >button
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
            background white
            color #4D8BEE
      &:first-child
        margin-top 10px
</style>
