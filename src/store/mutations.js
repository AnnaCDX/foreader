import {RECEIVE_USER_INFO,GET_USER_INFO,GET_RECHARGE_INFO,GET_RECHARGE_RECORD,GET_WALLET_INFO,GET_RANK_TYPE,GET_COLLECT_LIST} from "./mutation-types"
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
  }
}
