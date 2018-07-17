<template>
  <li><a class="rcmd-type">「玄幻」</a><a class="rcmd-name">重生最轻女滴</a><a class="authorname">作者名字</a></li>
</template>

<script>
    export default {
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
