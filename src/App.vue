<script setup>
  import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView name="Nav"></RouterView>
  <RouterView></RouterView>
</template>

<style>
@import './assets/base.css';
@import './assets/style.css';

#app {
  max-width: 1280px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 2rem;
  font-weight: normal;
}

header {
  line-height: 1.5;
}

a {
  text-decoration: none;
  transition: 0.4s;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  header {
    display: flex;
    place-items: center;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
