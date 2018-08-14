<template>
  <div class="top-center">
    <Input placeholder="默认搜索词" class="tc-input" v-model="bname"/>
    <a class="skipTo" @click.prevent="gotosearch">
      <i class="icon iconfont icon-sousuo"></i>
    </a>
  </div>
</template>

<script>
  import {Input} from "iview"
    export default {
        // data() {
        //     return {
        //       bname:''
        //     }
        // },
      props:{
        bname:{
          type:String,
          default:"",
          required:false
        }
      },
      mounted(){

      },
      methods:{
        gotosearch(){
          let {bname} = this
          if(!bname){
            return
          }
          let routeData = this.$router.resolve({ path: `/search/${bname}`});
          window.open(routeData.href, '_blank')
        }
      },
      components:{
        Input
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .top-center
    font-size:0
    text-align center
    .ivu-input-type
      width:261px
      .ivu-input
        border-radius 0
    .skipTo
      position relative
      left -2px
      display inline-block
      vertical-align middle
      width:45px
      margin-top 1px
      height:32px
      line-height 32px
      text-align center
      background rgba(77,139,238,1)
      border-radius 0 4px 4px 0
      .icon
        font-size 14px
        color #fff
</style>
