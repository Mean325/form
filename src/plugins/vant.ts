import { createApp } from 'vue';
import App from '@/App.vue'

const app = createApp(App)

import Vant from 'vant';
import 'vant/lib/index.css';

app.use(Vant)