import { http } from '@/utils/http'
import type { OrderCreateParams, OrderPreResult, OrderResult } from '@/types/order'

/**
  @description  会员中心-订单管理-填写订单-获取预付订单
  @method  GET
  @url  /member/order/pre
 */

export const getMemberOrderPreAPI = () => {
  return http<OrderPreResult>({
    url: '/member/order/pre',
    method: 'GET',
  })
}

/**
  @description  会员中心-订单管理-填写订单-获取立即购买订单
  @method  GET
  @url  /member/order/pre/now
 */
export const getMemberOrderPreNowAPI = (data: {
  skuId: string
  count: string
  addressId?: string
}) => {
  return http<OrderPreResult>({
    url: '/member/order/pre/now',
    method: 'GET',
    data,
  })
}

/**
  @description  会员中心-订单管理-提交订单
  @method  POST
  @url  /member/order
  @param  data 请求参数
 */
export const postMemberOrderAPI = (data: OrderCreateParams) => {
  return http<{ id: string }>({
    method: 'POST',
    url: '/member/order',
    data,
  })
}

/**
@description  会员中心-订单管理 获取订单详情
@method  GET
@url  /member/order/{id}
@param Path  id  string  订单id
 */
export const getMemberOrderByIdAPI = (id: string) => {
  return http<OrderResult>({
    method: 'GET',
    url: `/member/order/${id}`,
  })
}
