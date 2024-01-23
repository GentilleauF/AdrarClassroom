<script setup>
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/vue/24/solid";
import { RouterLink } from "vue-router";
import { ref } from "vue";
</script>

<script>
const menuOpen = ref(false);

const toggleMenu = () => {
  console.log("ok");
  menuOpen.value = !menuOpen.value;
};
</script>

<template>
  <header class="bg-black font-montserrat">
    <div class="flex flex-row items-center justify-between">
      <div class="flex flex-row items-center">
        <RouterLink to="/">
          <img
            class="size-20 p-2"
            src="../assets/images/logo-AdrarClassroom.png"
            alt="logo adrar classroom"
          />
        </RouterLink>
        <RouterLink to="/">
          <p class="text-white">ADRAR ClassRoom</p>
        </RouterLink>
      </div>

      <button
        @click="toggleMenu"
        class="lg:hidden text-white p-2 focus:outline-none"
      >
        <svg
          :class="['w-6 h-6', menuOpen ? 'hidden' : '']"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <!-- Navigation links -->
      <nav class="hidden lg:flex text-white space-x-10">
        <RouterLink to="" class="hover:text-rose-600">Cours</RouterLink>
        <RouterLink to="" class="hover:text-rose-600">Blog</RouterLink>
        <RouterLink to="" class="hover:text-rose-600">Stagiaires</RouterLink>
        <RouterLink to="/profil" class="hover:text-rose-600"
          >Mon Espace</RouterLink
        >
      </nav>

      <router-link class="hidden lg:flex" to="">
        <ArrowLeftEndOnRectangleIcon
          class="text-white size-6 m-5 hover:text-rose-600"
        />
      </router-link>

      <!-- Close icon for small screens -->
      <button
        @click="toggleMenu"
        v-if="menuOpen"
        class="lg:hidden text-white p-2 focus:outline-none"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>

    <!-- Burger menu for small screens -->
    <div v-if="menuOpen" class="lg:hidden">
      <RouterLink to="" class="block text-white py-2 px-4 hover:bg-gray-800"
        >Cours</RouterLink
      >
      <RouterLink to="" class="block text-white py-2 px-4 hover:bg-gray-800"
        >Blog</RouterLink
      >
      <RouterLink to="" class="block text-white py-2 px-4 hover:bg-gray-800"
        >Stagiaires</RouterLink
      >
      <RouterLink
        to="/profil"
        class="block text-white py-2 px-4 hover:bg-gray-800"
        >Mon Espace</RouterLink
      >
    </div>
  </header>
</template>
