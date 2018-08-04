<template>
  <div class="none-table" v-if="rechargeRecord.data">
    <Table :columns="columns1" :data="rechargeRecord.data?rechargeRecord.data:[]" :disabled-hover=true></Table>
    <RcdPageControl :act="'getRechargeRecord'" :data="{user_id}" :total="new Array(Math.ceil(rechargeRecord.total/limit))" :limit="limit"></RcdPageControl>
 </div>
</template>

<script>
  import {Table} from "iview"
  import {mapState} from "vuex"
  import RcdPageControl from "../../components/RcdPageControl/RcdPageControl"
  export default {

    data () {
      return {
        limit:1,
        offset:0,
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
        ],
        user_id:this.$cookies.get("id")
      }
    },
    mounted(){
      let user_id=this.$cookies.get("id")
      let {limit,offset} = this
      this.$store.dispatch("getRechargeRecord",{user_id,offset,limit})

    },
    watch:{
      rechargeRecord(){
        this.$emit("global:msite",2)
      }
    },
    methods:{

    },
    computed:{
      ...mapState(['rechargeRecord'])
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
