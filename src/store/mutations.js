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
  GET_SYNTHESIZE_INFO, SHOW_LOGIN_DIALOG,LOGIN_DIALOG
} from "./mutation-types"
export default{
  [RECEIVE_USER_INFO](state, {userInfo}) {
    state.loginInfo = userInfo
  },
  [GET_USER_INFO](state,{result}){
    state.userInfo = result
  },
  [GET_RECHARGE_INFO](state,{result}){
    state.rechargeInfo=result
  },
  [GET_RECHARGE_RECORD](state,{result}){
    state.rechargeRecord = result
  },
  [GET_WALLET_INFO](state,{result}){
    state.myWallet = result
  },
  [GET_RANK_TYPE](state,{result}){
    state.rankType = result
  },
  [GET_COLLECT_LIST](state,{result}){
    state.collectionList = result
  },
  [GET_SEARCH_RESULT](state,{result}){
    state.searchResult = result
  },
  [GET_RANK_LIST](state,{result}){
    state.rankList = result
  },
  [GET_BOOK_DETAIL](state,{result}){
    state.bookDetail = result
  },
  [GET_COMMENTS_LIST](state,{result}){
    state.commentsList = result
  },
  [GET_BOOK_CHAPTER](state,{result}){
    state.bookChapter = result
  },
  [GET_ALL_CATEGORY](state,{result}){
    state.allCategory = result
  },
  [GET_CATEGORY_INFO](state,{result}){
    state.categoryInfo=result
  },
  [GET_HOME_INFO](state,{result}){
    state.homeInfo = result
  },
  [RECORD_READ_INFO](state,{content}){
    state.readInfo = content
  },
  [GET_CHAPTER_SHOW](state,{result}){
    state.chapterShow = result
  },
  [RECORD_CALCULATE](state,{dtResult}){
    state.calculateResult = dtResult
  },
  [GET_DEAL_RECORD](state,{result}){
    state.dealRecord = result
  },
  [GET_SYNTHESIZE_INFO](state,{result}){
    state.synthesizeInfo = result
  },
  [SHOW_LOGIN_DIALOG](state,result) {
    state.needShowLogin = result
  },
  [LOGIN_DIALOG](state,{result}){
    state.login = result
  }
}
