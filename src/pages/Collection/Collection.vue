<template>
  <div>
    <div class="collection">
      <p class="collection-title"> 我的收藏(<span>32</span>)</p>
      <ul>
        <li>
          <img src="../../assets/img/loading.gif" alt="">
          <div class="book-info">
            <p class="name-words"><span class="name">草根也修仙</span><span class="words">10万</span>字</p>
            <div class="gray-info"><i class="icon iconfont icon-gerenzhongxin"></i><span class="flag">老鹰嗤笑</span> | <span class="tag">标签</span> <span class="click-num">3万</span>点击</div>
            <p class="paragragh">上课就困了就给我看几点了咖啡就是懒得看了几分感慨时间都解放了时间考虑的就放手离开就离开就离开就开了大家反馈来的就是反馈关键时刻老骥伏枥时间啊理解的佛教分</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        dada() {

        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .collection
    .collection-title
      color: #000
      font-size 12px
      margin-bottom 30px
    ul
      font-size 12px
      li
        overflow hidden
        width: 100%
        img, .book-info
          float: left
        img
          height: 150px
          width: 100px
          margin-right: 15px
        .book-info
          width:80%
          .name-words
            color: #000
            .name
              margin-right 30px
            .words
              margin-left 500px
          .gray-info
            color:#666
            margin:30px 0
            .icon
              color: #999
            .flag
              margin-right 8px
            .tag
              margin-left 8px
            .click-num
              margin-left 470px
          .paragragh
            color: #000




</style>
