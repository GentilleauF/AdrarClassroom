<template>
  <section class="flex flex-col bg-slate-200 justify-around md:flex-row ">
    <div class=" flex flex-1 2xl:ml-20 m-5 ">
      <img
        src="../assets/profil-img.png"
        class="w-36 h-36 rounded-full border-4 border-adrarGreen"
        alt="profil stagiaire"
      />
      <div class="flex flex-col justify-start mt-3 ml-10">
        <p class="text-lg font-bold">Nom du stagiaire</p>
        <p>Level d'XP : 88</p>
      </div>
    </div>

    <div class="flex flex-1 justify-center items-center space-x-10">
      <a href="https://www.discord.com">
        <img class="w-10" src="../assets/icons/discord.png" alt="discord" />
      </a>
      <a href="https://www.github.com">
        <img class="w-10" src="../assets/icons/github.png" alt="git" />
      </a>
      <a href="https://www.linkedin.com">
        <img
          class="w-10"
          src="../assets/icons/linkedin.png"
          alt="linkedin"
        />
      </a>
    </div>
  </section>
</template>
