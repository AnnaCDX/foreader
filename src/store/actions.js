
import {RECEIVE_USER_INFO,GET_USER_INFO,GET_RECHARGE_INFO,GET_RECHARGE_RECORD,GET_WALLET_INFO,GET_RANK_TYPE,GET_COLLECT_LIST} from "./mutation-types"
import {reqUserInfo,
  reqRechargeInfo,
  reqRechargeRecord,
  reqWalletInfo,
  reqRankType,reqCollectList} from '../api'

export default {
  recordUserInfo({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  recordNewUserInfo({commit}, result){
    commit(GET_USER_INFO,{result})
  },
  async getInfor ({commit},{id,config}){

    let result = await reqUserInfo(id,config)
    commit(GET_USER_INFO,{result})
  },
 async recordRechargeInfo({commit}){
    let result = await reqRechargeInfo()
      commit(GET_RECHARGE_INFO,{result})
  },
  async getRechargeRecord({commit},cb){
    let {id,config} = cb&&cb()
    let arr = await reqRechargeRecord(id,config)
    let num = 5;
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

    commit(GET_RECHARGE_RECORD,{result})
  },
  async getWalletInfo({commit},{id,config}){
      let result = await reqWalletInfo(id,config)
    commit(GET_WALLET_INFO,{result})
  },
  async getRankType({commit}){
    let result = await reqRankType()
    commit(GET_RANK_TYPE,{result})
  },
  async getCollectList({commit},{config}){
    let result = await reqCollectList(config);
    commit(GET_COLLECT_LIST,{result})
  }

}
