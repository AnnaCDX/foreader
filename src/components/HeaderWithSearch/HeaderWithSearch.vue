<template>
  <div class="header-fix" >
    <div class="fix-body">
      <router-link to="/home">
      <img class="logo" src="../../assets/img/web/home/logo.png" alt="">
      </router-link>
      <slot name="headerSearch"></slot>
      <div class="private" >
        <a href="javascript:;" class="phone-login collect" @click="goMsite()"><img src="../../assets/img/web/home/sy_shoucang.png" alt="">收藏</a>
        <a class="phone-login log" v-if="!loginInfo.id && !id" @click="showLoginDialog"><img src="../../assets/img/web/home/login.jpg" alt="">登录</a>
        <a href="javascript:;" class="phone-login log" v-else>
          <img  :src="userInfo.avatar" alt="">
          <a href="javascript:;">{{userInfo.name}}</a>
          <div class="msite-list">
            <router-link  to="/msite">
              <img src="../../assets/img/web/home/login.jpg" alt="">
              个人中心
            </router-link>
            <a href="javascript:;" @click="goOut()">
              <img src="../../assets/img/web/home/logout.jpg" alt="">
              退出账户</a>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState,mapActions} from "vuex"
  import {logOut} from "../../api"
    export default {
      data() {
        return {
          id:this.$cookie.get("id"),

        }
      },
      computed:{
        ...mapState(['loginInfo',"userInfo",'login']),
      },
      mounted(){
        this.getInfo()

      },
      watch:{
        loginInfo(){
          this.getInfo()
        }
      },
      methods:{
        ...mapActions(['recordNewUserInfo',"deleteInfo"]),
        getInfo(){
          let token = this.$cookie.get('web_tk')
          let config={
            headers:{
              "Authorization":"Bearer "+token
            }
          }
          let id = this.$cookie.get("id")
          if(id){
            this.$store.dispatch("getInfor",{id,config})
          }
        },
        showLoginDialog(){
          this.$store.dispatch("showLoginDialog",true)
        },
        goMsite(){
          if (this.$cookie.get("id")) {
            this.$router.push(`/msite/collection`)
          } else {
            this.showLoginDialog()
          }
        },
        async goOut(){

          let token = this.$cookie.get('web_tk');
          if(token){
            await logOut(token);
          }

          this.$cookie.delete("id");
          this.$cookie.delete('web_tk');
          if(this.loginInfo.id){
            this.$store.dispatch("loginDialog",false)
            let userInfo = {};
            this.deleteInfo({userInfo})
          }else{
            window.location.reload()
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
        >.phone-login
          position relative
          display inline-block
          font-size 14px
          height 48px
          line-height 48px
          margin:0 8px
          color rgba(0,0,0,.85)
          >img
            width 16px
            height 16px
            margin-right 5px
            vertical-align middle
          .msite-list
            display none
            background rgba(255,255,255,1)
            position absolute
            top 47px
            right 0
            z-index 300
            >a
              display block
              height 32px
              width 134px
              text-align center
              line-height 32px
              img
                width 14px
                height 16px
                margin-right 14px
                vertical-align middle
              &:hover
                background #EDF3FD
        >.collect
          margin-right 10px
        >.log
          float: right
          margin-right 0
          img
            border-radius 50%
          &:hover
            .msite-list
              display block


</style>
