import { createApp } from 'vue'
import App from './App.vue'
import router from './Routing'
import store from './Store' 
import  './styles/sass/main.scss'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import{library} from '@fortawesome/fontawesome-svg-core'
import {faSearch,faBars,faChevronLeft,faChevronRight,faMicrophoneAlt,faGlobeAsia,faFont,faTimes} from '@fortawesome/free-solid-svg-icons'
library.add(faSearch,faBars,faChevronLeft,faChevronRight,faMicrophoneAlt,faGlobeAsia,faFont,faTimes)
createApp(App)
.component('fa',FontAwesomeIcon)
.use(router)
.use(store)
.mount('#app') 
