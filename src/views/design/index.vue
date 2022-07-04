<script setup lang='ts'>
import ControlsArea from '@/views/design/components/controls-area.vue';
import CanvasArea from '@/views/design/components/canvas-area.vue';
import ConfigArea from '@/views/design/components/config-area.vue';

</script>

<template>
  <div class="min-h-screen flex flex-col justify-between gap-3 p-3">
    <div class="absolute top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
      <div class="w-[108rem] flex-none flex justify-end">
        <img src="https://tailwindcss.com/_next/static/media/docs@tinypng.61f4d3334a6d245fc2297517c87ae044.png" alt="" class="w-[71.75rem] flex-none max-w-none dark:hidden" />
      </div>
    </div>
    <div class="h-14 px-4 rounded flex items-center justify-between bg-white z-10">
      <h1 class="font-bold text-lg">界面设计</h1>
      <div>
        <van-button type="primary" size="small">保存</van-button>
      </div>
    </div>
    <div class="grow flex justify-between gap-3 z-10">
      <div class="w-60 p-3 rounded bg-white">
        <controls-area></controls-area>
      </div>
      <div class="grow p-3 rounded bg-white">
        <canvas-area></canvas-area>
      </div>
      <div class="w-60 p-3 rounded bg-white">
        <config-area></config-area>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.z--1 {
  z-index: -1;
}
</style>