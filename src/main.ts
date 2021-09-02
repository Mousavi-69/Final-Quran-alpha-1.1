import { createApp } from 'vue'
import App from './App.vue'
import router from './Routing'
import store from './Store'

createApp(App)
.use(router)
.use(store)
.mount('#app')
