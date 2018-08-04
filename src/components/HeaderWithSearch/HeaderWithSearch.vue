<template>
  <div class="header-fix" >
    <div class="fix-body">
      <img src="../../assets/img/web/home/top_logo.png" alt="">
      <slot name="headerSearch"></slot>
      <div class="private" >
        <router-link to="/phone" class="phone-login"><img src="../../assets/img/web/home/sy_shoucang.png" alt="">收藏</router-link>
        <a class="phone-login" v-if="!loginInfo.id && !id" ><img src="../../assets/img/web/home/login.jpg" alt="">登录</a>
        <router-link to="/msite" class="phone-login" v-else><img src="../../assets/img/web/home/login.jpg" alt="">个人中心</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
    export default {
        data() {
            return {
              id:this.$cookies.get("id"),

            }
        },
        computed:{
          ...mapState(["loginInfo"])
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header-fix
    .fix-body
      position relative
      width:990px
      height:40px
      line-height:40px
      margin:0 auto
      img
        height: 34px;
        object-fit cover
      .private
        float: right
        .phone-login
          display inline-block
          font-size 14px
          margin:0 8px
          img
            width 16px
            height 16px
            vertical-align middle
            margin-right 5px
</style>
