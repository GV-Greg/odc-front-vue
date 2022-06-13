<script setup>
/*
  imports
*/
  import NavMenu from '../components/NavMenu.vue'
  import { useAuthStore } from '../stores/storeAuth'

/*
  User data
*/
  const authUser = useAuthStore()
  console.log(authUser.getUsername)
</script>

<template>
  <main class="main md:w-3/4">
    <div class="overflow-y-auto flex flex-col flex-grow">
      <h2>Bienvenue <span v-show="authUser.getUsername != null" class="username">{{ authUser.getUsername }}</span>! </h2>
    </div>
    <NavMenu />
  </main>
</template>