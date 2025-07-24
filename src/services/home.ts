import { http } from '@/utils/http'
import type { BannerItem } from '@/types/home'
/**
 *
 * @param {*} distributionSite integer 可选 广告区域展示位置1 为首页（默认值）2 为商品分类页 示例值:1
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}
