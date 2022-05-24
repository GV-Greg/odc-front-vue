<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="mx-0 w-full tablet:w-1/3 flex flex-col text-white">
    <h1 class="mb-2 text-4xl laptop:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-600">
      Office des coffres
    </h1>
    <div class="flex flex-col items-center">
      <div class="w-11/12 laptop:w-12/12 mb-1 grid grid-cols-1 justify-self-center text-center text-white text-3xl font-black hover:text-gray-800 transform hover:translate-y-px hover:translate-x-px shadow-inner">
        <RouterLink to="/app/" class="pb-2.5 pt-1.5 bg-gradient-to-br from-red-600 to-orange-400 rounded-xl">Entrez sans compte</RouterLink>
      </div>
      <div class="w-11/12 laptop:w-12/12 my-5 bg-gray-200 flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-xl">
        <div class="w-full mt-2 md:mt-5 px-7 overflow-y-auto">
          <h2>Connectez-vous</h2>
          <form class="mt-6" onSubmit={connect}>
            <div class="form-group">
              <label for="pseudo" class="form-label">Pseudo</label>
              <input type="text" name="pseudo" value={pseudo} onChange={onInputChange} class="form-field" />
              <span class="form-error">{errors.pseudo}</span>
            </div>
            <div class="form-group mt-5">
              <label for="password" class="form-label">Mot de passe</label>
              <input type="password" name="password" value={password} onChange={onInputChange} class="form-field" />
              <span class="form-error">{errors.password}</span>
            </div>
            <div class="form-group mt-10">
              <button type="submit" class="btn-auth py-2 uppercase">Se connecter</button>
            </div>
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
  </div>
</template>