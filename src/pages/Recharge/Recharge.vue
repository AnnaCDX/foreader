<template>
  <div>
    <div class="recharge-container">
      <div class="header-fix" >
        <div class="fix-body">
          <img src="" alt="">
          <div class="private" >
            <router-link to="/phone" class="phone-login"><img src="../../assets/img/web/home/sy_shoucang.png" alt="">收藏</router-link>
            <a class="phone-login" v-if="!loginInfo.id && !id" @click="closeTip"><img src="../../assets/img/web/home/login.jpg" alt="">登录</a>
            <router-link to="/msite" class="phone-login" v-else><img src="../../assets/img/web/home/login.jpg" alt="">个人中心</router-link>
          </div>
        </div>
      </div>
      <div class="recharge-main">
        <p class="recharge-title"> 速更小说充值</p>
        <div class="recharge-body">
          <p class="recharge-num">充值金额</p>
          <div class="rcg-num-container">
            <div class="recharge-detail" v-for="(item,index) in rechargeInfo" :key="index" :class="{isOn:item.recharge_face===recharge_face}" @click="changeMoney(item.recharge_face)">¥{{item.recharge_money}} <span>{{item.recharge_face + item.recharge_give}}</span></div>
          </div>
          <p class="recharge-type">充值方式</p>
          <div class="rcg-type-container">
            <div v-for="(item ,index) in shuju1 " class="alipay-type" :class="{whichWay:index+1==payType}" :key="item.font" @click="changeWay(index+1)">
              <img :src="item.img" alt="" >
              {{item.font}}
            </div>
          </div>
          <button class="pay-button" :disabled="!isRight" :class="{agree:isRight}" @click.prevent="pay">立即支付</button>
          <div class="agreement">
            <label><input name="isAgree" type="checkbox" v-model="isRight"/></label>
            <a href="###" class="is-agree">我同意《用户服务协议》</a>
          </div>
          <div class="no-duty">
            <p class="onduty-title">免责声明：</p>
            <div class="onduty-content">
              <p>1.请确保您的银行卡已开通网上银行服务，否则无法使用付款功能。</p>
              <p>2.付款后，请在“账户明细”查看充值记录，如因银行数据传输或网络信号延迟，造成资金未能及时到账，请联系在线客服！</p>
              <p>3.充值1元人民币可够买100币（1元=100币）</p>
              <p>4.金币仅限于速更小说使用，不能再兑换回人民币。</p>
              <p>5.苹果公司规定，网站充值金币无法在苹果手机使用，建议苹果手机用户下载速更小说APP进行充值。</p>
              <p>6.用户账户内的金币长期有效，如因服务调整，会提前以公告等形式通知用户。</p>
              <p>7.用户确认订阅/购买章节后将会扣除相应的金币，扣款成功即表示交易完成且不可撤销。用户不得要求退回内容和消费的金币。</p>
              <p>8.用户购买的VIP章节仅供用户个人阅读使用。如果用户的泄露或传播行为侵害到权利方、作者或者其他用户正当权益的，速更小说有权禁止该账户登录、并依法追究其法律责任。</p>
              <p>9.速更小说在法律允许范围内对金币的使用拥有解释权。</p>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import {mapState} from "vuex"
  import {reqPayUrl} from "../../api"
  export default {
        data() {
          return {
            url:"",
            isRight:false,
            recharge_face:600,
            payType:1,
            id:this.$cookie.get("id"),
            shuju1:[
              {img:require("../../assets/img/web/msite/zhifubao.png"),font:"支付宝"},
              {img:require("../../assets/img/web/msite/wechat.png"),font:"微信"}
              ],
          }
        },
        created(){
          this.$store.dispatch('recordRechargeInfo')
        },
        mounted(){
        },
        computed:{
          ...mapState(["rechargeInfo","loginInfo"]),
        },
        methods:{
          async pay(){
            let user_id = this.$cookie.get("id")
            let pay_method= this.payType==1? "H5ALIPAY":"H5WEIXIN"
            let {recharge_face} = this
            let result = await reqPayUrl(user_id,pay_method,recharge_face)
            this.url=result.pay_url;
            window.open(this.url)
          },
          changeMoney(index){
            this.recharge_face = index
          },
          changeWay(index){
            this.payType=index
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.recharge-container
  width: 100%
  .header-fix
    background: rgba(255,255,255,.65)
    margin-bottom: 20px;
    .fix-body
      width:990px
      height:40px
      line-height:40px
      margin:0 auto
      img
        width: 142px;
        height: 39px;
        object-fit cover
      .private
        float: right
        .phone-login
          display inline-block
          font-size 14px
          margin:0 8px
          img
            width 16px
            height 16px
            vertical-align middle
            margin-right 5px
  .recharge-main
    width:990px
    height 845px
    background #fff
    margin 0 auto
    .recharge-title

      font-size: 18px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      height 68px
      padding-left 30px
      line-height 68px
      border-bottom 1px solid #e8e8e8
    .recharge-body
      padding 0 30px
      .recharge-num

        font-size: 14px;
        color #9b9b9b
        margin 20px 0
      .rcg-num-container
        overflow hidden
        .recharge-detail
          width 190px
          height 56px
          border 1px solid #e8e8e8
          border-radius 4px
          float left
          margin-right 45px
          margin-bottom 20px
          text-align center
          font-size 20px
          line-height 56px
          span
            font-size 14px
            color rgba(0,0,0,.65)
        .isOn
          border 1px solid #4d8bee
          background #eaf8ff
      .recharge-type

        font-size: 14px;
        color #9b9b9b
        margin 0 0 20px
      .rcg-type-container
        overflow hidden
        margin-bottom 20px
        .alipay-type
          width 140px
          height 48px
          float left
          border 1px solid #e8e8e8
          border-radius 4px
          margin-right 20px
          line-height 42px

          font-size: 18px;
          text-align center
          color rgba(0,0,0,.85)
          img
            width 28px
            height 28px
            border-radius 50%
            vertical-align middle
            margin-right 12px
        .whichWay
          background #eaf8ff
          border 1px solid #4d8bee
      .pay-button
        width: 104px;
        height: 38px;
        border-radius: 4px;
        background-color: #4d8bee;

        font-size: 16px;
        color: #fff;
        margin-bottom 14px
      .agree
        background #2e8ded
      .agreement
        margin-bottom 33px
      .no-duty
        .onduty-title

          font-size: 14px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.85);
          font-size 14px
          margin-bottom 14px
        .onduty-content
          p

            font-size: 12px;
            line-height: 24px;
            color #9b9b9b
</style>
