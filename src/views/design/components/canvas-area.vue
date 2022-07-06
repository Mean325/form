<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { Droppable } from '@/utils/drag-drop-sort/droppable';

const canvasArea = ref();
let droppableInstance = ref();
onMounted(() => {
    droppableInstance.value = new Droppable(canvasArea.value);
});
</script>

<template>
    <div ref="canvasArea" class="h-full">
        <h1>画布区域</h1>
    </div>
</template>

<style lang="scss" scoped></style>
