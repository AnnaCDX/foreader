<template>
  <div class="kindsOf-listItem">
    <ModuleTitle :cls="'icon-sousuo'" :title="'热搜榜'"><a href="javascript:;" slot="more">更多</a></ModuleTitle>
    <div>
      <!--v-for="(per,index) in shuju1"  @click="goDetail(index)" :key="index"-->
      <WorkListItem v-for="(per,index) in shuju1"  @click="goDetail(index)" :key="index" :index="index"></WorkListItem>
    </div>
  </div>
</template>

<script>
  import ModuleTitle from '../ModuleTitle/ModuleTitle'
  import WorkListItem from '../WorkListItem/WorkListItem'
    export default {
        data() {
            return{
              shuju1:[1,2,3,4,5,6,7,8,9,10],
              book:{}
            }
        },
      methods:{
        goDetail(per){
            //将数据存好传递给详情页
            this.book = per
            //详情页组件显示
            //  this.$ref.datail.toggleShow()
        }
      },
        components:{
          ModuleTitle,
          WorkListItem
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .kindsOf-listItem
    width:206px
    margin:24px 30px 24px 12px
    float: left

    &:last-child
      margin-right 28px

</style>
