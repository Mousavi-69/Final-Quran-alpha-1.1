import { createApp, getTransitionRawChildren } from 'vue'
import App from './App.vue'
import router from './Routing'
import store from './Store' 
import  './styles/sass/main.scss'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import{library} from '@fortawesome/fontawesome-svg-core'
import {faSearch,faBars,faChevronLeft,faChevronRight,faMicrophoneAlt,faGlobeAsia,faFont,faTimes,faSave,faPlayCircle,faShareAltSquare} from '@fortawesome/free-solid-svg-icons'
library.add(faSearch,faBars,faChevronLeft,faChevronRight,faMicrophoneAlt,faGlobeAsia,faFont,faTimes,faSave,faPlayCircle,faShareAltSquare)
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
