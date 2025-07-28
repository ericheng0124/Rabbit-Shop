import type { GoodsResult } from '@/types/goods'
import { http } from '@/utils/http'

/**
  商品详情
  GET/goods
  规格集合一定要和skus集合下的specs 顺序保持一致
  请求参数
  Query 参数
  @params id:string 商品id
 */
export const getGoodsByIdAPI = (id: string) => {
  return http<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: {
      id,
    },
  })
}
