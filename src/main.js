import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useAuthStore } from "./stores/storeAuth";
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import { OhVueIcon, addIcons } from "oh-vue-icons"

import {
    BiShieldLockFill,
    GiBroadheadArrow,
    FaArrowAltCircleLeft,
    GiMedievalPavilion,
    GiChest,
    GiSwordsEmblem,
    GiRollingDiceCup,
    GiBarbute,
} from "oh-vue-icons/icons"

addIcons(
    BiShieldLockFill,
    GiBroadheadArrow,
    FaArrowAltCircleLeft,
    GiMedievalPavilion,
    GiChest,
    GiSwordsEmblem,
    GiRollingDiceCup,
    GiBarbute,
)

import en from '@/locales/en.json'
import fr from '@/locales/fr.json'

const i18n = createI18n({
    legacy: false, // you must set `false`, to use Composition API
    locale: 'fr',
    fallbackLocale: 'en',
    messages: {
        en,
        fr,
    },
})

const options = {
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#e14341',
}

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(VueSweetalert2, options)
app.component("v-icon", OhVueIcon)

// get the store
const store = useAuthStore()
window.Swal =  app.config.globalProperties.$swal
// initialize auth listener to see if we have a user at startup
store.initializeAuth().then(() => {
    app.mount('#app')
})

