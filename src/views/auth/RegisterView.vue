<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="mx-0 w-full tablet:w-1/3 flex flex-col text-white">
    <h1 class="mb-0 text-4xl laptop:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-600">
      Office des coffres
    </h1>
    <div class="flex flex-col items-center">
      <div class="w-1/3 px-3 grid grid-cols-1 justify-items-center text-white text-2xl font-bold hover:text-red-900 transform hover:translate-y-px hover:translate-x-px shadow-md">
        <RouterLink to="/login" class="w-full flex justify-center items-center pb-2.5 pt-2 text-center bg-gradient-to-br from-red-600 to-orange-400 rounded-md align-middle">
          <v-icon name="fa-arrow-alt-circle-left" scale="2" />
          <span class="ml-2 mb-0.5">Retour</span>
        </RouterLink>
      </div>
      <div class="w-11/12 laptop:w-12/12 my-2 pb-2 bg-gray-200 flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-xl">
        <div class="w-full mt-2 md:mt-3 px-7 overflow-y-auto">
          <h2>Cr&eacute;ation votre compte</h2>
          <form class="mb-2" onSubmit={register}>
            <div class="form-group">
              <label for="pseudo" class="form-label">Pseudo</label>
              <input type="text" name="pseudo" value={pseudo} onChange={onInputChange} class="form-field" />
              <span class="form-error">{errors.pseudo}</span>
            </div>
            <div class="form-group mt-3">
              <label for="email" class="form-label">Email</label>
              <input type="text" name="email" value={email} onChange={onInputChange} class="form-field" />
              <span class="form-error">{errors.email}</span>
            </div>
            <div class="form-group mt-3">
              <label for="password" class="form-label">Mot de passe</label>
              <input type="password" name="password" value={password} onChange={onInputChange} class="form-field" />
              <span class="form-error">{errors.password}</span>
            </div>
            <div class="form-group mt-3">
              <label for="confirmation" class="form-label">Confirmation mot de passe</label>
              <input type="password" name="confirmation" value={confirmation} onChange={onInputChange} class="form-field" />
              <span class="form-error">{errors.confirmation}</span>
            </div>
            <div class="form-group mt-4">
              <button type="submit" class="btn-auth py-2 uppercase">S'enregistrer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>