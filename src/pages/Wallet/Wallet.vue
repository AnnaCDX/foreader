<template>
  <div class="wallet">
    <div class="assets">
      <p class="assets-title">我的资产</p>
      <div class="my-assets">
        <p class="balance-title">账户余额</p>
        <div class="assets-info">
          <span>100</span>
          <router-link to="/recharge">充值</router-link>
        </div>
        <p class="assets-coin"><span>100</span>充值币| <span>0</span>赠送币</p>
      </div>
    </div>
    <div class="record">
      <p class="record-title">充值记录</p>
      <div class="record-body">
        <div class="body-title">
          <router-link to="/msite/wallet/expenseRcd">消费记录</router-link>
          <router-link to="/msite/wallet/rechargeRcd">充值记录</router-link></div>
          <router-view></router-view>
      </div>

    </div>

  </div>
</template>

<script>
    export default {
        dada() {

        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wallet
    .assets
      margin-bottom 20px
      /*height 150px*/
      .assets-title
        font-size 12px
        margin-bottom 20px
      .my-assets
        padding-left 20px
        .balance-title

        .assets-info
          margin 8px 0
          span
            font-size 16px
          a
            font-size 16px
            float: right
            margin-right: 30px
        .assets-coin
          font-size 14px
          color: #ccc


    .record
      .record-title
        margin-bottom 5px
      .record-body
        border 1px solid #999
        padding:5px
        .body-title
          a
            color: #999
          .router-link-active
            color: #000
            border-bottom 3px solid #ccc


</style>
