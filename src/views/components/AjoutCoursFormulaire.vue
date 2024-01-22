<template>
      <form class="space-y-5 flex flex-col p-3 md:p-20 md:w-[60vw]" action="">
    <div class="flex flex-row justify-center items-center">
      <label
        class="w-[20vw] font-medium leading-6 text-gray-900"
        htmlFor="username"
      >
        Titre du cours:
      </label>
      <input
        type="text"
        required
        class="rounded border flex-auto border-gray-300 bg-white px-3.5 py-2 text-black  sm:text-sm sm:leading-6"
        id="username"
        name="username"
      />
    </div>

    <div class="flex flex-row justify-center items-center">
      <label class="w-[20vw] font-medium leading-6 text-gray-900" htmlFor="img">
        Image du cours :
      </label>
      <input
        type="file"
        required
        class="min-w-0 flex-auto rounded border border-gray-300 bg-white px-3.5 py-2 text-black shadow-sm  sm:text-sm sm:leading-6"
        id="img"
        name="img"
      />
    </div>

    <div class="flex flex-row justify-center items-center">
      <label
        class="w-[20vw] font-medium leading-6 text-gray-900"
        htmlFor="lesson-content"
      >
        Contenu du cours :
      </label>
      <textarea
        name="lesson-content"
        required
        class="min-w-0 flex-auto rounded border border-gray-300 bg-white px-3.5 py-2 text-black shadow-sm sm:text-sm sm:leading-6"
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <div class="flex justify-center">
      <button type="submit" class="bg-blackBg w-48 text-white p-1 rounded">Envoyer</button>
    </div>
  </form>
</template>