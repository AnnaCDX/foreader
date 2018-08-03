<template>
<div>
  <div class="rank-container">
    <div class="rank-main">
      <div class="main-left">
        <ul class="left-ul">
          <li ><a class="click" href="javascript:;" @click="rankTab('synthesize')"><img :src="current=='synthesize'?synthesize.synthesizeActive:synthesize.synthesize" alt="">综合榜</a></li>
          <li v-for="(item,index) in rankType" :key="index"><a href="javascript:;" class="click"  @click="rankTab(item.type)"><img :src="item.type==current?imgUrl[item.type][item.type+'Active']:imgUrl[item.type][item.type]" alt="">{{item.type_name}}榜</a></li>
        </ul>
      </div>
      <div class="main-right">
          <router-view></router-view>
      </div >
    </div>
  </div>
</div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    data(){
      return {
        current:"synthesize",
        synthesize:{
          synthesize: require("../../assets/img/web/rank/zonghebang_grey.png"),
          synthesizeActive: require("../../assets/img/web/rank/zonghebang.png")
        },
        imgUrl:{
          pv: {
            pv: require("../../assets/img/web/rank/dianjibang_grey.png"),
            pvActive: require("../../assets/img/web/rank/dianjibang.png")
          },
          fav: {
            fav: require("../../assets/img/web/rank/shoucangbang_grey.png"),
            favActive: require("../../assets/img/web/rank/shoucangbang.png")
          },
          comments: {
            comments: require("../../assets/img/web/rank/renshubang_grey.png"),
            commentsActive: require("../../assets/img/web/rank/renshubang.png")
          }
        }

      }
    },
    methods:{
      rankTab(type){
        this.current = type
        this.$router.push(`/rank/${type}/${type}`)
      }

    },
    mounted() {
      this.$store.dispatch("getRankType")
      this.$on('global:more',(hh)=>{
        this.current = hh
      })
    },
    computed:{
      ...mapState(["rankType","rankList"])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.rank-container
  width 100%
  .rank-main
    width 990px
    margin 20px auto
    overflow hidden
    .main-left,.main-right
      float: left
    .main-left
      width 220px
      background #fff
      padding 26px 0
      margin-right 22px
      .left-ul
        li
          .click
            height 34px
            line-height 34px
            color rgba(0,0,0,.85)
            padding-left 30px
            font-size 16px
            box-sizing border-box
            img
              width 20px
              height 20px
              vertical-align middle
              margin-right 16px
          .router-link-active
            color #4d8bee
            border-left 3px solid #4d8bee
            padding-left 27px

    .main-right
      background #fff

</style>
