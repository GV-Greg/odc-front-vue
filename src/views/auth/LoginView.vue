<script setup>
/*
  imports
*/
  import { reactive, ref } from 'vue'
  import { RouterLink, useRouter } from 'vue-router'
  import InputText from '../../components/forms/InputText.vue'
  import InputPassword from '../../components/forms/InputPassword.vue'
  import DefaultSubmitButton from '../../components/buttons/DefaultSubmitButton.vue'
  import { useAuthStore } from '../../stores/storeAuth'
  import validation from '../../modules/SubmitValidator'
  import Toast from '../../directives/toast'

/*
  form data
*/
  let user = reactive({
    username: '',
    password: '',
  })

  const is_validated = localStorage.getItem('auth_is_validated');
  const error_message = reactive({
    value: ''
  })
/*
  submit form
*/
  const router = useRouter()
  const authStore = useAuthStore()

  const connect = () => {
    if(validation(!user.username || !user.password, "Vous n'avez pas rempli les champs requis !")) {
    } else if(validation(user.username.length > 190, "Le pseudo doit contenir - de 190 caractères !")) {
    } else if(validation(user.password.length < 8, "Le mot de passe doit contenir + de 8 caractères !")) {
    } else if(validation(user.password.length > 190, "Le mot de passe doit contenir - de 190 caractères !")) {
    } else {
      authStore.login(user)
          .then(() => {
            router.push('/app/')
          })
          .catch(error => {
            error_message.value = error.response.data.message
            Toast(350, 'error', 'top-right', error.response.data.message)
          })
    }
  }
</script>

<template>
  <div class="mx-0 w-11/12 flex flex-col text-white">
    <h1 class="mb-2 text-4xl laptop:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-600">
      Office des coffres
    </h1>
    <div class="w-full grid grid-cols-3 gap-0 justify-items-center">
      <div class="col-start-2 col-span-1">
        <div class="w-12/12 mb-1 grid grid-cols-1 text-center text-white text-3xl font-black hover:text-gray-800 transform hover:translate-y-px hover:translate-x-px shadow-inner">
          <RouterLink to="/app/" class="pb-2.5 pt-1.5 bg-gradient-to-br from-red-600 to-orange-400 rounded-xl">Entrez sans compte</RouterLink>
        </div>
        <div class="w-12/12 my-5 bg-gray-200 flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-xl">
          <div class="w-full mt-2 md:mt-5 px-7 overflow-y-auto">
            <h2>Connectez-vous</h2>
            <form class="mt-6" v-on:submit.prevent="connect">
              <InputText v-model="user.username" name="username" label="pseudo" placeholder="Entrez votre pseudo" />
              <InputPassword v-model="user.password" name="password" label="mot de passe" placeholder="Entrez votre mot de passe" />
              <DefaultSubmitButton text="Se connecter" />
            </form>
            <div class="my-5 flex flex-col laptop:flex-row justify-center text-center">
            <span class="text-base text-gray-500">
                Vous n'avez pas de compte ?
            </span>
              <span class="mt-2 laptop:mt-0 text-xl laptop:text-lg">
                <RouterLink to="/register" class="ml-1 font-bold text-blue-600">Enregistrez-vous!</RouterLink>
            </span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-10/12 col-start-3 col-span-1 place-self-center bg-red-500 opacity-80 py-6 px-7 rounded-xl" v-show="is_validated === 'false' || error_message.value === 'Compte non validé'">
        <div class="opacity-100 text-xl text-white text-justify">
          Si vous venez de vous enregistrer, contactez-moi dans le jeu via mon profil "Artifice" en me demandant de valider votre compte.
          Une fois validé, vous pourrez vous connecter sur votre compte.
        </div>
      </div>
    </div>
  </div>
</template>