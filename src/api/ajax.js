import axios from 'axios'

export default function ajax(url = '', data={}, config = null,type = 'GET') {
  return new Promise(function (resolve, reject) {

    let promise

    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求

      promise = config?axios.get(url,config):axios.get(url)
    } else{
      // 发送post请求

      promise = config?axios.post(url, data,config):axios.post(url, data)
    }
    promise.then(response => {
      resolve(response.data)
    })
      .catch(error => {
        if (error.response.status == 401) {
          clearAllCookie()
        }
        reject(error)
      })

  })

  function clearAllCookie() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "='';expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;domain=" + "www.foreader.com.cn" + ";";
    }
  }

}

