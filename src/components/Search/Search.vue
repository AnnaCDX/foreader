<template>
  <div>
    <div class="search-container">
      <HeaderWithSearch></HeaderWithSearch>
      <div class="header-bottom">
        <div class="bottom-content">
          <router-link to="/home">首页</router-link>
          <router-link to="/rank">排行榜</router-link>
          <router-link to="/library">书库</router-link>
          <router-link to="/write" class="write">
            <img src="../../assets/img/web/home/sy_xiezuopingtai.png" alt="">
            写作平台
          </router-link>
        </div>
      </div>
      <div class="search-main" v-if="searchResult.books" >
        <HeaderSearch :bname="bname"></HeaderSearch>
        <p class="search-result">共有<span>{{searchResult.total}}</span>条结果</p>
        <div class="result-list" v-if="searchResult.books.length">
          <ul>
            <li v-for="(item,index) in searchResult.books" v-show="item.bid" :key="index" >
              <img class="book-cover" :src="item.poster" alt="">
              <div class="book-info">
                <router-link  :to="'/detail/bookIntro/'+item.bid" class="name-words">{{item.title}}</router-link>
                <div class="gray-info">
                  <img class="author-avantar" :src="item.poster" alt="">
                  <span class="author-name" v-for="(per,index) in item.authors" :key="per">{{per}}</span>|
                  <router-link v-for="(per,index) in item.tags.slice(0,2)" class="type" :class="{comfort:index==2}" to="/type" :key="index">{{per}}</router-link>
                  <a href="javascript:;" class="type">{{item.status==0?"连载中":"已完结"}}</a>
                  <a href="javascript:;" class="type">{{item.categories[0]}}</a>
                </div>
                <p class="paragragh">
                  {{item.description}}
                  <a href="javascript:;" class="ellipsis">...</a>
                </p>
                <div class="words-click">
                  <p > <span>{{item.wordCount}}万</span>字</p>
                  <p > <span>3万</span>点击</p>
                </div>
              </div>
            </li>
          </ul>

          <RcdPageControl :act="'getSearchResult'" :data="{bname}" :total="new Array(Math.ceil(searchResult.total/limit))" :limit="limit"></RcdPageControl>

      </div>
        <div class="empty-collection" v-else>
          <div class="empty-main">
            <img src="../../assets/img/web/defaultLose/default_result.png" alt="">
            <p>没有搜索结果，你还可以去<router-link to="/library">书库</router-link>找书哦</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import {Input} from 'iview'
  import {mapState} from "vuex"
  import HeaderSearch from "../../components/HeaderSearch/HeaderSearch"
  import HeaderWithSearch from "../HeaderWithSearch/HeaderWithSearch"
  import RcdPageControl from "../RcdPageControl/RcdPageControl"
    export default {
        data() {
            return {
              offset:0,
              limit:10,
              bname:this.$route.params.bname
            }

        },
      mounted(){
      let {bname} = this.$route.params
        let {offset,limit} = this
        this.$store.dispatch("getSearchResult",{bname,offset,limit})
      },
      methods:{
      },
      computed:{
        ...mapState(["searchResult"]),
      },
      components:{
          Input,
          HeaderSearch,
          RcdPageControl,
          HeaderWithSearch
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.search-container
  width 100%
  height: 100%;
  min-height: 100vh;

  .header-fix
    .fix-body
      width:990px
      height:40px
      line-height:40px
      margin:0 auto
      img
        width: 142px;
        height: 40px;
        object-fit cover
      .private
        float: right
        phone-login
          display inline-block
          font-size 14px
          margin:0 8px
          .icon
            font-size:16px
  .header-bottom
    width: 100%
    background rgba(77,139,238,1)
    margin-bottom 20px
    .bottom-content
      position relative
      margin:0 auto
      width: 990px
      height: 48px
      line-height: 48px
      a
        display inline-block
        width: 80px
        height: 47px
        font-size 14px
        text-align center
        color: #eee
        vertical-align middle
      .router-link-active
        background #f3799c
        color: #fff
      .write
        position absolute
        right 0
        img
          width 16px
          height 16px
          vertical-align middle
  .search-main
    width 990px
    min-height 666px
    margin 0 auto
    background #fff
    padding 20px
    .top-center
      font-size:0
      text-align center
      .ivu-input-type
        width:261px
        .ivu-input
          border-radius 0
      span
        display inline-block
        vertical-align middle
        width:45px
        height:32px
        line-height 32px
        text-align center
        background rgba(77,139,238,1)
        .icon
          font-size 14px
    .search-result
      color #d9d9d9
      width 100px
      height 24px
      border-radius 2px
      background #f6f8fc
      text-align center
      line-height 24px
      span
        color #4D8BEE
    .result-list
      ul
        li
          overflow hidden
          width: 100%
          border-bottom 1px solid #e8e8e8
          padding 20px 0
          .book-cover, .book-info
            float: left
          .book-cover
            height: 121px
            width: 88px
            object-fit cover
            margin-right: 15px
            box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.35)
          .book-info
            width:88%
            position relative
            .name-words
              font-family: PingFangSC
              font-size: 16px
              font-weight: 500
              color: rgba(0, 0, 0, 0.85)
            .gray-info
              color:#666
              margin:14px 0 16px
              height 20px
              .author-avantar
                width 20px
                height 20px
                object-fit: cover;
                border-radius 50%
                vertical-align middle
              .author-name
                color #9b9b9b
                font-size 12px
                margin-right 15px
                position relative
                top 2px
              a
                border-radius: 2.4px;
                margin-left 13px
                padding 2px 6px
              .type
                border: solid 0.5px #4f6ac5;
              .comfort
                border: solid 0.5px #f3799c;
                color #f3799c
            .paragragh

              font-size: 14px;
              height 48px
              line-height 1.7
              color #9b9b9b
              max-height: 48px;
              overflow: hidden;
              .ellipsis
                position: absolute;
                bottom: 0;
                right: 0;
                color rgba(0,0,0,.65)
                padding-left: 40px;
                background: linear-gradient(to right, rgba(255, 255, 255, 0), #fff 55%);
            .words-click
              position absolute
              top 0
              right 0
              font-size 12px
              p
                color #9b9b9b
                span
                  color rgba(0,0,0,.85)



    .empty-collection
      .empty-main
        text-align center
        width 308px
        margin 0 auto
        margin-top 167px
        img
          width 96px
          height 96px
          object-fit cover
          margin-bottom 25px
        p

          font-size: 18px;
          line-height: 1.33;
          color: #cccccc;

</style>
