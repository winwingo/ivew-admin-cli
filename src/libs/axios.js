import axios from 'axios'
import store from '@/store'
import { getToken, getQaToken, getMchid, setToken } from './util'
import router from '@/router'
import config from '@/config'
import { Message } from 'iview'

axios.defaults.timeout = 18000;

axios.interceptors.request.use(config => {
  const env = process.env.VUE_APP_ENV
  if (env == "qa") {
    config.headers['tctoken'] = getQaToken();
  }else {
    config.headers['tctoken'] = getToken();
  }
  return config;
}, err => {
  Message.error('请求超时');
  return Promise.resolve(err);
});

axios.interceptors.response.use(res => {
  if (res.config.responseType === 'blob') {
    return res;
  }
  const { data, msg, code, count, total, dataByPermission } = res.data
  switch (code) {
    case 1002:
      // 未登录 清除已登录状态
      // setToken('')
      const env = process.env.VUE_APP_ENV
      window.location.href = config.ssoUrl[env]
      // window.location.href = 'http://sso.qa.xianchengkeji.cn/login?callback=https://wanle.qa.xianchengkeji.cn'
      break
    case 403:
      // 没有权限
      if (msg !== null) {
        Message.error(msg)
      } else {
        Message.error('未知错误')
      }
      break
    case 500:
      // 错误
      if (msg !== null) {
        Message.error(msg)
      } else {
        Message.error('未知错误')
      }
      break
    default:
      return { data, status, msg, code, count, total , dataByPermission}
  }
  return { data, status, msg, code, count, total, dataByPermission }
}, error => {
  addErrorLog(error.response)
  return Promise.reject(error)
})

// import { Spin } from 'iview'
const addErrorLog = errorInfo => {
  const { statusText, status, request: { responseURL } } = errorInfo
  let info = {
    type: 'ajax',
    code: status,
    mes: statusText,
    url: responseURL
  }
  if (!responseURL.includes('save_error_logger')) store.dispatch('addErrorLog', info)
}

class HttpRequest {

  constructor(baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
    this.accessToken = getToken();
    this.accessMchid = getMchid();
  }

  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }

  destroy(url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }

  getRequest = (url, params) => {
    return axios({
      method: 'get',
      url: `${this.baseUrl}${url}`,
      params: params,
      headers: {
        'tctoken': this.accessToken,
        'xcmchid': this.accessMchid
      }
    });
  };

  postRequest = (url, params) => {
    return axios({
      method: 'post',
      url: `${this.baseUrl}${url}`,
      data: params,
      headers: {
        'Content-Type': 'application/json',
        'tctoken': this.accessToken,
        'xcmchid': this.accessMchid
      }
    });
  };

  postMultipart = (url, params) => {
    return axios({
      method: 'post',
      url: `${this.baseUrl}${url}`,
      data: params,
      headers: {
        'Content-Type': 'multipart/form-data',
        'tctoken': this.accessToken,
        'xcmchid': this.accessMchid
      }
    });
  };

  putRequest = (url, params) => {
    return axios({
      method: 'put',
      url: `${this.baseUrl}${url}`,
      data: params,
      transformRequest: [function (data) {
        let ret = '';
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
        }
        ret = ret.substring(0, ret.length - 1);
        return ret;
      }],
      headers: {
        'Content-Type': 'application/json',
        'tctoken': this.accessToken,
        'xcmchid': this.accessMchid
      }
    });
  };

  deleteRequest = (url, params) => {
    return axios({
      method: 'delete',
      url: `${this.baseUrl}${url}`,
      params: params,
      headers: {
        'tctoken': this.accessToken,
        'xcmchid': this.accessMchid
      }
    });
  };

  downloadFile = (url) => {
    return axios({
      url: `${this.baseUrl}${url}`,
      responseType: 'blob',
      headers: {
        'tctoken': this.accessToken,
        'xcmchid': this.accessMchid
      }
    })
  };

  downloadFileByParam = (url, params) => {
    return axios({
      method: 'post',
      url: `${this.baseUrl}${url}`,
      responseType: 'blob',
      data: params,
      timeout: 300000,
      headers: {
        'tctoken': this.accessToken,
        'xcmchid': this.accessMchid
      }
    })
  };
}

export default HttpRequest
