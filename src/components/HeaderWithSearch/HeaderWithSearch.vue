<template>
  <div class="header-fix" >
    <div class="fix-body">
      <router-link to="/home">
      <img class="logo" src="../../assets/img/web/home/logo.png" alt="">
      </router-link>
      <slot name="headerSearch"></slot>
      <div class="private" >
        <a href="javascript:;" class="phone-login collect" @click="goMsite()"><img src="../../assets/img/web/home/sy_shoucang.png" alt="">收藏</a>

        <a class="phone-login" v-if="!loginInfo.id && !id" @click="showLoginDialog()"><img src="../../assets/img/web/home/login.jpg" alt="">登录</a>
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
              id:this.$cookie.get("id"),

            }
        },
        computed:{
          ...mapState(["loginInfo"])
        },
        methods:{
          showLoginDialog(){
            this.$store.dispatch("showLoginDialog",true)
          },
          goMsite(){
            if (this.loginInfo.id) {
              this.$router.push(`/msite/collection`)
            } else {
              this.showLoginDialog()
            }
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header-fix
    .fix-body
      position relative
      width:990px
      height:48px
      line-height:40px
      margin:0 auto
      .logo
        margin-top 12px
        height: 20px;
        object-fit contain
      .private
        float: right
        margin-top: 3px;
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
