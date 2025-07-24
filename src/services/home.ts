import { http } from '@/utils/http'
import type { BannerItem, CategoryItem } from '@/types/home'
/**
 * @description 首页广告区域-小程序
 * @param {*} distributionSite integer 可选 广告区域展示位置1 为首页（默认值）2 为商品分类页 示例值:1
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

/**
 * @description 首页-前台分类-小程序
 * GET
 * /home/category/mutli
 */
export const getCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
