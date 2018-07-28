
import ajax from'./ajax'
import axios from "axios"
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
export const reqPayUrl = (user_id,pay_method,recharge_face) => ajax(`${url}api/recharge/order`,{user_id,pay_method,recharge_face},"","POST")
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
export const deleteCollectList = (data,configure)=>fetch(`${url}api/books/favs`, {method: 'DELETE', headers: configure, body: JSON.stringify(data)})
//获取搜索结果
export const reqSearchResult = (bname)=>ajax(`${url}api/books/search/${bname}`)
//获取排行前十名
export const reqRankList = (type,count)=>ajax(`${url}api/books/ranks/${type}`,{count})
//获取书籍详情页信息
export const reqBookDetail = (bid)=>ajax(`${url}api/books/${bid}/detail`)
//获取评论列表
export const reqCommentsList = (bid)=>ajax(`${url}api/books/${bid}/comments`)
//添加评论
export const addComment = (bid,content,config)=>ajax(`${url}api/books/${bid}/comments`,{content},config,"POST")
//加入收藏
export const addCollection = (bid,config)=>axios.post(`${url}api/books/favs`,{bid},config).then((res)=>res.status)
// export const addCollection = (bid,config)=>ajax(`${url}api/books/favs`,{bid},config,"POST")
//获取书籍的章节
export const reqBookChapter = (bid)=>ajax(`${url}api/books/${bid}/chapters`)
//获取分类
export const reqAllCategory = ()=>ajax(`${url}api/categories`)
//获取分类筛选信息
export const reqCategoryInfo = (cid,status,free)=>ajax(`${url}api/category/books`,{cid,status,free})
// 获取首页数据
export const reqHomeInfo = ()=>ajax(`${url}api/pages/web_bookstore`)
//获取阅读信息
export const reqReadInfo = (bid,cid,config)=>axios.post(`${url}api/chapter/content`,{bid,cid},config).then((res)=> ({data:res.data})).catch((err)=>({data:err.status}))
//章节显示
export const reqChapterShow = (user_id,bid,cid)=>ajax(`${url}api/chapter/show`,{user_id,bid,cid},"","POST")
//价格计算
export const reqCalPrice = (user_id,chapter_show_id,cid,bid)=>ajax(`${url}api/recharge/chapter`,{user_id,chapter_show_id,cid,bid},"","POST")
export const reqCalPriceAll = (user_id,cid,bid,all_rest)=>ajax(`${url}api/recharge/chapter`,{user_id,cid,bid,all_rest},"","POST")

//章节购买
export const buyChapter = (user_id,chapter_show_id,cid,bid,need_pay)=>ajax(`${url}api/purchase/chapter`,{user_id,chapter_show_id,cid,bid,need_pay},"","POST")
export const buyChapterAll = (user_id,cid,bid,need_pay,all_rest)=>ajax(`${url}api/purchase/chapter`,{user_id,cid,bid,need_pay,all_rest},"","POST")

//判断章节是否已买
export const chapterIsBuy = (user_id,cid,bid)=>ajax(`${url}api/chapter/checkurl`,{user_id,cid,bid},"","POST")
//我的钱包金额
export const reqWalletMoney = (user_id)=>ajax(`${url}api/wallet/balance`,{user_id})
//设置自动购买状态
export const askAutoBuy = (user_id,status,bid)=>ajax(`${url}api/wallet/setup`,{user_id,status,bid},"","POST")
//交易记录
export const reqDealRecord = (user_id)=>ajax(`${url}api/wallet/transaction`,{user_id},"","POST")
