<template>
  <div class="per-left-list">
    <a href="javascript:;" class="per-type">「现代言情」</a>
    <a href="javascript:;" class="per-name">头号甜宠 恶魔小草，请好嗨</a>
    <a href="javascript:;" class="per-authorName">作者名字</a>
    <a href="javascript:;" class="per-character">第十七章 烟鬼寻常家</a>
    <span class="release-time">34分钟前</span>
  </div>
</template>

<script>
    export default {
        data() {
          return{

          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .per-left-list
    font-size 0
    height: 18px
    line-height 18px
    margin-bottom: 15px
    a
      display inline-block
      line-height:1
      font-family: PingFangSC;
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      vertical-align middle

    .per-type
      width: 84px;
      height: 14px;
      font-size: 14px;
      color: #9b9b9b
    .per-name
      width: 168px;
      height: 14px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.85);
    .per-authorName
      width: 48px;
      height: 12px;
      font-size: 12px;
      color: #637fa1;
      margin:0 55px
    .per-character
      width: 112px;
      height: 12px;
      font-size: 12px;
      color: #9b9b9b;
      margin-right:137px
    .release-time
      width: 51px;
      line-height 1
      height: 12px;
      font-size: 12px;
      color: #9b9b9b;
      vertical-align middle

</style>
