<template>
  <button href="javascript:;" class="fav" @click.prevent="addCollection(bid)">加入收藏</button>
</template>

<script>
  import {addCollection} from '../../api'
  import {mapState} from "vuex"

  export default {
        props:{
          bid:String
        },
        data() {
            return {}
        },
        computed:{
          ...mapState(["loginInfo"])
        },
        methods:{
          async addCollection(bid){
            if (this.$cookie.get("id")) {
              let token = this.$cookie.get('tk')
              let config={
                headers:{
                  "Authorization":"Bearer "+token
                }
              }
              let data = await addCollection(bid,config)
              let isSuccess = /^2\d{2}$/.test(data)
              isSuccess?alert("收藏成功"):alert("收藏失败")
            } else {
              this.$store.dispatch("showLoginDialog",true)
            }

          },
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
