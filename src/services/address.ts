import type { AddressItem, AddressParams } from '@/types/address'
import { http } from '@/utils/http'

/**
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
  @description 获取收货地址列表
  GET /member/address
 */

export const getMemberAddressAPI = () => {
  return http<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}

/**
  @description 获取收货地址详情
  GET  /member/address/{id}
  @param id 地址id（路径参数）
 */
export const getMemberAddressByIdAPI = (id: string) => {
  return http<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`,
  })
}
