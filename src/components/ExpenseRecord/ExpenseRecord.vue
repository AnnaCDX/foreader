<template>
  <div>
    <Table :columns="columns1" :data="data1" disabled-hover="true"></Table>
  </div>
</template>

<script>
  import {Table} from "iview"
    export default {
      data () {
        return {
          loading: true,
          columns1: [
            {
              title: '消费金额',
              key: 'money'
            },
            {
              title: '消费时间',
              key: 'time'
            },
            {
              title: '类型',
              key: 'type'
            },
            {
              title: '备注',
              key: 'note'
            }
          ],
          data1: [
            {
              money: '圣诞节',
              time: 18,
              type: 'New York No. 1 Lake Park',
              note: '2016-10-03'
            },
            {
              money: '圣诞节',
              time: 18,
              type: 'New York No. 1 Lake Park',
              note: '2016-10-03'
            },
            {
              money: '圣诞节',
              time: 18,
              type: 'New York No. 1 Lake Park',
              note: '2016-10-03'
            },
            {
              money: '圣诞节',
              time: 18,
              type: 'New York No. 1 Lake Park',
              note: '2016-10-03'
            }
          ]
        }
      },
      components:{
        Table
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
