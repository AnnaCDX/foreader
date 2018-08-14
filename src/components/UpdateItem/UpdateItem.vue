<template>
  <div class="per-left-list">
    <a href="javascript:;" class="per-type" v-if="per.categories.length > 0">「{{per.categories[0]}}」</a>
    <a href="javascript:;" class="per-name" @click="goDetail(per.bid)">{{per.title}}</a>
    <a href="javascript:;" class="per-authorName">{{per.mainAuthor.name}}</a>
    <!--<a href="javascript:;" class="per-character">{{per.latestChapter.title}}</a>-->
    <!--<span class="release-time">{{per.updatedFormated}}</span>-->
  </div>
</template>

<script>
    export default {
        props:{
          index:Number,
          per:Object
        },
        data() {
          return{

          }
        },
      methods:{
        goDetail(bid){
          let routeData = this.$router.resolve({ path: `/detail/bookIntro/${bid}`});
          window.open(routeData.href, '_blank')
        },
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .per-left-list
    font-size 0
    height: 18px
    line-height 18px
    margin-bottom: 16px
    a
      display inline-block
      line-height:1

      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      vertical-align middle

    .per-type
      width: 90px;
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
      height: 14px;
      font-size: 14px;
      color: #637fa1;
      margin:0 55px
    .per-character
      width: 148px;
      height: 14px;
      font-size: 14px;
      color: #9b9b9b;
    .release-time
      line-height 1
      height: 12px;
      font-size: 12px;
      color: #9b9b9b;
      vertical-align middle
      margin-left  110px


</style>
