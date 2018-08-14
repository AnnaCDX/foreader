<template>
  <div>
    <div class="library-container">
      <div class="library-main">
        <div class="main-left">


          <div class="already-select borderBottom">
            <p class="selected">已选</p>
            <div class="what-selected">
              <a href="javascript:;" v-text="type" v-show="type"></a>
              <a href="javascript:;" v-text="state" v-show="state"></a>
              <a href="javascript:;" v-text="attribute" v-show="attribute" ></a>
            </div>
          </div>


          <div class="type borderBottom">
            <p class="type-title">分类</p>
            <div class="type-body">
              <div class="item-container" v-for="(item,ind) in allCategory" :key="ind">
                <ul>
                  <li class="each-item" v-for="(per,index) in item" :key="index" v-if="per.id" @click="select(per.children,per.id,ind,per.name)" >
                    <a href="javascript:;" :class="{'list-active':per.id==cid}">{{per.name}}</a>
                    <div class="trangle" v-show="per.id==cid && children.length"></div>
                  </li>
                </ul>
                <div class="item-child" v-if="ind===parentIndex && children.length">
                  <a href="javascript:;" v-for="(item,index) in children" :key="index" :class="{'a-active':item.id==cid}" @click.prevent="selectChild(item.name,item.id)">{{item.name}}</a>
                </div>
              </div>
            </div>
          </div>


          <div class="state borderBottom">
            <p class="type-title">状态</p>
            <div class="state-body">
              <a href="javascript:;" v-for="(item,index) in stateData" :class="{isActive:item.status==status}" :key="index" @click="selectState(item.status,item.name)">{{item.name}}</a>
            </div>
          </div>


          <div class="state borderBottom">
            <p class="type-title">属性</p>
            <div class="state-body">
              <a href="javascript:;" v-for="(item,index) in stateData" :class="{isActive:item.status==free}" :key="index" @click="selectAttribute(item.status,item.otherName)">{{item.otherName}}</a>
            </div>
          </div>


        </div>
        <div class="main-right" v-if="!isLoading">
            <div class="right-container " v-if="categoryInfo.books.length">
              <ul>
                <li v-for="(item,index) in categoryInfo.books" v-show="item.title" :key="index">
                  <img class="book-cover" v-lazy="item.poster" alt="" @click="goDetail(item.bid)">
                  <div class="book-info">
                    <a href="javascript:;" class="name-words" @click="goDetail(item.bid)" :title="item.title">{{item.title}}</a>
                    <div class="gray-info">
                      <div class="little-info one">
                        <img class="author-avantar" v-lazy="item.poster" alt="">
                        <span class="author-name" v-for="(per,index) in item.authors" :key="index" :title="per">{{per}}</span>
                      </div>|
                      <div class="little-info two" v-if="item.tags">
                        <router-link v-for="(per,index) in item.tags.slice(0,3)" class="type" :class="{comfort:index==2}" to="/type" :key="index">{{per}}</router-link>

                      </div>
                    </div>
                    <p class="paragragh" :title="item.description">{{item.description}}
                    <a href="javascript:;" @click="goDetail(item.bid)" class="ellipsis">...</a>
                    </p>
                    <p class="word-count">{{item.wordCount/10000}}万</p>
                  </div>
                </li>
              </ul>

              <RcdPageControl  :act="'getCategoryInfo'" :data="{cid,status,free}" :total="new Array(Math.ceil(categoryInfo.total/limit))" :limit="limit"></RcdPageControl>
            </div>
            <div class="empty" v-else>让你搜，没书啦～</div>
        </div>
        <div class="loading" v-else>
          <div class="loading-container">
            <img src="../../assets/img/fy_loading.gif" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {mapState} from "vuex"
  import RcdPageControl from "../../components/RcdPageControl/RcdPageControl"
  import Loading from '../../components/Loading/Loading'
  import VueLazyload from 'vue-lazyload'
  Vue.use(VueLazyload);


  export default {
    data(){
      return {
        type:"",
        state:"",
        attribute:'',
        limit:20,
        offset:0,
        cid:9999,
        status:0,
        free:0,
        flag:0,
        isLoading:true,
        parentIndex:0,
        children:[],
        stateData:[
          {name:"不限",otherName:"不限",status:0},
          {name:"连载",otherName:"免费",status:1},
          {name:"完结",otherName:"付费",status:2}
        ]
      }
    },
    computed:{
      ...mapState(["allCategory","categoryInfo"]),
    },
    watch:{
      categoryInfo(){
        this.isLoading = false
      },
      deep:true
    },
    methods:{
      goDetail(bid){
        let routeData = this.$router.resolve({ path: `/detail/bookIntro/${bid}`});
        window.open(routeData.href, '_blank')
      },
      select(children,id,ind,name){
        this.isLoading = true
        this.cid = id
        this.parentIndex = ind
        this.children = children
        this.type = name
        let {cid,status,free,limit,offset} = this
        this.$store.dispatch("getCategoryInfo",{cid,status,free,offset,limit})

      },
      selectChild(name,id){
        this.isLoading = true

        this.type = name
        this.cid = id
        let {cid,status,free,limit,offset} = this
        this.$store.dispatch("getCategoryInfo",{cid,status,free,offset,limit})

      },
      selectState(id,name){
        this.isLoading = true

        this.status = id
        this.state = name
        let {cid,status,free,limit,offset} = this
        this.$store.dispatch("getCategoryInfo",{cid,status,free,offset,limit})
      },
      selectAttribute(id,name){
        this.isLoading = true

        this.free = id
        this.attribute = name
        let {cid,status,free,limit,offset} = this
        this.$store.dispatch("getCategoryInfo",{cid,status,free,offset,limit})
      }
    },
    mounted(){
      let {cid,status,free,limit,offset} = this
      this.$store.dispatch("getAllCategory")
      this.$store.dispatch("getCategoryInfo",{cid,status,free,offset,limit})
    },
    components:{
      RcdPageControl,
      Loading
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.library-container
  width 100%
  margin-top 20px
  .library-main
    width 990px
    overflow hidden
    margin 0 auto
    .main-left
      width 220px
      min-height 749px
      float left
      padding 24px 10px
      background #fff
      .borderBottom
        border-bottom 1px solid #e8e8e8
        padding-bottom 16px
        margin-bottom 20px
        .type-title
          font-size: 12px;
          font-weight: 600;
          margin-bottom 20px
          color #000
      .already-select
        .selected

          font-size: 12px;
          line-height: 1;
          color: #9b9b9b;
        .what-selected
          a
            margin-top 12px
            padding 2px 6px
            background #f3799c
            border-radius 2px
            font-size 12px

            color #fff
      .type
        .type-body
          .item-container
            ul
              overflow hidden
              .each-item
                position relative
                float: left
                margin-right 15px
                &:last-child
                  margin 0
                a
                  color rgba(0, 0, 0, 0.85)
                  /*margin-bottom 10px*/
                  padding 2px 6px
                  border-radius 2px
                  margin-bottom 10px
                .list-active
                  background #4d8bee
                  color #fff
                .trangle
                  position: absolute
                  left 50%
                  bottom 0
                  margin-left -2px
                  height: 0px;
                  width: 0px;
                  border-left: 2px solid rgba(255, 255, 255, 0);
                  border-right: 2px solid rgba(255, 255, 255, 0);
                  border-bottom: 4px solid rgba(219, 237, 255, 0.7);
            .item-child
              padding 10px 2px
              border-radius: 1px;
              background-color: rgba(219, 237, 255, 0.7);
              border: solid .5px #e8e8e8;
              border-top none
              margin-bottom 15px
              a
                color rgba(0, 0, 0, 0.65)
                margin-right 15px
                padding 2px
                border-radius 2px
              a:nth-child(3n+0)
                  margin 0
              .a-active
                background #4d8bee
                color #fff

      .state
        .state-body
          margin-top 14px
          a
            margin-right 15px
            padding 2px 6px
            color rgba(0,0,0,.85)
            border-radius 2px
          .isActive
            background #4d8bee
            color #fff
    .main-right
      width 748px
      float right
      min-height 749px
      padding 20px
      background #fff
      .right-container
        ul
          overflow hidden
          margin-bottom 20px
          li
            overflow hidden
            float left
            width: 50%
            height 173px
            position relative
            border-bottom 1px solid #e8e8e8
            padding 20px 0 10px 0
            .book-cover, .book-info
              float: left
            .book-cover
              height: 121px
              width: 88px
              object-fit cover
              margin-right: 15px
              box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.35)

            .book-info
              width:70%
              position relative
              .name-words
                font-family: PingFangSC
                font-size: 16px
                font-weight: 500
                color: rgba(0, 0, 0, 0.85)
                width 220px
                line-height 1.2
                text-overflow ellipsis
                overflow hidden
                white-space nowrap
              .gray-info
                color:#666
                margin:0 0 5px
                height 25px
                white-space nowrap
                overflow hidden
                .little-info

                  &:first-child
                    width 25%
                    float: left
                  &:last-child
                    width 68%
                    float right
                  .author-avantar
                    width 14px
                    height 14px
                    object-fit: cover;
                    border-radius 50%
                    vertical-align middle

                  .author-name
                    color #9b9b9b
                    font-size 12px
                    width 34px
                    text-overflow ellipsis
                    overflow hidden
                    white-space nowrap
                    display inline-block
                    vertical-align middle
                  a
                    border-radius: 2.4px;
                    margin-left 13px
                    padding 0 6px
                    &:first-child
                      margin-left 10px
                  .type
                    border: solid 0.5px #4f6ac5;
                  .comfort
                    border: solid 0.5px #f3799c;
                    color #f3799c
              .paragragh

                width 226px
                position: relative;
                height 48px
                max-height: 48px;
                overflow: hidden;
                margin-top 10px
                font-size: 14px;
                line-height 1.7
                color rgba(0,0,0,.65)
                .ellipsis
                  position: absolute;
                  bottom: 0;
                  right: 0;
                  color rgba(0,0,0,.65)
                  padding-left: 40px;
                  background: linear-gradient(to right, rgba(255, 255, 255, 0), #fff 55%);
              .word-count
                color #9b9b9b
                font-size 12px
                font-family "PingFang SC"
                position absolute
              a
                >img
                  width 18px
                  height 18px
                  position absolute
                  bottom 0
                  right 0
      .empty
        text-align center
        min-height 749px
        line-height 749px
        font-size 18px
        font-weight 600
        color pink

    .loading
      float: right
      width 748px
      margin 0 auto
      background #fff
      height 749px
      text-align center
      line-height 600px
      img
        width 200px
        vertical-align middle

</style>
