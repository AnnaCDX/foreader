<template>
  <div class="footer  marginTop">

    <div class="all-friends">
      <span>合作伙伴：</span>
      <a href="http://www.ireader.com/">掌阅书城</a>
      <a href="http://www.quyuewang.cn/" title="趣阅中文网" target="_blank">趣阅中文网</a>
      <a href="http://www.hongshu.com/" title="红薯中文网" target="_blank">红薯中文网</a>
      <a href="http://www.iciyuan.com/" title="i次元轻小说" target="_blank">i次元轻小说</a>
      <a href="http://www.pinyuew.com/" title="品阅中文网" target="_blank">品阅中文网</a>
      <a href="http://www.zhangyue.com" title="品阅中文网" target="_blank">掌阅科技</a>
      <a href="http://www.shenqiwang.cn" title="品阅中文网" target="_blank">神起中文网</a>

    </div>
    <div class="center">
      <router-link to="/helpCenter" >帮助中心</router-link>
      <router-link to="/privacy">隐私策略</router-link>
      <router-link to="/aggreement">使用协议</router-link>
    </div>
    <p class="back-for">京ICP备18037521号-1备案号</p>
    <p class="back-for">所有作者发布作品时无比遵守国家互联网信息管理办法规定，我们拒绝任何色情小说，一经发现，即作删除！举报邮箱：jubao@foreader.cn</p>
    <p class="back-for">本站所收录作品、社区话题、书库评论及本站所做之广告均属其个人行为，与本站立场无关。</p>
    <p class="copy-right ">CopyRight &copy; 2018 foreader.com.cn All Rights Reserved</p>
    <div class="copy-img">
      <img src="../../assets/img/web/home/jubaoapp.png" alt="">
      <img src="../../assets/img/web/home/jubaoweb.png" alt="">

    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footer
    width: 990px;
    display block
    margin-left auto
    margin-right auto
    margin-top 20px
    .friend-title
      color #000
      font-family "PingFang SC"
      font-weight 600
      font-size 14px
      padding-top 30px
      padding-left 20px
    .all-friends
      margin-top 6px
      text-align center
      a
        margin-left 20px
        font-size 14px
        color rgba(0,0,0,.85)
    .copy-right
      margin 0
      margin-left auto
      margin-right auto
      padding-bottom 30px
      width 720px
      color rgba(0,0,0,.45)
      text-align center
    .center
      width 720px
      margin 30px auto 25px
      text-align center
      a
        color rgba(0,0,0,.65)
        padding-left 20px
        padding-right 20px
    .back-for
      color rgba(0,0,0,.45)
      text-align center
      margin-bottom 5px
    .copy-img
      text-align center
      img
        width 142px
        height 54px
        margin-right 30px

</style>
