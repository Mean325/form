<script setup lang="ts">
import ControlsArea from '@/views/design/components/controls-area.vue';
import CanvasArea from '@/views/design/components/canvas-area.vue';
import ConfigArea from '@/views/design/components/config-area.vue';
import DesignLayout from '@/views/design/components/layout.vue';
</script>

<template>
    <design-layout>
        <template #left>
            <controls-area></controls-area>
        </template>
        <template #center>
            <canvas-area></canvas-area>
        </template>
        <template #right>
            <config-area></config-area>
        </template>
    </design-layout>
</template>

<style lang="scss" scoped>
.z--1 {
    z-index: -1;
}
</style>
