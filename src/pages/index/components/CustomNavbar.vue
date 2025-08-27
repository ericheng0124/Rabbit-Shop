<script setup lang="ts">
// 获取屏幕边界到安全区域距离
// const { safeAreaInsets } = uni.getSystemInfoSync()
// const windowInfo = uni.getWindowInfo()
// const safeAreaInsets = windowInfo.safeAreaInsets
const { safeAreaInsets } = uni.getWindowInfo()
// console.log(safeAreaInsets)
</script>

<template>
  <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 40 + 'px' }">
    <!-- logo文字 -->
    <view class="logo">
      <image class="logo-image" src="@/static/images/logo.png"></image>
      <text class="logo-text">新鲜 · 亲民 · 快捷</text>
    </view>
    <!-- 搜索条 -->
    <view class="search">
      <text class="icon-search">搜索商品</text>
      <text class="icon-scan"></text>
    </view>
  </view>
</template>

<style lang="scss">
@import './style/CustomNavbar.scss';
</style>
