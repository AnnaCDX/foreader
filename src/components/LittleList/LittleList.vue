<template>
  <li><a class="rcmd-type">「玄幻」</a><a class="rcmd-name" @>{{per.title}}</a><a class="authorname" v-for="(each,index) in per.authors" :key="index">{{each}}</a></li>
</template>

<script>
    export default {
      props:{
        per:Object
      },
      data() {
        return {

        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/style/mixin.styl'

  li
    padding-top: 2px
    font-size:14px
    border-bottom 1px solid #e8e8e8
    a
      width 52px
      display inline-block
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
    .rcmd-type
      color: $authName_Intro
    .rcmd-name
      color: rgba(0,0,0,.85)
      width:89px
      margin-right:30px
    .authorname
      margin-right 0
      font-size 12px
      color: $authName_Intro
  &:last-child
    border-bottom none
</style>
