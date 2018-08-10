<template>
  <div class="female-chanel back-color marginTop">
    <ModuleTitle :title="title"></ModuleTitle>
    <div class="female-body">
      <div class="fml-body-left">
        <div class="fml-left-content">
          <a href="javascript:;" class="book-img" @click="goDetail(item.data[0].bid)"><img v-lazy="item.data[0].poster" alt=""></a>
          <p class="book-name"><a href="javascript:;" @click="goDetail(item.data[0].bid)">{{item.data[0].title}}</a></p>
          <p class="book-click">点击数</p>
          <p class="book-author" v-for="(per,index) in item.data[0].authors" :key="index">{{per}}</p>
          <p class="book-intro" :title="item.data[0].description" >
            {{item.data[0].description}}
            <a href="javascript:;" class="ellipsis" @click="goDetail(item.data[0].bid)">...</a>
          </p>
          <a href="javascript:;" class="to-read" @click="goReading(item.data[0].bid)">阅读</a>
        </div>
      </div>
      <div class="fml-body-middle">
            <div class="list" v-for="(per,index) in item.data.slice(1,7)" :key="index">
              <a href="javascript:;" @click="goDetail(per.bid)"><img :src="per.poster" alt=""></a>
              <div class="book-info">
                <a href="javascript:;" @click="goDetail(per.bid)" :title="per.title">{{per.title}}</a>
                <p class="book-intro" :title="per.description">
                  {{per.description}}
                  <a href="javascript:;" class="ellipsis" @click="goDetail(per.bid)">...</a>

                </p>
                <p class="author-tag">
                  <a href="javascript:;" v-for="(author,index) in per.authors" :key="author">{{author}}</a>
                  <a href="javascript:;" >{{per.tags[0]}}</a>
                </p>
              </div>
            </div>


      </div>
      <div class="fml-body-right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import ModuleTitle from "../ModuleTitle/ModuleTitle"
  import VueLazyload from 'vue-lazyload'
  Vue.use(VueLazyload);

    export default {
        props:{
          item:Object,
          title:String
        },
      methods:{
        goReading(bid){
          let routeData = this.$router.resolve({ path: `/reading/${bid}`});
          window.open(routeData.href, '_blank')
        },
        goDetail(bid){
          let routeData = this.$router.resolve({ path: `/detail/bookIntro/${bid}`});
          window.open(routeData.href, '_blank')
        }
      },
        data() {
          return {

          }
        },
        components:{
          ModuleTitle
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  img
    object-fit cover
  .female-chanel
    padding:22px 20px

    .female-body
      overflow hidden

      .fml-body-left
        float: left
        width:166px
        background #f6f8fc
        .fml-left-content
          width: 142px
          margin:0 auto
          text-align center
          .book-img
            display inline-block
            margin-top 28px
            margin-bottom 10px
            img
              width:98px
              height 128px
              box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.45);
          .book-name
            font-size 16px
            a
              color: rgba(0,0,0,.85)
              font-weight: 500;
          .book-click
            margin:8px 0
            font-size 14px
            color #dc5b5b
          .book-author ,.book-intro
            font-size 12px
            color #9b9b9b
          .book-intro
            margin:12px auto 20px
            width 142px
            height 44px
            position: relative;
            overflow: hidden;
            font-size: 14px;
            line-height 1.5
            color #9b9b9b
            .ellipsis
              position: absolute;
              bottom: 0;
              right: 0;
              color rgba(0,0,0,.65)
              padding-left: 40px;
              font-size 18px
              background: linear-gradient(to right, rgba(255, 255, 255, 0), #f6f8fc 55%);
          .to-read
            display inline-block
            width:74px
            height:32px
            margin-bottom 22px
            border-radius: 4px;
            background-color: #f3799c;
            line-height 32px
            font-size 14px
            color: #fff

      .fml-body-middle
        float left
        overflow hidden
        width 500px
        margin-left 20px

        .list
          float: left
          width 232px
          margin-bottom 28px
          >a
            display inline-block
            img
              width:76px
              height:102px
              box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.45);
          .book-info
            float: right
            width:142px
            >a
              color rgba(0,0,0,.85)

              font-size: 16px;
              font-weight: 500;
              text-overflow ellipsis
              overflow hidden
              white-space nowrap
              width 142px
            .book-intro

              color: rgba(0, 0, 0, 0.65);
              margin-bottom 12px
              width 142px
              height 44px
              position: relative;
              overflow: hidden;
              font-size: 14px;
              line-height 1.5
              .ellipsis
                position: absolute;
                bottom: 0;
                right: 0;
                color rgba(0,0,0,.65)
                padding-left: 40px;
                font-size 18px
                background: linear-gradient(to right, rgba(255, 255, 255, 0), #fff 55%);
            .author-tag
              overflow hidden
              >a
                font-size 12px
                &:first-child
                  float left
                  color: #9b9b9b
                &:last-child
                  display block
                  width: 44px
                  height: 19px
                  float: right
                  border-radius: 2.4px;
                  border: solid 0.5px #4f6ac5;
                  text-align center
                  line-height: 19px
                  color: #4f6ac5


        .list:nth-child(2n+0)
          margin-left 35px
        .list:nth-child(5)
          margin-bottom 0
        .list:nth-child(6)
          margin-bottom 0
      .fml-body-right
        float: right
        .col-right
          width:224px
          li
            padding-top 1px
        .magic-col-right
          width:224px
          float: left
          li
            padding-top 3px
</style>
