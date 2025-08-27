<script setup lang="ts">
import type { BannerItem } from '@/types/home'
import { ref } from 'vue'

const activeIndex = ref(0)

// 定义 props 接收
defineProps<{
  bannerList: BannerItem[]
}>()

// 当swiper下标发生变化时触发
const onChange: UniHelper.SwiperOnChange = (event) => {
  // console.log(event)
  activeIndex.value = event.detail!.current
}
</script>

<template>
  <view class="carousel">
    <swiper :circular="true" autoplay :interval="3000" @change="onChange">
      <swiper-item v-for="item in bannerList" :key="item.id">
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view class="indicator">
      <text
        v-for="(item, index) in bannerList"
        :key="item.id"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<style lang="scss">
@import '@/components/style/XtxSwiper.scss';
</style>
