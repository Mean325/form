<script setup lang='ts'>
import { computed, ref, watch } from 'vue';

const props = defineProps<{ isEdit?: boolean }>()

const direction = ref(1); // 1, -1
const state = ref(1); // 0,1,2

const classObj = computed(() => {
  return {
    [`transformed${state.value}`]: true
  }
})
// 状态在0，1，2间反复的切换。
const timer = ref(0);

watch(
  ()=> props.isEdit,
  (val)=>{
    if (timer.value) {
      clearInterval(timer.value);
      state.value = 1;
    }
    if (!val) return;
    timer.value = setInterval(() => {
      if (state.value + direction.value > 2 || state.value + direction.value < 0) {
        direction.value = -direction.value;
      }
      state.value = state.value + direction.value;
    }, 50);
  },
)
</script>

<template>
  <div class='control-item flex flex-col items-center p-2 rounded hover:bg-gray-200' :class='classObj'>
    <van-icon name="location" />
    <span class='whitespace-nowrap'>控件{{ props.num }}</span>
  </div>
</template>

<style lang='scss' scoped>
.control-item {
  width: 66px;
  height: 66px;
  background: #ff8040;
  .van-icon {
    font-size: 36px;
  }
}

.transformed0 {
  transform: rotate(3deg);
}

.transformed1 {
  transform: rotate(0deg);
}

.transformed2 {
  transform: rotate(357deg);
}
</style>