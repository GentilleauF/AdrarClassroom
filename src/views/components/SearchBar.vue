<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="flex justify-end mr-10 mt-6">
    <input placeholder="Rechercher" type="text" class="border" />
    <router-link to="">
       <MagnifyingGlassIcon class="w-6" /> 
    </router-link>
    
  </div>
</template>
