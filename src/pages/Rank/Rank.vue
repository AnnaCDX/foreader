<template>
<div>
  <div class="rank-container">
    <div class="rank-main">
      <div class="main-left">
        <ul class="left-ul">
          <li ><router-link class="click" to='/rank/synthesize' ><img src="../../assets/img/title.jpeg" alt="">综合榜</router-link></li>
          <li v-for="(item,index) in rankType" ><router-link class="click" :to="'/rank/'+item.type+'/'+item.type" ><img src="../../assets/img/title.jpeg" alt="">{{item.type_name}}榜</router-link></li>
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
        current:1,
        jiade1:[1,1,1,1,1,1,1]
      }
    },
    mounted() {
      this.$store.dispatch("getRankType")
    },
    computed:{
      ...mapState(["rankType"])
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
