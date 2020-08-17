export default class OrderEnums {
  // 订单状态 1创单(客户提交)  3已取消   11出票中、12已出票、13已核销、19已结算
  static orderStatus(val) {
    const map = new Map()
    map.set(1, '创单')
    map.set(3, '已取消')
    map.set(11, '出票中')
    map.set(12, '已出票')
    map.set(13, '已核销')
    map.set(19, '已结算')
    return map.get(val)
  }

  // 支付状态 0未支付  1已支付
  static payStatus(val) {
    const map = new Map()
    map.set(0, '未支付')
    map.set(1, '已支付')
    return map.get(val)
  }

  // 1自签  2导码  3录单
  static orderGoodsType(val) {
    const map = new Map()
    map.set(1, '自签')
    map.set(2, '导码')
    map.set(3, '录单')
    return map.get(val)
  }
}
