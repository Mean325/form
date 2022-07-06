<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { Droppable } from '@/utils/drag-drop-sort/droppable';

const canvasArea = ref();
let droppableInstance = ref();
onMounted(() => {
    droppableInstance.value = new Droppable(canvasArea.value, {
        // 放置区的子项容器class名称
        itemContainerClass: 'control-layout'
    });
});

const test = () => {
    console.log(droppableInstance);
};
</script>

<template>
    <div ref="canvasArea" class="h-full">
        <h1 @click="test">画布区域</h1>
    </div>
</template>

<style lang="scss" scoped>
::v-global(.drop-ref) {
    width: 100%;
    height: 60px;
    border: 2px dashed #00d9ff;
    box-sizing: border-box;
}

::v-deep(.control-layout) {
    margin-bottom: 10px;
}
</style>
