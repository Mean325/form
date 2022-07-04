<script setup lang='ts'>
</script>

<template>
  <div>
    <div class=''>控件区域</div>
    <div class='controls grid gap-3'>
      <div v-for='num in 30' :key='num' class='control-item flex flex-col items-center p-2 rounded hover:bg-gray-200'>
        <van-icon name="location" />
        <span class='whitespace-nowrap'>控件{{ num }}</span>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.controls {
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
}

.control-item {
  transition: all ease 0.2s;
  .van-icon {
    font-size: 36px;
  }
}
</style>