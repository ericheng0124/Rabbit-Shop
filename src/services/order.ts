/**
  @description  会员中心-订单管理-填写订单-获取预付订单
  @method  GET
  @url  /member/order/pre
 */

import { http } from '@/utils/http'
import type { OrderPreResult } from '@/types/order'

export const getMemberOrderPreAPI = () => {
  return http<OrderPreResult>({
    url: '/member/order/pre',
    method: 'GET',
  })
}
