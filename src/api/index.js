
import ajax from'./ajax'
import axios from 'axios'
export const captureLogin = (grant_type,username,password,client_id,oauth_type,weixin_kind) => ajax(`${url}/api/accounts/access_token`, {
  grant_type,username,password,client_id,oauth_type,weixin_kind
}, 'POST')
let url = "http://39.106.144.146/"
export const reqCapture =(phone) => ajax(`${url}api/app/send_sms`,{phone}, 'POST')

