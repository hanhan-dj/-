import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less' // 加载全局样式

createApp(App).use(store).use(router).mount('#app')
