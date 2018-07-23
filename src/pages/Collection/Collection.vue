<template>
  <div>
    <div class="collection" v-if="collectionList.books">
      <p class="collection-title"> 我的收藏(<span>32</span>)</p>
      <div class="maybe-change" v-if="collectionList.books.length">
        <ul>
          <li v-for="(item,index) in collectionList.books">
            <img class="book-cover" :src="item.poster" alt="">
            <div class="book-info">
              <router-link  to="/detail"class="name-words">{{item.title}}</router-link>
              <div class="gray-info">
                <img class="author-avantar" :src="item.poster" alt="">
                <span class="author-name" v-for="(per,index) in item.authors">{{per}}</span>
                <router-link v-for="(per,index) in item.tags" class="type" :class="{comfort:index==2}" to="/type" :key="index">{{per}}</router-link>
              </div>
              <p class="paragragh">{{item.recDesc}}</p>
              <a href="javascript:;" @click.prevent="deleteCollect(item.bid)"><img src="../../assets/img/title.jpeg" alt="" title="删除收藏" ></a>
            </div>
          </li>
        </ul>
        <Page class-name="page" :total="10" size="small" show-elevator></Page>
      </div>
      <div class="empty-collection" v-else>
        <div class="empty-main">
          <img src="../../assets/img/title.jpeg" alt="">
          <p>还没有收藏的书哦</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Page} from "iview"
  import {mapState} from "vuex"
  import {deleteCollectList} from "../../api"
    export default {
        data() {
          return {

          }
        },
        methods:{
          async deleteCollect(bid){
            let baseData = {
              uid:this.$cookies.get("id"),
              bids:[bid]
            }
            let token = this.$cookies.get('tk')
            let data = baseData
            let config={
              headers:{
                "Authorization":"Bearer "+token,
                "Content-Type": "application/json",
                // "X-Merchant": "53cdd6f50cf261fadf0dd74c"
              },
              data: baseData
            }
            console.log(data,config)
            await deleteCollectList(config)
          }
        },
        computed:{
          ...mapState(["collectionList"])
        },
        components:{
          Page
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .collection
    height 710px
    background #fff
    padding: 0 30px 44px
    .collection-title
      height: 68px
      line-height 68px
      border-bottom 1px solid #e8e8e8
      font-family: PingFangSC;
      font-size: 18px;
      font-weight: 500;
      color rgba(0,0,0,.85)
    .maybe-change
      ul
        font-size 12px
        li
          overflow hidden
          width: 100%
          border-bottom 1px solid #e8e8e8
          padding 20px 0
          .book-cover, .book-info
            float: left
          .book-cover
            height: 118px
            width: 90px
            object-fit cover
            margin-right: 15px
          .book-info
            width:80%
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
              font-family: PingFangSC;
              font-size: 14px;
              line-height 1.7
              color #9b9b9b
            a
              >img
                width 18px
                height 18px
                position absolute
                bottom 0
                right 0


      .ivu-page
        width 88px
        margin 30px auto 30px
        .ivu-page-item
          min-width 20px
          height 20px
    .empty-collection
      .empty-main
        text-align center
        width 144px
        margin 0 auto
        margin-top 167px
        img
          width 96px
          height 96px
          object-fit cover
          margin-bottom 25px
        p
          font-family: PingFangSC;
          font-size: 18px;
          line-height: 1.33;
          color: #cccccc;

</style>
