<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';

import ControlItem from '@/views/design/components/control-item.vue';

const isEdit = ref(false);

const mockList = reactive([]);

onMounted(() => {
    for (let i = 0; i < 30; i++) {
        mockList.push({
            label: '控件' + (i + 1),
            value: i
        });
    }
});

const handleRemove = (index: number) => {
    mockList.splice(index, 1);
};
</script>

<template>
    <div class="flex justify-between" :class="{ 'z-20': isEdit, relative: isEdit }">
        <span>控件区域</span>
        <a v-if="isEdit" class="cursor-pointer" @click="isEdit = false">取消</a>
        <a v-else class="cursor-pointer" @click="isEdit = true">编辑</a>
        <!--      <teleport v-if='isEdit' to='body'>-->
        <!--        <div class='absolute top-0 left-0 right-0 bottom-0 z-10 opacity-30 bg-white' @click='isEdit = false'></div>-->
        <!--      </teleport>-->
    </div>
    <div class="controls grid gap-3">
        <control-item
            v-for="(control, index) in mockList"
            :key="control.value"
            :data="control"
            :isEdit="isEdit"
            @remove="handleRemove(index)"
        ></control-item>
    </div>
</template>

<style lang="scss" scoped>
.controls {
    grid-template-columns: repeat(auto-fill, minmax(66px, 1fr));
}
</style>
