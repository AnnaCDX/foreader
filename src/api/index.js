
import ajax from'./ajax'
import axios from "axios"
// import axios from 'axios'
let url = "http://39.106.144.146/"
//登录注册
export const captureLogin = (grant_type,username,password,client_id,oauth_type,weixin_kind) => ajax(`${url}api/accounts/access_token`, {
  grant_type,username,password,client_id,oauth_type,weixin_kind
}, null,'POST')

//验证码
export const reqCapture =(phone) => ajax(`${url}api/app/send_sms`,{phone}, null,'POST')
//获取用户信息
export const reqUserInfo =(id,config) => ajax(`${url}api/users/${id}`,{},config)
//充值规则
export const reqRechargeInfo =() => ajax(`${url}api/recharge/rules`)
//支付
export const reqPayUrl = (user_id,pay_method,recharge_id) => ajax(`${url}api/recharge/order`,{user_id,pay_method,recharge_id},"","POST")
//修改用户资料
export const modifyInfo = (sex,name,description,birthday,id,config)=>ajax(`${url}api/users/${id}`,
  {sex,name,description,birthday},config,"POST")
//获取用户充值记录
export const reqRechargeRecord = (user_id,config)=>ajax(`${url}api/wallet/record`,{user_id},config,"POST")
//获取用户钱包信息
export const reqWalletInfo = (user_id,config)=>ajax(`${url}api/wallet/balance`,{user_id},config,"POST")
//获取排行榜的各种类型
export const reqRankType = ()=>ajax(`${url}api/ranks/tabs`)
//获取用户收藏列表
export const reqCollectList = (config)=>ajax(`${url}api/books/favs`,{},config)
//删除用户收藏列表
// export const deleteCollectList = (data,config)=>{return axios.post(`${url}api/books/favs`,data,{
//   method: 'DELETE',
//   headers:config
// })

export const deleteCollectList = (config)=>{return axios.delete(`${url}api/books/favs`,config).then((response)=>{
  console.log(response)
})
}
