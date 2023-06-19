import '@/assets/scss/app.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSun, faMoon, faUser, faHouse, faTimes, faMagnifyingGlass, faCartShopping, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faSun, faMoon, faUser, faHouse, faTimes, faMagnifyingGlass, faCartShopping, faMinus, faPlus, faTrash)

createApp(App)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .use(createPinia())
    .use(router)
    .mount('#app')