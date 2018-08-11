<template>
  <div v-if="dealRecord.data">
    <Table :columns="columns1" :data="dealRecord.data" :disabled-hover=true></Table>
    <RcdPageControl :act="'getDealRecord'" :total="new Array(Math.ceil(dealRecord.total/limit))" :limit="limit"></RcdPageControl>
  </div>
</template>

<script>
  import {Table} from "iview"
  import {mapState} from "vuex"
  import RcdPageControl from "../RcdPageControl/RcdPageControl"

    export default {
      data () {
        return {
          offset:0,
          limit:2,
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
        let user_id = this.$cookie.get("id")
        let {limit,offset} = this
        this.$store.dispatch("getDealRecord",{user_id,offset,limit})
      },
      computed:{
        ...mapState(["dealRecord"])
      },
      watch:{
        dealRecord(){
          this.$emit("global:msite",2)
        }
      },
      methods:{

      },
      components:{
        Table,
        RcdPageControl
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .ivu-table-wrapper
      border none
</style>
