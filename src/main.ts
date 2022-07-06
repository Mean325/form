import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './plugins/tailwindcss/index.ts';
// import './plugins/element-plus';
// import './plugins/vant';

import Vant from 'vant';
import 'vant/lib/index.css';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/styles/dark/css-vars.scss'

const app = createApp(App);

app.use(router);
app.use(Vant);
app.use(ElementPlus);
app.mount('#app')