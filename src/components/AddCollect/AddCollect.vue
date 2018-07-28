<template>
  <button href="javascript:;" class="fav" @click.prevent="addCollection(bid)">加入收藏</button>
</template>

<script>
  import {addCollection} from '../../api'
  export default {
        props:{
          bid:String
        },
        data() {
            return {}
        },
      methods:{
        async addCollection(bid){
          let token = this.$cookies.get('tk')
          let config={
            headers:{
              "Authorization":"Bearer "+token
            }
          }
          let data = await addCollection(bid,config)
          let isSuccess = /^2\d{2}$/.test(data)
          isSuccess?alert("收藏成功"):alert("收藏失败")
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
