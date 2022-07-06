<script setup>
import {Repl, ReplStore} from '@vue/repl'
import '@vue/repl/styles.css'
import {ref, reactive, version} from "vue";

const defaultVueRuntimeURL = `https://unpkg.com/@vue/runtime-dom@${version}/dist/runtime-dom.esm-browser.js`;

const loading = ref(true);

const store = reactive(new ReplStore());
const autoResize = ref(false);
const showCompileOutput = ref(true);
// 是否显示导入的map
const showImportMap = ref(true);
// 是否清空所有控制台输出
const clearConsole = ref(false);
const sfcOptions = ref(null);
// 布局: vertical 为上下布局
const layout = ref(null);
// 是否为服务端渲染
const ssr = ref(false);

setTimeout(() => {
store.setFiles(
  {
'App.vue': `<script setup>
import { ref } from 'vue'
import { debounce } from 'lodash'

const msg = ref('Hello World!')

const handleClick = debounce(() => {
  console.log(11111)
}, 1000)
<\/script>

<template>
    <h1>{{ msg }}</h1>
    <input v-model="msg">
    <button @click="handleClick">外部import测试</button>
</template>`
  },
  'App.vue'
)

}, 1000);

setTimeout(() => {
    const importMap = store.getImportMap();
    const imports = importMap.imports || (importMap.imports = {})
    imports.vue2 = "2222222222";
    imports.vue3 = "3333333333";
    console.log(importMap);
    console.log(imports);
    store.setImportMap(importMap);

    loading.value = false;
}, 2000)

</script>

<template>
    <Repl v-if="!loading" :store="store" :showImportMap="showImportMap" :clearConsole="clearConsole" :autoResize="autoResize" :layout="layout" :ssr="ssr" />
</template>

<style>
.vue-repl {
    height: 100%;
}
</style>