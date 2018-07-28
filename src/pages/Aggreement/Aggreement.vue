<template>
  <div class="text-container">
    <vueHeadful
      title="用户协议"
      description="速更-用户协议"
    />
    <h2>速更小说软件使用协议</h2>
    <p>
速更小说软件使用协议（以下简称“本协议”）是北京复阅科技有限公司（以下简称“复阅科技”）与您就 “速更小说”软件（以下简称“速更小说”或“本软件”）的安装及使用等相关事项所订立的有效合约。您通过点击确认本协议或以其他方式选择接受本协议，即表示您已与复阅科技达成协议并同意接受本协议的全部如下约定内容。
    </p>
    <br>
    <p>
一、请务必认真阅读和理解本协议中规定的所有权利和限制。您一旦安装、复制、下载、访问或以其它方式使用速更小说产品，将视为对本协议的接受，即表示您同意接受本协议各项条款的约束。您务必保证从复阅科技指定的站点下载速更小说产品以及复阅科技发行的介质上获得速更小说产品，否则因此导致可能的风险及损失，复阅科技不承担任何责任。
    </p>
    <br>
    <p>
      3、您对我们产品或服务的使用情况，例如使用时长、阅读记录等数据。
    </p>


    <h2>二、权利声明</h2>
    <p>
      1、复阅科技系速更小说的著作权人，速更小说的一切知识产权，以及与速更小说相关的所有信息内容，包括但不限于文字表述及其组合、图标、图饰、图像、图表、色彩、界面设计、版面框架、有关数据、附加程序、印刷材料或电子文档等均为复阅科技所有，受著作权法和国际著作权条约以及其他知识产权法律法规的保护。

    </p>


  </div>
</template>

<script>
import Vue from 'vue';
import vueHeadful from 'vue-headful';
  export default {
    data() {
      return {

      }
    },
    methods:{

    },
    components:{
      vueHeadful
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  text-primary= rgba(0,0,0,.85)
  text-secondary = rgba(0,0,0,.65)
  .first-intro
    font-weight: bold
  .text-container
    background-color: white
    padding-left: 85px
    padding-right: 85px
    padding-top: 77px
    width: auto
    font-family:
     system, -apple-system, BlinkMacSystemFont,
     "PingFang SC", "Segoe UI", "Microsoft YaHei", "wenquanyi micro hei","Hiragino Sans GB", "Hiragino Sans GB W3", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
     "Helvetica Neue", Helvetica, Arial, sans-serif;
  h2
    color: text-primary;
    font-size: 14px;
    line-height: 24px;
    margin-top: 25px;
    font-weight: bold;
  p
    color: text-primary;
    font-size: 12px;
    line-height: 18px;
    margin-top: 15px;
    text-align: justify;

  @media (max-width: 500px) and (min-width: 100px), (max-width: 500px) and (min-height: 200px) {
    .text-container {
      background-color: white;
      color: rgba(38, 48, 54,.5);
      padding: 15px;
      width: auto;
      font-family:
       system, -apple-system, BlinkMacSystemFont,
       "PingFang SC", "Segoe UI", "Microsoft YaHei", "wenquanyi micro hei","Hiragino Sans GB", "Hiragino Sans GB W3", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
       "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    p {
      color: rgba(38, 48, 54,.5);
      font-size: 12px;
      line-height: 18px;
      margin-top: 10px;
      text-align: justify;
    }
  }

</style>
