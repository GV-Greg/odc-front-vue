<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="mx-0 w-full h-full grid grid-cols-1 justify-items-center items-start text-white ">
      <h1 class="mb-28 justify-self-start text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-600">
        Office des coffres
      </h1>
      <RouterLink to="/login">
        <v-icon name="bi-shield-lock-fill" scale="10" animation="ring" hover />
      </RouterLink>
      <div class="animate-bounce -translate-y-6 mt-4 grid grid-cols-1 justify-items-center">
        <div class="transform rotate-225">
          <v-icon name="gi-broadhead-arrow" scale="2" />
        </div>
        <div class="mt-1 font-serif font-bold text-2xl">click</div>
      </div>
    </div>
</template>