export default class ActivityTypeEnums {
  static prom_type(val) {
    const map=new map();
    map.set("ACTIVITY_QG",1);
    map.set("ACTIVITY_PT",2);
    map.set("ACTIVITY_LX",3);
    map.set("ACTIVITY_BK",4);
    map.set("ACTIVITY_WL",5);
    map.set("ACTIVITY_DT",6);
    map.set("ACTIVITY_XJ",7);

    return map.get(val);
  }

}
