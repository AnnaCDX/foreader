<template>
 <div class="synthesize">
   <div class="right-container" v-if="synthesizeInfo[0]">
     <WorkList v-for="(item,index) in synthesizeInfo "  :key="index" :per="item"></WorkList>
   </div>
   <div class="loading" v-else>
     <div class="loading-container">
       <img src="../../assets/img/tenor.gif" alt="">
     </div>
   </div>
 </div>
</template>

<script>
  import WorkList from "../../components/WorkList/WorkList"
  import Loading from "../../components/Loading/Loading"
  import {mapState} from "vuex"

  export default {
    data() {
        return {
          jiade:[1,1,1,1,1,1],
         }
    },
    mounted(){
      this.$store.dispatch("getSynthesizeInfo")
    },
    computed:{
      ...mapState(["synthesizeInfo"])
    },
    components:{
      WorkList,
      Loading
    }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 .synthesize
  .right-container
    width 748px
  .loading
   width 748px
   margin 20px auto
   background #fff
   height 434px
   text-align center
   line-height 434px
   img
     width 200px
     vertical-align middle

</style>
