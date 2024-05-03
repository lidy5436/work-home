
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style/index.scss'
import Components from "@/components/index.js";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(Components)
app.mount('#app')
