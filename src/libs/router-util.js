import {
  hasChild,
  sessionRead
} from '@/libs/util'
import Main from '@/components/main'
import {
  forEach
} from '@/libs/tools'

export const loadMenu = () => {
  let list = []
  let data = sessionRead('route')
  if (!data) {
    return list
  }
  list = formatMenu(JSON.parse(data))
  return list
}

export const formatMenu = (list) => {
  let res = []
  forEach(list, item => {
    let obj = {
      path: item.path,
      name: item.name
    }
    obj.meta = item.meta
    if (item.pid === 0) {
      obj.component = Main
    } else {
      let data = item.component;
      obj.component = () => import('@/view/components/' + data);
    }
    if (hasChild(item)) {
      obj.children = formatMenu(item.children)
    }
    res.push(obj)
  })
  return res
}
