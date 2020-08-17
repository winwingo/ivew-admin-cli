export default class ReturnGoodsEnums {
  static reviewStatus(val) {
    const map = new Map()
    map.set(-3, '已取消')
    map.set(-2, '审核驳回')
    map.set(1, '待审核')
    map.set(2, '审核通过')
    map.set(3, '已退款')
    map.set(9, '退款不符合条件退款结束')
    map.set(10, '退款失败')
    return map.get(val)
  }

  // 0未售后(未提交),1部分售后中,2全部售后中(全部待审核),3部分售后完成,4全部售后完成(全部审核通过),9审核驳回
  static refundType(val) {
    const map = new Map()
    map.set(0, '未售后')
    map.set(1, '部分售后中')
    map.set(2, '全部售后中')
    map.set(3, '部分售后完成')
    map.set(4, '全部售后完成')
    map.set(9, '审核驳回')
    return map.get(val)
  }

  // 退货原因分类 1-客户原因 2-供应商原因 3-同城生活原因
  static reasonCategory(val) {
    const map = new Map()
    map.set(1, '客户原因')
    map.set(2, '供应商原因')
    map.set(3, '同城生活原因')
    return map.get(val)
  }

  // 客户原因 1不想要了  2其他     供应商原因 3未收到消费码 4预约不上 5商家停业 6商家不接待            同程生活原因 7.套餐描述与实际不符
  static reasonType(val) {
    const map = new Map()
    map.set(1, '不想要了')
    map.set(2, '其他')
    map.set(3, '未收到消费码')
    map.set(4, '预约不上')
    map.set(5, '商家停业')
    map.set(6, '商家不接待')
    map.set(7, '套餐描述与实际不符')
    return map.get(val)
  }

  // 0不需要结算;1需要结算
  static settlementMode(val) {
    const map = new Map()
    map.set(0, '不需要结算')
    map.set(1, '需要结算')
    return map.get(val)
  }

  // 退款设置 1不可退，2随时退，3条件退
  static refundSetting(val) {
    const map = new Map()
    map.set(1, '不可退')
    map.set(2, '随时退')
    map.set(3, '条件退')
    return map.get(val)
  }
}
