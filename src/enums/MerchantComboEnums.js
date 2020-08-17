export default class MerchantComboEnums {
  // 套餐来源 1.自签，2导码，3录单
  static comboSource(val) {
    const map = new Map()
    map.set(1, '自签')
    map.set(2, '导码')
    map.set(3, '录单')
    return map.get(val)
  }

  // 签约模式 1成本模式 2佣金模式
  static contractMode(val) {
    const map = new Map()
    map.set(1, '成本模式')
    map.set(2, '佣金模式')
    return map.get(val)
  }
}
