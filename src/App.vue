<script setup>
/*
  imports
*/
  import { RouterView } from 'vue-router'
  import { useRouter } from 'vue-router'
  import { onMounted } from 'vue'
  import UserService from './services/user.service.js';
  import { useAuthStore } from "./stores/storeAuth";

  const router = useRouter()
  const authStore = useAuthStore()
  const user = JSON.parse(localStorage.getItem('auth_username'));

  onMounted(async() => {
    if(user) {
      await UserService.check(user).then((response) => {
        if(response.success === true) {
          authStore.setUsername(response.data.user)
          authStore.setIsLoggedIn(true)
          authStore.setRoles(response.data.roles)
        } else {
          authStore.setUsername(null)
          authStore.setIsLoggedIn(false)
          authStore.setRoles([])
        }
      })
    }
  })
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
