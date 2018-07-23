<template>
<div>
  <div class="modify-container">
    <p class="modify-title">信息修改</p>
    <div class="modify-base">
      <div class="nickname">昵称：<Input placeholder="请输入昵称" v-model="nickname" /></div>
      <div class="sex">性别：
        <RadioGroup v-model="sex">
          <Radio label="男"></Radio>
          <Radio label="女"></Radio>
        </RadioGroup>
      </div>
      <div class="birthday">
        生日：<Row>
              <Col span="12">
                <DatePicker v-model="birthday"
                            type="date"
                            placement="top"
                            :start-date="new Date(2000,1,1)"
                            confirm
                            placeholder="2017-08-08"
                            @on-change="changebirth"
                ></DatePicker>
              </Col>
            </Row>
      </div>
    </div>
    <div class="modify-sign">
      个性签名：<Input type="textarea" v-model="ownSign" :autosize="{minRows: 4,maxRows: 5}" placeholder="秀出不一样的烟火～"/>
    </div>
    <button class="save" @click="save">保存</button>
  </div>
  <div class="modify-success" v-show="isAlert">
    <div class="success-font">
      修改成功
      <button class="complete" @click="complete">完成</button>
    </div>

  </div>
</div>
</template>

<script>
  import {Input,RadioGroup,Radio} from "iview"
  import {modifyInfo} from "../../api"
  import {mapActions} from "vuex"
    export default {
      data() {
          return{
            isAlert:false,
            nickname:"",
            sex:"",
            birthday:'',
            ownSign:''
          }
        },
      computed:{
      },
      methods:{
        ...mapActions(["recordNewUserInfo"]),

        changebirth(date){
          this.birthday = date
        },
        async save(){
          let {nickname,sex,birthday,ownSign} = this
          console.log(nickname,sex,birthday,ownSign)
          let token = this.$cookies.get('tk')
          let id=this.$cookies.get("id")
          let config={
            headers:{
              "Authorization":"Bearer "+token
            }
          };
          let result = await modifyInfo(sex,nickname,ownSign,birthday,id,config)
          this.recordNewUserInfo(result)
          this.$router.push("/msite/homePage")
        },
        complete(){
          this.isAlert = false

        }
      },
      component:{
        Input,
        RadioGroup,
        Radio
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.modify-container
  padding 40px 30px
  background: #fff;
  .modify-title
    font-size 16px
    color rgba(0,0,0,.85)
    font-family "PingFang SC"
  .modify-base
    padding-left 28px
    margin-top 30px
    .birthday,.nickname,.sex
      color #9B9B9B
      font-size 14px
    .nickname
      .ivu-input-wrapper
        width 294px
        .ivu-input-small
          height 32px

    .sex
      margin 36px 0
    .birthday
      margin-bottom 30px
      .ivu-row
        width: 224px;
        display: inline-block;
        vertical-align: middle;
        .ivu-col-span-12
          width 100%
          .ivu-date-picker
            width 224px
  .modify-sign
    color #9B9B9B
    font-size 14px
    .ivu-input-wrapper
      width 354px
      vertical-align: top;
  .save
    width:104px;
    height:38px;
    background:rgba(77,139,238,1);
    border-radius:4px;
    line-height 38px
    text-align center
    margin 64px 0 0 72px
.modify-success
  position absolute
  top 0
  width 100%
  height 100%
  background rgba(0,0,0,.5)
  .success-font
    width 200px
    height 100px
    margin 500px auto

</style>
