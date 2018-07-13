<template>
  <div>
    <div class="msite-container">
      <div class="left">
        <div class="left-container">
          <div class="avatar-name">
            <img src="../../assets/img/loading.gif" alt="">
            <p>用户名称</p>
          </div>
          <div class="mine">
            <router-link to="/msite/homePage">我的主页</router-link>
            <router-link to="/msite/collection">我的收藏</router-link>
            <router-link to="/msite/wallet">我的钱包</router-link>
            <router-link to="/msite/shelter">我的书架</router-link>
          </div>
        </div>
      </div>
      <div class="homepage">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        dada() {
          return {
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.msite-container
  position relative
  height:100%
  padding-top 100px
  .left
    position absolute
    width:30%
    height:100%
    .left-container
      width: 33%
      margin:0 auto
      text-align: center
      .avatar-name
        img
          border-radius 50%
          width: 100px
          height: 100px
        p
          font-size 14px
          margin:15px 0 20px
      .mine
        a
          color: #000
          display block
          margin:5px 0
        .router-link-active
          color: lightpink
  .homepage
    position: absolute;
    left: 30%
    width:70%

</style>
