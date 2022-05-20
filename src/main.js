import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import { OhVueIcon, addIcons } from "oh-vue-icons"
import { BiShieldLockFill, GiBroadheadArrow } from "oh-vue-icons/icons";
addIcons(BiShieldLockFill, GiBroadheadArrow);

const app = createApp(App)
app.use(router)
app.use(VueSweetalert2)
app.component("v-icon", OhVueIcon);
app.mount('#app')
