<template>
      <form class="space-y-5 flex flex-col p-20 w-[60vw]">
    <div class="flex flex-row justify-center items-center">
      <label
        class="w-[15vw] font-medium leading-6 text-gray-900"
        htmlFor="username"
      >
        Titre du cours :
      </label>
      <input
        type="text"
        required
        class="rounded border flex-auto border-gray-300 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
        id="username"
        name="username"
      />
    </div>

    <div class="flex">
      <label
        class="w-[15vw] font-medium leading-6 text-gray-900"
        htmlFor="username"
      >
        Choix du fichier :
      </label>
      <div>
        <input type="file" required id="img" name="img" />
        <p>Fichier accépté: .docx .pdf .png .jpg</p>
      </div>
    </div>
    <div class="flex justify-center mt-6">
      <button type="submit" class="bg-blackBg w-48 text-white">Envoyer</button>
    </div>
  </form>
</template>