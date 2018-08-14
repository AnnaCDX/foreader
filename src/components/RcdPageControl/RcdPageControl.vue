<template>
  <div class="pageControl">
    <div class="pageControl-main">
      <!--:disabled="this.arr[0]<=1 && flag===0"-->
      <a href="javascript:;"  class="prev" :disabled="min<=0 && flag<=0" @click.prevent="prevNext(true)"><i class="icon iconfont icon-jiantou-zuo"></i></a>
      <a href="javascript:;" class="page-btn"  v-show="isEllipsis" @click="another(true)">...</a>
      <a href="javascript:;" class="page-btn" v-for="(item,index) in total" :class="{'page-btn-active':index==flag}" @click="pageTab(index)" v-text="index+1" :key="index" v-show="min<=index&&index<max"></a>
      <a href="javascript:;" class="page-btn" @click="another(false)" v-show="total.length>max">...</a>
      <a href="javascript:;" class="next" :disabled="max>total.length && flag>=total.length-1" @click.prevent="prevNext(false)"><i class="icon iconfont icon-jiantou-you"></i></a>
      <input type="text" class="page-input" v-model="page">
      <a href="javascript:;" class="skip" @click.prevent="skip(page)">GO</a>
    </div>
  </div>
</template>

<script>
    export default {
      props:{
        act:String,
        total:Array,
        limit:Number,
        data:Object
      },
      data() {
            return {
              flag:0,
              isEllipsis:false,
              offset:0,
              page:1,
              max:5,
              min:0
            }
        },
      mounted(){
      },
      methods:{
        another(bool){
          if(bool){
            this.min -= 5
            this.max -= 5
            if(this.min<=0){
              this.isEllipsis = false
            }
          }else{
            this.isEllipsis = true
            this.min += 5
            this.max += 5
          }
          this.flag = this.min

          // 发送请求
          this.offset = this.flag*this.limit
          let {offset,limit,data} = this
          this.$store.dispatch(this.act,{...data,offset,limit})
        },
        pageTab(index){
          this.flag = index
          this.offset = this.flag*this.limit
          let {offset,limit,data} = this
          this.$store.dispatch(this.act,{...data,offset,limit})
        },
        skip(page){
          this.flag=page-1
          if(page<this.min){
            this.min -= 5
            this.max -= 5
            if(this.min<=0){
              this.isEllipsis = false
            }
          }else if(page>this.max){
            this.isEllipsis = true
            this.min += 5
            this.max += 5
          }
          this.offset = this.flag*this.limit
          let {offset,limit,data} = this
          this.$store.dispatch(this.act,{...data,offset,limit})
        },
        prevNext(bool){
          if(bool){
            this.flag--
            this.flag = this.flag<=0?0:this.flag

            if(this.flag<this.min){
              this.min -= 5
              this.max -= 5
              this.min = this.min<=0?0:this.min
              this.max = this.max<=5?5:this.max
              this.flag = this.max-1
              if(this.min<=1){
                this.isEllipsis = false
              }

            }
            this.offset = this.flag*this.limit
            let {offset,limit,data} = this
            this.$store.dispatch(this.act,{...data,offset,limit})

          }else{
            this.flag ++
            if(this.flag>this.max-1){
              this.isEllipsis = true
              this.min += 5
              this.max += 5
              this.flag = this.min
            }

            this.offset = this.flag*this.limit
            let {offset,limit,data} = this

            this.$store.dispatch(this.act,{...data,offset,limit})

          }
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .pageControl
    padding-bottom: 20px;
    width 100%
    margin-top 26px
    .pageControl-main
      width 400px
      margin 0 auto
      text-align center
      a
        vertical-align bottom
      .icon
        width 12px
        height 12px
        color #bfbfbf
        font-size 12px
      .prev
        margin-right 22px
      .page-btn
        width 20px
        height 20px
        background #d9d9d9
        text-align center
        line-height 20px
        font-size 12px
        color #fff
        margin-right 10px
        border-radius 4px
      .page-btn-active
        background #2d8cf0
      .next
        margin-left 12px
      .page-input,.skip
        width 36px
        height 20px
        border 1px solid #d9d9d9
        border-radius 4px
        margin-left 5px
        text-align center
        line-height 20px
        color rgba(0,0,0,.65)
        font-size 12px


</style>
