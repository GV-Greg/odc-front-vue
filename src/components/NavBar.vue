<script setup>
/*
 imports
*/
  import { RouterLink, useRouter } from 'vue-router'
  import { useAuthStore } from "../stores/storeAuth"
import Toast from "../directives/toast";

/*
  logout
*/
  const authUser = useAuthStore()
  const router = useRouter()
  const logout =() => {
    authUser.logout()
        .then(() => {
          router.push('/')
        })
        .catch(error => {
          console.log(error)
          Toast(350, 'error', 'top-right', error.response.data.message)
        })
  }
</script>

<template>
  <header class="w-full mx-0 flex flex-col">
    <div class="w-full bg-gradient-to-r from-blue-200 to-blue-100" v-show="authUser.isLoggedIn">
      <div class="flex items-center justify-end p-4">
        <nav class="w-full grid grid-cols-2 justify-items-stretch">
          <div class="space-x-3 justify-self-start flex items-center">
            <RouterLink to="/app/profil" class="flex items-center rounded-lg pl-1.5 pr-3 py-0.5 no-underline font-semibold bg-slate-800 text-gray-200 hover:bg-blue-500 hover:text-slate-900">
              <v-icon name="gi-barbute" scale="2" class="mr-1"/><span class="font-bold text-xl">{{ authUser.getUsername }}</span>
            </RouterLink>
            <RouterLink to="/app/" class="flex items-center rounded-lg pl-1.5 pr-3 py-0.5 no-underline font-semibold bg-slate-800 text-gray-200 hover:bg-blue-500 hover:text-slate-900">
              <v-icon name="gi-medieval-pavilion" scale="2" class="mr-1"/><span class="font-bold text-xl">Accueil</span>
            </RouterLink>
          </div>
          <div class="space-x-3 justify-self-end flex items-center">
            <RouterLink to="festival" v-show="authUser.getRoles.includes('FaSi Fest') || authUser.isAdmin"
                        class="flex items-center rounded-lg pl-1.5 pr-3 py-0.5 no-underline font-semibold bg-slate-800 text-gray-200 hover:bg-blue-500 hover:text-slate-900">
              <v-icon name="gi-bugle-call" scale="2" class="mr-1"/><span class="font-bold text-xl">FaSi Fest</span>
            </RouterLink>
            <RouterLink to="company" v-show="authUser.getRoles.includes('Vit\'Art') || authUser.isAdmin"
                        class="flex items-center rounded-lg pl-1.5 pr-3 py-0.5 no-underline font-semibold bg-slate-800 text-gray-200 hover:bg-blue-500 hover:text-slate-900">
              <v-icon name="gi-anchor" scale="2" class="mr-1"/><span class="font-bold text-xl">Vit'Art</span>
            </RouterLink>
            <a href='https://odc-admin.creacube.be' v-show="authUser.isAdmin" target="_blank" rel="noopener noreferrer"
               class="flex items-center rounded-lg pl-1.5 pr-3 py-0.5 no-underline font-semibold bg-slate-800 text-gray-200 hover:bg-blue-500 hover:text-slate-900">
              <v-icon name="ri-home-gear-line" scale="2" class="mr-1"/><span class="font-bold text-xl">Admin</span>
            </a>
            <button class="flex items-center rounded-lg pl-1.5 pr-0.5 py-0.5 no-underline font-semibold bg-red-800 text-gray-200 hover:bg-red-600 hover:text-slate-900" @click="logout">
              <v-icon name="fa-power-off" scale="2" class="mr-1"/>
            </button>
          </div>
        </nav>
      </div>
    </div>
    <div class="mx-0 w-full tablet:w-2/3 flex flex-col text-white">
      <h1 class="mb-0 text-4xl laptop:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-600">
        Office des coffres
      </h1>
    </div>
  </header>
</template>