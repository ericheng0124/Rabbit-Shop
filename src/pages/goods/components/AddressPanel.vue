// AddressPanel.vue
<script setup lang="ts">
import { useAddressStore } from '@/stores/modules/address'
import type { AddressItem } from '@/types/address'

// 调用父组件方法
const emit = defineEmits<{
  (event: 'close'): void
  (event: 'select'): void // 新增 select 事件
}>()

const props = defineProps<{
  addressList: AddressItem[]
  changeAddress: (item: AddressItem) => void
}>()

// 获取地址 store
const addressStore = useAddressStore()

// 判断当前地址是否应该显示选中图标
const isChecked = (item: AddressItem) => {
  // 如果有选中的地址，则比较 ID
  if (addressStore.selectedAddress) {
    return item.id === addressStore.selectedAddress.id
  }
  // 否则检查是否是默认地址
  return item.isDefault
}

// 新增：处理地址选择
const handleSelect = (item: AddressItem) => {
  props.changeAddress(item) // 更新选中地址
  emit('select') // 触发 select 事件通知父组件关闭弹层
}
</script>

<template>
  <view class="address-panel">
    <!-- 关闭按钮 -->
    <text @tap="emit('close')" class="close icon-close"></text>
    <!-- 标题 -->
    <view class="title">配送至</view>
    <!-- 内容 -->
    <view class="content">
      <view
        class="item"
        v-for="(item, index) in props.addressList"
        :key="index"
        @tap="handleSelect(item)"
      >
        <view class="user">{{ item.receiver }} {{ item.contact }}</view>
        <view class="address">{{ item.fullLocation }}{{ item.address }}</view>
        <text class="icon" :class="isChecked(item) ? 'icon-checked' : 'icon-ring'"></text>
      </view>
    </view>
    <view class="footer">
      <view class="button primary"> 新建地址 </view>
      <view v-if="false" class="button primary">确定</view>
    </view>
  </view>
</template>

<style lang="scss">
.address-panel {
  padding: 0 30rpx;
  border-radius: 10rpx 10rpx 0 0;
  position: relative;
  background-color: #fff;
}

.title {
  line-height: 1;
  padding: 40rpx 0;
  text-align: center;
  font-size: 32rpx;
  font-weight: normal;
  border-bottom: 1rpx solid #ddd;
  color: #444;
}

.close {
  position: absolute;
  right: 24rpx;
  top: 24rpx;
}

.content {
  min-height: 300rpx;
  max-height: 540rpx;
  overflow: auto;
  padding: 20rpx;
  .item {
    padding: 30rpx 50rpx 30rpx 60rpx;
    background-size: 40rpx;
    background-repeat: no-repeat;
    background-position: 0 center;
    background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/locate.png);
    position: relative;
  }
  .icon {
    color: #999;
    font-size: 40rpx;
    transform: translateY(-50%);
    position: absolute;
    top: 50%;
    right: 0;
  }
  .icon-checked {
    color: #27ba9b;
  }
  .icon-ring {
    color: #444;
  }
  .user {
    font-size: 28rpx;
    color: #444;
    font-weight: 500;
  }
  .address {
    font-size: 26rpx;
    color: #666;
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  padding: 20rpx 0 40rpx;
  font-size: 28rpx;
  color: #444;

  .button {
    flex: 1;
    height: 72rpx;
    text-align: center;
    line-height: 72rpx;
    margin: 0 20rpx;
    color: #fff;
    border-radius: 72rpx;
  }

  .primary {
    color: #fff;
    background-color: #27ba9b;
  }

  .secondary {
    background-color: #ffa868;
  }
}
</style>
