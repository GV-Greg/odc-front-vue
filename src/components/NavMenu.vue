<script setup>
/*
  imports
*/
  import { useAuthStore } from "../stores/storeAuth";
  import { RouterLink } from 'vue-router'

/*
  User data
*/
  const authUser = useAuthStore()

/*
  Menu items
*/
  const pages = [
    { name: "Accueil", link: "/app/", icon:"gi-medieval-pavilion", color: "gray", status: "public"},
    { name: "Éco", link: "/app/eco", icon:"gi-chest", color: "yellow", status: "public"},
    { name: "Sécu", link: "/app/secu", icon:"gi-swords-emblem", color: "salmon", status: "public"},
    { name: "Anim", link: "/app/anim", icon:"gi-rolling-dice-cup", color: "teal", status: "public"},
    { name: "Profil", link: "/app/profil", icon:"gi-barbute", color: "slate", status: "private"},
  ]
</script>

<template>
  <nav class="flex flex-wrap justify-center">
    <RouterLink v-for="(page, index) in pages" :key="index" :to="page.link" v-show="page.status === 'public' || (page.status === 'private' && authUser.isLoggedIn)"
                class="mx-2 md:mx-5 h-20 w-20 p-4 flex flex-col items-center rounded-full ring-4 ring-opacity-30 ring-offset-1 shadow-inner"
                :class="'bg-' + page.color + '-600 hover:bg-' + page.color + '-500 ring-' + page.color + '-400 ring-offset-' + page.color + '-100'">
      <v-icon :name="page.icon" scale="2" class="text-4xl" :class="'text-' + page.color + '-100'"/>
      <span class="text-xs text-gray-100 font-bold">{{ page.name }}</span>
    </RouterLink>
  </nav>
</template>