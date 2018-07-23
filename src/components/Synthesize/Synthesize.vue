<template>
  <div class="right-container">
    <WorkList v-for="(item,index) in jiade " :key="index"></WorkList>
  </div>
</template>

<script>
  import WorkList from "../../components/WorkList/WorkList"

  export default {
    data() {
        return {
          jiade:[1,1,1,1,1,1],
         }
        },
    components:{
      WorkList
    }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .right-container
    width 748px
</style>
