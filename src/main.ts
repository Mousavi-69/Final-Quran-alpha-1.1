import { createApp } from 'vue'
import App from './App.vue'
import router from './Routing'
import store from './Store'
import  './styles/sass/main.scss'

createApp(App)
.use(router)
.use(store)
.mount('#app')
