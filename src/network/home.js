import {request} from "@/network/request";

/**
 * 获取首页轮播和推荐栏接口
 * */
export function getMultiData () {
  return request({
    url: '/home/multidata',
    method: 'get',
    params: {},//get传参
    data: {},//post传参
  })
}

/**
 * 获取首页产品接口
 * */
export function getHomeGoods (type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page,
    },
  })
}
