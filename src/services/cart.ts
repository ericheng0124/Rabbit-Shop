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
