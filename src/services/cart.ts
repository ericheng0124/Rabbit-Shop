import type { CartItem } from '@/types/cart'
import { http } from '@/utils/http'

/**
  @description 购物车-加入购物车
  @method POST
  @url /member/cart
 */
export const postAddCartAPI = (data: { skuId: string; count: number }) => {
  return http({
    method: 'POST',
    url: '/member/cart',
    data,
  })
}

/**
  @description  购物车-获取购物车列表
  @method  GET
  @url  /member/cart
 */
export const getCartListAPI = () => {
  return http<CartItem[]>({
    method: 'GET',
    url: '/member/cart',
  })
}

/**
  @description  购物车-删除/清空购物车单品
  @method  DELETE
  @url  /member/cart
  @param  data 请求体参数 ids skuId集合
 */
export const deleteCartListAPI = (data: { ids: string[] }) => {
  return http<CartItem>({
    method: 'DELETE',
    url: '/member/cart',
    data,
  })
}
