<template>
  <div class="recommend-container" v-if="rankList.length">
    <div class="recommend-main" v-for="(item,index) in rankList" :key="index" >
      <a href="javascript:;" @click.prevent="goDetail(item.bid)"><img :src="item.poster" alt=""></a>
      <div class="book-info">
        <div class="info-container">
          <a href="javascript:;" @click="goDetail(item.bid)">{{item.title}}</a>
          <p class="book-intro">{{item.recDesc}}</p>
          <p class="author-tag">
            <img :src="item.poster" alt="">
            <a href="javascript:;" v-for="(per,index) in item.authors" :key="per">{{per}}</a> | <span>{{item.num}}</span>
          </p>
        </div>

        <div class="read-fav">
          <button class="read-now" @click.prevent="goReading(item.bid)" >立即阅读</button>
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
      return {}
    },
    created(){
      let type = this.$route.params.type
      let count = 6
      this.$store.dispatch("getRankList",{type,count})
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
        display inline-block
        img
          width:98px
          height:128px
          box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.45);
      .book-info
        float: right
        width:594px
        min-height 133px
        position relative
        .info-container
          width 340px
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
            color #4D8BEE
      &:first-child
        margin-top 10px
</style>
