<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="w-full mx-0 flex flex-col">
    <div class="w-full bg-gradient-to-r from-blue-200 to-blue-100">
      <div class="flex items-center justify-end p-4">
        <nav class="space-x-6">
          <RouterLink to="/app/" class="no-underline font-semibold text-gray-800 hover:text-gray-600">
            Accueil
          </RouterLink>
          <RouterLink to="festival" class="no-underline font-semibold text-gray-800 hover:text-gray-600">
            FaSi Fest
          </RouterLink>
          <RouterLink to="company" class="no-underline font-semibold text-gray-800 hover:text-gray-600">
            Vit'Art
          </RouterLink>
          <a href='https://odc-admin.creacube.be' target="_blank" rel="noopener noreferrer" class="no-underline font-semibold text-gray-800 hover:text-gray-600">
            Admin
          </a>
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