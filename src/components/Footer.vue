<script setup>
import { PhoneIcon } from "@heroicons/vue/24/solid";
import { EnvelopeIcon } from "@heroicons/vue/24/solid";
import { AtSymbolIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <footer class="flex justify-around bg-blackBg pt-6 text-white">
    <div class="flex flex-1 flex-col items-center">
      <img class="h-20 mb-5" src="../assets/icons/logo_adrar.png" alt="" />
      <a href="https://www.linkedin.com/school/adrarnumerique/">
        <img class="h-12 w-12" src="../assets/icons/linkedin.png" alt="" />
      </a>
    </div>

    <div class="flex flex-col flex-1 items-center space-y-4">
      <h4 class="text-lg font-bold">CONTACT</h4>
      <div class="flex flex-row">
        <PhoneIcon class="w-6 mr-5" />
        <p>05 34 31 38 10</p>
      </div>
      <div class="flex flex-row">
        <EnvelopeIcon class="w-6 mr-5" />
        <p>contact@adrar-numerique.com</p>
      </div>
    </div>

    <div class="hidden md:flex flex-col flex-1 items-center space-y-3">
      <router-link to="/cours">COURS</router-link>
      <router-link to="/blog">BLOG</router-link>
      <router-link to="/">MON ESPACE</router-link>
      <router-link to="/stagiaires-liste">STAGIAIRES</router-link>
    </div>
  </footer>
      <div class="flex flex-row justify-center bg-blackBg text-white">
      <p class="pt-2">Site web crée par la Blue Shrimp Company</p>
      <img src="../assets/images/blue_jelly.png" alt="Logo Bleu Shrimp Company" class="size-10">
    </div>
</template>
