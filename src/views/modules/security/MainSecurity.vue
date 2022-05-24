<script setup>
  import { RouterLink } from 'vue-router'
  import NavMenu from '../../../components/NavMenu.vue'
</script>

<template>
  <main class="mx-5 mb-5 p-5 bg-gray-200 w-11/12 md:w-3/4 h-full flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-xl">
    <div class="overflow-y-auto flex flex-col flex-grow">
      <h2>Sécurité</h2>
    </div>
    <NavMenu />
  </main>
</template>