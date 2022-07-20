import {request} from "@/network/request";

/**
 * 商品详情接口
 * */
export function getGoodsInfo (iid) {
  return request({
    method: 'get',
    url: '/detail',
    params: {
      iid,
    }
  })
}

export function getRecommend () {
  return request({
    method: 'get',
    url: '/recommend',
  })
}

export class goods {
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.nowPrice = itemInfo.lowNowPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
  }
}

export class shop {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo
    this.shopUrl = shopInfo.shopUrl;
    this.score = shopInfo.score;
    this.name = shopInfo.name;
    this.goods = shopInfo.cGoods;
    this.sells = shopInfo.cSells;
  }
}

export class params {
  constructor(params) {
    this.info = params.info.set;
    this.rule = params.rule.tables
  }
}
