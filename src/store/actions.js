
import {
  RECEIVE_USER_INFO,
  GET_USER_INFO,
  GET_RECHARGE_INFO,
  GET_RECHARGE_RECORD,
  GET_WALLET_INFO,
  GET_RANK_TYPE,
  GET_COLLECT_LIST,
  GET_SEARCH_RESULT,
  GET_RANK_LIST,
  GET_BOOK_DETAIL,
  GET_COMMENTS_LIST,
  GET_BOOK_CHAPTER,
  GET_ALL_CATEGORY,
  GET_CATEGORY_INFO,
  GET_HOME_INFO,
  RECORD_READ_INFO,
  GET_CHAPTER_SHOW,
  RECORD_CALCULATE,
  GET_DEAL_RECORD,
  GET_SYNTHESIZE_INFO,
  SHOW_LOGIN_DIALOG
} from "./mutation-types"
import {
  reqUserInfo,
  reqRechargeInfo,
  reqRechargeRecord,
  reqWalletInfo,
  reqRankType,
  reqCollectList,
  reqSearchResult,
  reqRankList,
  reqBookDetail,
  reqCommentsList,
  reqBookChapter,
  reqAllCategory,
  reqCategoryInfo,
  reqHomeInfo,
  reqDealRecord,
  reqSynthesizeInfo} from '../api'

export default {
  //存储用户信息
  recordUserInfo({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  //更新用户信息
  recordNewUserInfo({commit}, result){
    commit(GET_USER_INFO,{result})
  },
  //获取用户信息
  async getInfor ({commit},{id,config}){

    let result = await reqUserInfo(id,config)
    commit(GET_USER_INFO,{result})
  },
  //记录充值信息
  async recordRechargeInfo({commit}){
    let result = await reqRechargeInfo()
      commit(GET_RECHARGE_INFO,{result})
  },
  //获取充值记录
  async getRechargeRecord({commit},{user_id,offset,limit}){
    let result = await reqRechargeRecord(user_id,offset,limit)
    commit(GET_RECHARGE_RECORD,{result})
  },
  //获取钱包信息
  async getWalletInfo({commit},{user_id,config}){
      let result = await reqWalletInfo(user_id,config)
    commit(GET_WALLET_INFO,{result})
  },
  //获取排行类别
  async getRankType({commit}){
    let result = await reqRankType()
    commit(GET_RANK_TYPE,{result})
  },
  //获取收藏列表
  async getCollectList({commit},{config,offset,limit}){
    let result = await reqCollectList(config,offset,limit);

    commit(GET_COLLECT_LIST,{result})
  },
  //获取搜索结果
  async getSearchResult({commit},{bname,offset,limit}){
      let result = await reqSearchResult(bname,offset,limit)
      commit(GET_SEARCH_RESULT,{result})
  },
  //获取排行类别里面的排行书籍信息
  async getRankList({commit},{count,type}){
    let result = await reqRankList(type,count)
    commit(GET_RANK_LIST,{result})
  },
  //获取书籍详情页信息
  async getBookDetail({commit},{bid}){
    let result = await reqBookDetail(bid)
    commit(GET_BOOK_DETAIL,{result})
  },
  //获取评论列表
  async getCommentsList({commit},{bid,offset,limit}){
    let result = await reqCommentsList(bid,offset,limit)
    commit(GET_COMMENTS_LIST,{result})
  },
  //获取书籍章节
  async getBookChapter({commit},{bid}){
    let result = await reqBookChapter(bid)
    commit(GET_BOOK_CHAPTER,{result})
  },
  //获取所有分类
  async getAllCategory({commit}){
    let arr = await reqAllCategory()
    let num = 4;
    let result = new Array(Math.ceil(arr.length / num))
    for(let i=0; i<result.length;i++){
      result[i] = [];
      for(let j=0;j<num;j++){
        result[i][j] ={}
      }
    }
    for(let g=0;g<arr.length;g++){
      result[parseInt(g / num)][g%num] = arr[g]
    }
    commit(GET_ALL_CATEGORY,{result})
  },
  //获取分类筛选信息
  async getCategoryInfo({commit},{cid,status,free,offset,limit}){
    let result = await reqCategoryInfo(cid,status,free,offset,limit)
    commit(GET_CATEGORY_INFO,{result})
  },
  //获取首页数据信息
  async getHomeInfo({commit},{offset,limit}){
    let result = await reqHomeInfo(offset,limit)
    commit(GET_HOME_INFO,{result})
  },
  //存储阅读信息
  recordReadInfo({commit},{content}){
    commit(RECORD_READ_INFO,{content})
  },
  //存储章节显示
  getChapterShow({commit},{result}){
    commit(GET_CHAPTER_SHOW,{result})
  },
  //存储计算的结果
  recordCalculate({commit},{dtResult}){
    commit(RECORD_CALCULATE,{dtResult})
  },
  //获取用户消费记录
  async getDealRecord({commit},{user_id,offset,limit}){
    let result = await reqDealRecord(user_id,offset,limit)
    commit(GET_DEAL_RECORD,{result})
  },
  async getSynthesizeInfo({commit}){
    let result = await reqSynthesizeInfo()
    commit(GET_SYNTHESIZE_INFO,{result})
  },
  showLoginDialog({commit}, result) {
    commit(SHOW_LOGIN_DIALOG,result)
  }
}
