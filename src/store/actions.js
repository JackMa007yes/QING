import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {
  addCart(context, payload) {
    return new Promise((resolve,reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
    if (oldProduct) {
      context.commit(ADD_COUNTER,oldProduct)
      resolve('选择的商品+1')
    } else {
      payload.count = 1
      context.commit(ADD_TO_CART,payload)
      resolve('商品已添加入购物车')
    }
    })
  }
}