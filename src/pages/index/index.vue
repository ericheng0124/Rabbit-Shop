<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBannerAPI, getCategoryAPI, getHomeHotAPI } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPannel from './components/HotPanel.vue'
import type { XtxGuessInstance } from '@/types/component'

// 获取首页轮播图方法
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 获取前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getCategoryAPI()
  categoryList.value = res.result
}

// 获取热门推荐数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
})

// 获取猜你喜欢组件实例
const guessRef = ref<XtxGuessInstance>()

// 滚动触底方法
const onScrolltolower = () => {
  // console.log('触发触底机制')
  guessRef.value?.getMore()
}

// 当前下拉刷新状态
const isTriggered = ref(false)

// 下拉刷新方法
const onRefresherrefresh = async () => {
  isTriggered.value = true
  // await getHomeBannerData()
  // await getHomeCategoryData()
  // await getHomeHotData()

  // 重置猜你喜欢组件数据
  guessRef.value?.resetData()
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
    guessRef.value?.getMore(),
  ])
  // 关闭动画
  isTriggered.value = false
}
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- 滚动容器 -->
  <scroll-view
    refresher-enabled
    :refresher-triggered="isTriggered"
    @refresherrefresh="onRefresherrefresh"
    @scrolltolower="onScrolltolower"
    class="scroll-view"
    scroll-y
  >
    <!-- 自定义轮播图 -->
    <XtxSwiper :bannerList="bannerList" />
    <!-- 分类面板 -->
    <CategoryPanel :categoryList="categoryList" />
    <!-- 热门推荐 -->
    <HotPannel :hotList="hotList" />
    <!-- 猜你喜欢 -->
    <XtxGuess ref="guessRef" />
  </scroll-view>
</template>

<style lang="scss">
Page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
