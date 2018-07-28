<template>
  <div>
    <Table :columns="columns1" :data="dealRecord[flag]" :disabled-hover=true></Table>
    <PageControl :flag="this.flag" :pageTab="this.pageTab" :skip="this.skip" :prevNext="this.prevNext" :data="this.dealRecord"></PageControl>
  </div>
</template>

<script>
  import {Table} from "iview"
  import {mapState} from "vuex"
  import PageControl from "../PageControl/PageControl"
    export default {
      data () {
        return {
          loading: true,
          flag:0,
          columns1: [
            {
              title: '消费金额',
              key: 'recharge_amount'
            },
            {
              title: '消费时间',
              key: 'trade_time'
            },
            {
              title: '类型',
              key: 'book_name'
            },
            {
              title: '备注',
              key: 'book_name'
            }
          ],
        }
      },
      mounted(){
        let user_id = this.$cookies.get("id")
        this.$store.dispatch("getDealRecord",{user_id})
      },
      computed:{
        ...mapState(["dealRecord"])
      },
      methods:{
        pageTab(index){
          this.flag = index
        },
        skip(page){
          this.flag=page-1
        },
        prevNext(bool){
          if(bool===true){

            if(this.flag===0){
              return
            }
            this.flag--
          }else{

            if(this.flag===this.dealRecord.length-1){
              return
            }
            this.flag ++
          }
        }
      },
      components:{
        Table,
        PageControl
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
