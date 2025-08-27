<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getHomeGoodsGuessLikeAPI } from '../services/home'
import type { GuessItem } from '@/types/home'
import type { PageParams } from '@/types/global'

// 分页参数
const pageParams: Required<PageParams> = {
  page: 1,
  pageSize: 10,
}

// 商品加载已结束的标记
const goodsFinish = ref(false)

// 猜你喜欢列表
const guessList = ref<GuessItem[]>([])
// 获取猜你喜欢数据
const getHomeGoodsGuessLikeData = async () => {
  // 退出判断
  if (goodsFinish.value === true) {
    return uni.showToast({
      title: '已没有新数据了！',
      icon: 'none',
    })
  }
  const res = await getHomeGoodsGuessLikeAPI(pageParams)
  // guessList.value = res.result.items
  // 数组的追加赋值
  guessList.value.push(...res.result.items)
  if (pageParams.page < res.result.pages) {
    // 页码累加
    pageParams.page++
  } else {
    goodsFinish.value = true
  }
}

// 重置数据
const resetData = () => {
  pageParams.page = 1
  guessList.value = []
  goodsFinish.value = false
}

// 组件挂载完毕
onMounted(() => {
  getHomeGoodsGuessLikeData()
})

// 曝露方法
defineExpose({
  getMore: getHomeGoodsGuessLikeData,
  resetData,
})
</script>

<template>
  <!-- 猜你喜欢 -->
  <view class="caption">
    <text class="text">猜你喜欢</text>
  </view>
  <view class="guess">
    <navigator
      class="guess-item"
      v-for="item in guessList"
      :key="item.id"
      :url="`/pages/goods/goods?id=${item.id}`"
    >
      <image class="image" mode="aspectFill" :src="item.picture"></image>
      <view class="name"> {{ item.name }} </view>
      <view class="price">
        <text class="small">¥</text>
        <text>{{ item.price }}</text>
      </view>
    </navigator>
  </view>
  <view class="loading-text">
    {{ goodsFinish ? '已没有更多商品了' : '正在加载...' }}
  </view>
</template>

<style lang="scss">
@import '@/components/style/XtxGuess.scss';
</style>
