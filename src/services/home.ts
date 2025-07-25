import { http } from '@/utils/http'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
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

/**
 * 该业务功能对于前端来说比较简单，只需调用后端提供的接口将获得的数据展现。
   接口地址：/home/hot/mutli
   请求方式：GET
   请求参数：Headers 请求头添加小程序标识'source-client': 'miniapp',已经在请求拦截器的位置添加了
 */

export const getHomeHotAPI = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}
