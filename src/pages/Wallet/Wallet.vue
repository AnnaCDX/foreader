<template>
  <div class="wallet">
    <div class="assets">
      <p class="assets-title">我的资产</p>
      <div class="line"></div>
      <div class="my-assets">
        <div class="assets-info">
          <span>{{myWallet.primary_balance + myWallet.secondary_balance}}</span>
          <a href="###" @click.prevent="gotoRecharge">充值</a>
        </div>
        <p class="assets-coin"><span>{{myWallet.primary_balance}}</span>充值币| <span>{{myWallet.secondary_balance}}</span>赠送币</p>
      </div>
    </div>
    <div class="record">
      <div class="record-body">
        <div class="body-title">
          <span class="record-title">充值记录</span>
          <router-link to="/msite/wallet/expenseRcd">消费记录</router-link>
          <router-link to="/msite/wallet/rechargeRcd">充值记录</router-link>
        </div>
          <router-view></router-view>
          <!--<Page class-name="page" :total="10" size="small" show-elevator></Page>-->
        </div>
    </div>


  </div>
</template>

<script>
  import {mapState} from "vuex"
  import {Page} from "iview"
  import {reqRechargeInfo} from '../../api'
    export default {
        data() {
        return {

        }
      },
      mounted(){

      },
      computed:{
        ...mapState(["myWallet"]),
      },
      methods:{
        gotoRecharge(){
          this.$router.push('/recharge')
        }
      },
        components:{
         Page
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wallet
    width: 710px
    min-height: 710px
    padding: 0 30px 44px
    .assets
      margin-bottom 20px
      background #fff

      .assets-title
        font-family: PingFangSC;
        font-size: 18px;
        font-weight: 500;
        color rgba(0,0,0,.85)
        height 68px
        line-height 68px
        padding-left: 30px;
      .line
        border 1px solid #e8e8e8
      .my-assets
        .assets-info
          padding: 0 30px
          margin 8px 0
          span
            font-family: PingFangSC;
            font-size: 34px;
            font-weight: 500;
            color: rgba(0, 0, 0, 0.85);
          a
            font-family: PingFangSC;
            font-size: 14px;
            float: right
            margin-right: 30px
            color #fff
            border-radius: 4px;
            background-color: #4d8bee;
            width: 104px;
            height: 38px;
            line-height 38px
            text-align center
        .assets-coin
          padding: 0 30px
          font-size 14px
          color: #ccc


    .record
      background #fff
      .record-body
        min-height 442px
        .body-title
          padding 0 22px
          height 68px
          line-height 68px
          vertical-align middle
          span
            font-family: PingFangSC;
            font-size: 18px;
            color rgba(0,0,0,.85)
            font-weight: 500;
          a
            display inline
            border 3px solid #fff
            color: #999
            font-size 12px
            border-radius 4px
          .router-link-active
            color: #000
            background #f3799c
            border 3px solid #f3799c

      .ivu-page
        width 88px
        margin 30px auto 30px
        .ivu-page-item
          min-width 20px
          height 20px
</style>
