<script setup lang="ts">
import type { HotItem } from '@/types/home'

// 定义接收的数据
defineProps<{ hotList: HotItem[] }>()
</script>

<template>
  <!-- 推荐专区 -->
  <view class="panel hot">
    <view class="item" v-for="item in hotList" :key="item.id">
      <view class="title">
        <text class="title-text">{{ item.title }}</text>
        <text class="title-desc">{{ item.alt }}</text>
      </view>
      <navigator hover-class="none" :url="`/pages/hot/hot?type=${item.type}`" class="cards">
        <image
          v-for="(img, index) in item.pictures"
          :key="index"
          class="image"
          mode="aspectFit"
          :src="img"
        ></image>
      </navigator>
    </view>
  </view>
</template>

<style lang="scss">
@import './style/HotPanel.scss';
</style>
