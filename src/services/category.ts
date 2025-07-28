import type { CategoryTopItem } from '@/types/category'
import { http } from '@/utils/http'

/**
 * 获取分类列表 - 小程序
 * /category/top
 */
export const getCategoryTopAPI = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
