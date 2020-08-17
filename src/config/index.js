export default {
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  useI18n: true,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    dev: 'http://localhost:9171',
    qa: 'https://resourcesapi.qa.xianchengkeji.cn',
    stage: 'https://resourcesapi.stage.xianchengkeji.cn',
    prod: 'https://resourcesapi.xianchengkeji.cn'
  },
  ssoUrl: {
    dev: 'https://sso.qa.xianchengkeji.cn/login?callback=http://localhost.qa.xianchengkeji.cn:8080',
    qa: 'https://sso.qa.xianchengkeji.cn/login?callback=https://resources.qa.xianchengkeji.cn',
    stage: 'https://sso.stage.xianchengkeji.cn/login?callback=https://resources.stage.xianchengkeji.cn',
    prod: 'https://sso.xianchengkeji.cn/login?callback=https://resources.xianchengkeji.cn'
  },
  domainPath: {
    dev: 'qa.xianchengkeji.cn',
    qa: 'qa.xianchengkeji.cn',
    stage: 'stage.xianchengkeji.cn',
    pro: 'xianchengkeji.cn'
  },
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: 'home',
  /**
   * @description 需要加载的插件
   */
  plugin: {
    'error-store': {
      showInHeader: true, // 设为false后不会在顶部显示错误日志徽标
      developmentOff: true // 设为true后在开发环境不会收集错误信息，方便开发中排查错误
    }
  },
  devServer: {
    disableHostCheck: true
  }
}
