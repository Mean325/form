<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { Draggable } from '@/utils/drag-drop-sort/draggable';

const props = defineProps<{ isEdit?: boolean; data: Object }>();
const emit = defineEmits(['remove']);

const controlItem = ref();

const direction = ref(1); // 1, -1
const state = ref(1); // 0,1,2

const classObj = computed(() => {
    return {
        [`transformed${state.value}`]: true
    };
});
// 状态在0，1，2间反复的切换。
const timer = ref(0);

// 初始化时使当前控件可拖动
onMounted(() => {
    new Draggable(controlItem.value);
});

watch(
    () => props.isEdit,
    (val) => {
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
    }
);

const remove = () => {
    emit('remove');
};
</script>

<template>
    <div
        ref="controlItem"
        class="control-item w-full flex flex-col items-center p-2 rounded relative hover:bg-gray-200"
        :class="classObj"
    >
        <span
            v-if="isEdit"
            class="w-5 h-5 text-white text-center leading-5 absolute -left-1.5 -top-2.5 bg-gray-500 rounded-full cursor-pointer"
            @click="remove"
            >—</span
        >
        <van-icon name="location" />
        <span class="whitespace-nowrap">{{ props.data.label }}</span>
    </div>
</template>

<style lang="scss" scoped>
.control-item {
    width: 66px;
    height: 66px;
    background: #ff8040;
    ::v-deep(.el-badge__content) {
        border-radius: 50%;
        width: 20px;
        height: 20px;
        left: -34px;
        top: -6px;
    }
    .hidden ::v-deep(.el-badge__content) {
        display: none;
    }
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
