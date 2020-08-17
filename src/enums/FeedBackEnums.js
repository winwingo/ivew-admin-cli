export default class FeedBackEnums {
  // 意见类型1.没有收到小费码;2.订单没法使用;3.套餐信息咨询;9.其它
  static opinionType(val) {
    const map = new Map()
    map.set(1, '没有收到消费码')
    map.set(2, '订单没法使用')
    map.set(3, '套餐信息咨询')
    map.set(9, '其它')
    return map.get(val)
  }

  // 处理状态：0-待处理  1-已处理
  static status(val) {
    const map = new Map()
    map.set(0, '待处理')
    map.set(1, '已处理')
    return map.get(val)
  }
}
