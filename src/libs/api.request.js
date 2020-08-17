import HttpRequest from '@/libs/axios'
import config from '@/config'

const env = process.env.VUE_APP_ENV
const baseUrl = config.baseUrl[env]
// const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

const axios = new HttpRequest(baseUrl)
export default axios

export const ssoUrl = config.ssoUrl[env]
