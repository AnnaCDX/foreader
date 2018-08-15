<template>
  <div class="list-body-right">
    <div class="top-right-list">
      <div class="right-list-left">
        <a href="javascript:;" class="list-book-name" @click="goDetail(per.bid)">{{per.title}}</a>
        <p class="daily-update">{{per.latestChapter.updatedFormated}}</p>
        <a href="javascript:;" class="list-author-name">{{per.mainAuthor.name}}</a>
      </div>
      <a href="javascript:;" class="list-book-img" @click="goDetail(per.bid)"><img v-lazy="per.poster" alt=""></a>
    </div>
    <p class="bottom-right-list">
      {{per.description}}
    </p>
  </div>
</template>

<script>
    export default {
        props:{
          index:Number,
          per:Object
        },
        data() {
          return {

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
  .list-body-right
    background #f6f8fc
    float: right
    padding:13px 16px
    margin-top:2px
    margin-bottom 16px
    .top-right-list
      overflow hidden
      .right-list-left
        float: left
        a
          display inline-block

        .list-book-name,.daily-update,.list-author-name
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
        .list-book-name
          width: 96px;
          height: 16px;
          font-size: 16px;
          font-weight: 500;
          line-height: 1;
          color: rgba(0, 0, 0, 0.85);
          margin-top 14px
        .daily-update
          width: 70px;
          height: 14px;
          font-size: 14px;
          font-weight: 500;
          line-height: 1;
          color: #dc5b5b;
          margin 18px 0 15px
        .list-author-name
          width: 48px;
          height: 14px;
          font-size: 12px;
          line-height: 1.17;
          color: #9b9b9b;
      .list-book-img
        float: right
        img
          width:70px
          height:91px
          box-shadow: 0 1px 4px 0 rgba(0,0,0,0.45);
    .bottom-right-list
      width: 194px;
      height: 66px;
      max-height 66px
      overflow hidden
      text-overflow ellipsis
      font-size: 12px;
      line-height: 1.83;
      color: #9b9b9b;
      margin-top 17px
</style>
