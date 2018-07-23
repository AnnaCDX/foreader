<template>
  <div class="none-table">
    <Table :columns="columns1" :data="rechargeRecord[flag]" :disabled-hover=true></Table>
    <PageControl :flag="this.flag" :pageTab="this.pageTab" :skip="this.skip" :prevNext="this.prevNext" :data="this.rechargeRecord"></PageControl>
  </div>
</template>

<script>
  import {Table} from "iview"
  import {mapState} from "vuex"
  import PageControl from "../../components/PageControl/PageControl"
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
            key: 'time'
          },
          {
            title: '类型',
            key: 'pay_method'
          },
          {
            title: '赠送',
            key: 'give_amount'
          }
        ]
      }
    },
    mounted(){

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

          if(this.flag===this.rechargeRecord.length-1){
            return
          }
          this.flag ++
        }

        console.log(bool)
      }
    },
    computed:{
      ...mapState(['rechargeRecord'])
  },
    components:{
      Table,
      PageControl
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .none-table
    .ivu-table-wrapper
      border none


</style>
