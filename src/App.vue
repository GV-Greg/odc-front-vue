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
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0 auto;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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
