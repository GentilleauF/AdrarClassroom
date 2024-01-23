<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/vue/24/solid";
import { supabase } from "../lib/supabaseClient";
</script>

<script>
// Logout
async function logout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.log(error);
    } else {
        console.log("ByeBye (logged out)");
        window.location.href = '/connexion'
    }
}
</script>

<template>
  <header class="bg-black-adrar">
    <div class="flex flex-row items-center justify-between">
      <RouterLink to="/accueil-formateur">
        <div class="flex flex-row items-center">
        <img
          class="size-24 p-2"
          src="../assets/images/logo-AdrarClassroom.png"
          alt="logo adrar classroom"
        />
        <p class="text-white">ADRAR ClassRoom</p>
      </div>
      </RouterLink>
      
      <div class="flex flex-row items-center">
        <input type="search" class="hidden md:block w-96 rounded" placeholder="Rechercher" />
        <router-link to="">
          <MagnifyingGlassIcon class="text-white size-8 hover:text-red-adrar" />
        </router-link>
      </div>
      <router-link to="">
        <ArrowLeftEndOnRectangleIcon
          class="text-white size-10 m-5 hover:text-red-adrar"
          @click="logout"
        />
      </router-link>
    </div>
  </header>
</template>

<style scoped></style>
