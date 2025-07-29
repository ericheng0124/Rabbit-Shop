import type { ProfileDetail } from '@/types/member'
import { http } from '@/utils/http'
/**
  会员中心-个人信息
  获取个人信息
  GET /member/profile
 */

export const getMemberProfileAPI = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}
