<template>
  <div>
    <div class="all-chapter">
      <ul >
        <li v-for="(item,index) in bookChapter"><a href="javascript:;">{{item.title}}</a><i class="icon iconfont icon-icon-" v-show="!item.free"></i></li>
      </ul>
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
</style>
