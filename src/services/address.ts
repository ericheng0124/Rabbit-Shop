import type { AddressItem, AddressParams } from '@/types/address'
import { http } from '@/utils/http'

/**
  会员中心-地址管理
  POST  /member/address
  @description 添加收货地址
  @param data 请求参数
 */
export const postMemberAddressAPI = (data: AddressParams) => {
  return http({
    url: '/member/address',
    method: 'POST',
    data,
  })
}

/**
  会员中心-地址管理
  @description 获取收货地址列表
  GET /member/address
 */

export const getMemberAddressAPI = () => {
  return http<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}
