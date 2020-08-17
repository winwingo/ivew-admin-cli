export default class PlatEnums {
  // 订单来源 6001优鲜便利   8001接龙    9001考拉
  static plat(val) {
    const map = new Map()
    map.set(6001, '优鲜便利')
    map.set(8001, '接龙')
    map.set(9001, '考拉')
    return map.get(val)
  }

  static dept_id(val) {
    const map = new Map()
    map.set(1, 124423204);
    return map.get(val)
  }



}
