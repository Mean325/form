<script setup lang="ts">
import { ref, watch } from 'vue';

import { Sunny, Moon } from '@element-plus/icons-vue';
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
    <el-switch v-model="isDark" size="large" inline-prompt :active-icon="Sunny" :inactive-icon="Moon" />
</template>

<style lang="scss" scoped></style>
