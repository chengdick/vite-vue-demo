import { createApp } from 'vue'
import { store } from './store'
import router from './router'
import App from './App.vue'
import generateTheme from './components/theme-style-generator'
import themes from './styleTemplate'
import { componentUse } from './utils/component-use'
import 'ant-design-vue/lib/style/index.css'
import './assets/less/global.less'

const app: any = createApp(App)
generateTheme(themes)
componentUse(app)
app.use(store).use(router).mount('#app')
