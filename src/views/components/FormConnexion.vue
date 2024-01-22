<script setup>

</script>

<template>
  <h1 class="text-center m-16 text-6xl">Bienvenue sur AdrarClassroom :)</h1>
  <div class="flex justify-center py-8"> <!-- container (extérieur) -->
    <div class="size-1/3 border-2 border-black-adrar rounded-md"> <!-- container -->
      <form class="flex flex-col text-center p-4 bg-blue-adrar"> <!-- container (intérieur)-->
        <h1 class="text-3xl"><strong>Connexion</strong></h1>

        <label class="pt-4 text-xl">Adresse mail:</label>
        <div class="flex justify-center">
          <input type="email" id="name" class="p-2 w-128 rounded-md" required>
        </div>
        
        <label  class="pt-8 text-xl">Mot de passe:</label>
        <div class="flex justify-center">
          <input type="password" id="password" class="p-2 w-128 rounded-md" required>
        </div>
        
        <a href="www.google.com" class="mt-4 mb-16 text-xl"><u>Mot de passe oublié</u></a>
         
        <div class="flex justify-center">
          <button class="border border-black-adrar bg-green-adrar rounded-md mb-2 text-2xl p-4 w-64">Valider</button>
        </div>
      </form>
    </div>
  </div>
</template>