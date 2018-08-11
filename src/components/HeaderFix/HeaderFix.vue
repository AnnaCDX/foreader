<template>
  <div class="header-fix" >
    <div class="fix-body">
      <div class="private" >
        <a href="javascript:;" class="phone-login collect" @click="goMsite()"><img src="../../assets/img/web/home/sy_shoucang.png" alt="">收藏</a>
        <a class="phone-login log" v-if="!loginInfo.id && !id" @click="showLoginDialog"><img src="../../assets/img/web/home/login.jpg" alt="">登录</a>
        <router-link to="/msite" class="phone-login log" v-else><img  src="../../assets/img/web/home/login.jpg" alt="">个人中心</router-link>
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
      ...mapState(['loginInfo'])
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
    z-index 100
    position: fixed
    top:0
    width:100%
    background: rgba(255,255,255,.85)
    .fix-body
      width:990px
      height:40px
      line-height:40px
      margin:0 auto
      .private
        float: right
        >.phone-login
          display inline-block
          font-size 14px
          margin:0 8px
          color rgba(0,0,0,.85)
          >img
            width 16px
            height 16px
            margin-right 5px
            vertical-align middle
        >.collect
          margin-right 10px
        >.log
          margin-right 0

</style>
