<template>
  <div>
    <div class="msite-container">
      <div class="left">
        <div class="left-container">
          <div class="avatar-name">
            <img :src="userInfo.avatar" alt="">
            <p>{{userInfo.name}}</p>
          </div>
          <div class="mine">
            <a v-for="(item,index) in listData"  :key="index" @click="changeTab(index,item.path)" :class="{'router-link-active':index===clickWhich}">
              <img :src="index===clickWhich?item.activeSrc:item.baseSrc" alt="" />
              {{item.title}}</a>

          </div>
        </div>
        <div class="homepage">
          <router-view></router-view>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
    export default {
        data() {
          return {
            clickWhich:0,
            listData:[
              {title:"我的主页",path:'/msite/homePage' ,baseSrc:require("../../assets/img/web/msite/wodezhuye_grey.png"),activeSrc:require("../../assets/img/web/msite/wodezhuye.png")},
              {title:"我的收藏",path:'/msite/collection' ,baseSrc:require('../../assets/img/web/msite/wodeshoucang_grey.png'),activeSrc:require('../../assets/img/web/msite/wodeshoucang.png')},
              {title:"我的钱包",path:'/msite/wallet' ,baseSrc:require('../../assets/img/web/msite/wodeqianbao_grey.png'),activeSrc:require('../../assets/img/web/msite/wodeqianbao.png')}
            ]
          }
        },
      created(){
        let id = this.$cookie.get("id")
        let token = this.$cookie.get('tk')
        let config={
          headers:{
            "Authorization":"Bearer "+token
          }
        }
        let user_id = id
        this.$store.dispatch("getInfor",{id,config}),
          this.$store.dispatch("getWalletInfo",{user_id,config})
      },
      mounted(){
        this.$on("global:msite",(item)=>{
          this.clickWhich = item
        })
      },
      methods:{
        changeTab(index,path){
          this.clickWhich = index
          this.$router.push(path)
        }
      },
        computed:{
          ...mapState(['userInfo'])
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.msite-container
  width:100%
  .left
    overflow hidden
    width: 990px
    margin 20px auto 20px

    .left-container
      float: left
      width:260px
      height:620px
      background #fff
      border-radius 10px 4px
      .avatar-name
        width: 100%
        height: 208px
        border-radius: 4px;
        background url("../../assets/img/web/msite/grzx_bg.png")
        text-align center
        padding-top: 41px;
        img
          border-radius 50%
          width: 100px
          height: 100px
        p
          font-size 14px
          margin:15px 0 20px
      .mine
        margin-top: 40px
        a
          color: #000
          display block
          height:48px
          line-height 48px
          padding-left 29px
          img
            height 20px
            width 20px
            margin-right 17px
            vertical-align: middle
        .router-link-active
          color: #4d8bee
          padding-left 26px

          border-left 3px solid #4d8bee
    .homepage
      float:right
      width:710px


</style>
