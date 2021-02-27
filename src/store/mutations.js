import {
  ADD_COUNTER,
  ADD_TO_CART,
  CHECKED_CHANGE 
} from './mutation-types'

export default {
  [ADD_COUNTER](state,payload){
    payload.count++
  },
  [ADD_TO_CART](states,payload){
    payload.checked = true
    states.cartList.push(payload)
  },
  [CHECKED_CHANGE](state,payload){
    payload.checked = !payload.checked
  }
}