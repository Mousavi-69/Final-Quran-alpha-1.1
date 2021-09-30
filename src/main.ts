import { createApp, getTransitionRawChildren } from 'vue'
import App from './App.vue'
import router from './Routing'
import store from './Store' 
import  './styles/sass/main.scss'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import{library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
library.add(fas)
createApp(App)
.component('fa',FontAwesomeIcon)
.use(router)
.use(store)
.mount('#app')
if('serviceWorker' in navigator){
    window.addEventListener('load',()=>{
        navigator.serviceWorker.register('/sw.js',{scope:'/'})
    })
}
