<script setup lang="ts">
import { ref, reactive, computed, inject } from 'vue';
import DarkModeSwitch from '@/views/design/components/dark-mode-switch.vue';

type DragPosition = 'left' | 'right';

// 面板分割状态
const state = reactive({
    dragging: false,
    leftWidth: 240,
    rightWidth: 240
});

const container = ref();

const boundSplit = computed(() => {
    const { leftWidth, rightWidth } = state;
    return {
        left: leftWidth < 120 ? 120 : leftWidth > 800 ? 800 : leftWidth,
        right: rightWidth < 120 ? 120 : rightWidth > 800 ? 800 : rightWidth
    };
});

let startPosition = 0;
let dragTarget: HTMLElement | null = null;
let dragPosition: DragPosition = 'left';

function dragStart(e: MouseEvent, _dragPosition: DragPosition) {
    state.dragging = true;
    dragTarget = <HTMLElement>e.target;
    startPosition = e.pageX;
    dragPosition = _dragPosition;
}

function dragMove(e: MouseEvent) {
    if (!state.dragging) return false;
    const isDragLeft = dragPosition === 'left';
    const position = e.pageX;
    const parentElement = dragTarget!.parentElement!;
    if (isDragLeft) {
        const offsetLeft = parentElement.offsetLeft;
        state.leftWidth = position - offsetLeft;
    } else {
        const { offsetLeft } = container.value;
        state.rightWidth = document.body.offsetWidth - position - offsetLeft;
    }
}

function dragEnd() {
    state.dragging = false;
}
</script>

<template>
    <div class="split-pane min-h-screen flex flex-col justify-between gap-3 p-3">
        <div class="absolute top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
            <div class="w-[108rem] flex-none flex justify-end">
                <img
                    src="https://tailwindcss.com/_next/static/media/docs@tinypng.61f4d3334a6d245fc2297517c87ae044.png"
                    alt=""
                    class="w-[71.75rem] flex-none max-w-none dark:hidden"
                />
            </div>
        </div>
        <div class="h-14 px-4 rounded flex items-center justify-between bg-white z-10">
            <h1 class="font-bold text-lg">界面设计</h1>
            <div>
                <dark-mode-switch class="mr-3"></dark-mode-switch>
                <el-button type="primary">保存</el-button>
            </div>
        </div>
        <div
            ref="container"
            class="h-0 grow flex justify-between gap-3 z-10"
            @mousemove="dragMove"
            @mouseup="dragEnd"
            @mouseleave="dragEnd"
        >
            <div
                class="w-60 h-full p-3 rounded relative bg-white overflow-y-auto overflow-x-hidden"
                :style="{ width: boundSplit.left + 'px' }"
            >
                <slot name="left"></slot>
                <div
                    class="dragger dragger-left hover:bg-yellow-100"
                    @mousedown.prevent="(e) => dragStart(e, 'left')"
                />
            </div>
            <div class="grow p-3 rounded bg-white overflow-y-auto overflow-x-hidden">
                <slot name="center"></slot>
            </div>
            <div
                class="w-60 p-3 rounded relative bg-white overflow-y-auto overflow-x-hidden"
                :style="{ width: boundSplit.right + 'px' }"
            >
                <div
                    class="dragger dragger-right hover:bg-yellow-100"
                    @mousedown.prevent="(e) => dragStart(e, 'right')"
                />
                <slot name="right"></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.dragger {
    position: absolute;
    z-index: 3;
    top: 0;
    bottom: 0;
    width: 10px;
    cursor: ew-resize;
    &-left {
        right: -5px;
    }
    &-right {
        left: -5px;
    }
}
.split-pane.dragging {
    cursor: ew-resize;
}
.dragging .left,
.dragging .right {
    pointer-events: none;
}

/** 暗黑模式 */
html.dark {
    .bg-white {
        transition: all ease 0.5s;
        background: rgb(38, 39, 39);
    }
}
</style>
