<template>
  <div class="dirOuter">
    <div class="all-chapter" v-if="bookChapter.length">
      <ul >
        <li v-for="(item,index) in bookChapter" @click="goReading(item.bid,item.cid,item.title,index)" :key="index"><a href="javascript:;">{{item.title.trim()}}</a><i class="icon iconfont icon-icon-" v-show="!item.free"></i></li>
      </ul>
    </div>
    <div class="loading" v-else>
      <div class="loading-container">
        <img src="../../assets/img/fy_loading.gif" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
    export default {
        data() {
            return {

            }
        },
        methods:{
          goReading(bid,cid,title,ind){
            let routeData = this.$router.resolve({ path: `/reading/${bid}/${cid}/${title}/${ind}`});
            window.open(routeData.href, '_blank')
          }
        },
        mounted(){
        let {bid} = this.$route.params
          this.$store.dispatch("getBookChapter",{bid})
        },
        computed:{
          ...mapState(["bookChapter"])
        }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.dirOuter
  .all-chapter
    padding 30px
    background #fff
    min-height 655px
    ul
      width 100%
      overflow hidden
      li
        height 40px
        width 33.3%
        line-height 40px
        float left
        border-bottom 1px solid #e8e8e8
        a
          width 226px
          color rgba(0,0,0,.85)
          font-size 14px
          text-overflow ellipsis
          overflow hidden
          white-space nowrap
          vertical-align: top;
        .icon
          width 16px
          height 16px
          color #000000
          font-size 16px
          margin-left 34px
  .loading
    float: right
    width 990px
    margin 0 auto
    background #fff
    height 749px
    text-align center
    line-height 600px
    img
      width 200px
      vertical-align middle

</style>
