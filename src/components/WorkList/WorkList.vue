<template>
  <div class="kindsOf-listItem">
    <ModuleTitle :title="per.title"><a href="javascript:;" @click="goMore(per.title)" slot="more" >更多</a></ModuleTitle>
    <div>
      <WorkListItem v-for="(each,index) in per.list || per.data" :key="index" :index="index" :each="each"></WorkListItem>
    </div>
  </div>
</template>

<script>
  import ModuleTitle from '../ModuleTitle/ModuleTitle'
  import WorkListItem from '../WorkListItem/WorkListItem'
    export default {
        props:{
          per:Object
        },
        data() {
            return{
              path:{
                "点击":"/rank/pv/pv",
                "评论":"/rank/comments/comments",
                "收藏":"/rank/fav/fav"
              },
              goWhere:""
            }
        },
      methods:{
        goDetail(per){
            //将数据存好传递给详情页
            this.book = per
            //详情页组件显示
            //  this.$ref.datail.toggleShow()
        },
        goMore(title){
          let t =  title.substring(0,2)

          this.$router.push(this.path[t])
          document.documentElement.scrollTop = 0
          document.body.scrolltop = 0
        }
      },
        components:{
          ModuleTitle,
          WorkListItem
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .module-title
    a
      text-decoration underline
  .kindsOf-listItem
    width:206px
    margin:30px 30px 24px 23px
    float: left

    &:last-child
      margin-right 28px

</style>
