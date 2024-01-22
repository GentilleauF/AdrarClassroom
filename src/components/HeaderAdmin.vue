<script setup>
import {MagnifyingGlassIcon} from '@heroicons/vue/24/solid'
import {ArrowLeftEndOnRectangleIcon} from '@heroicons/vue/24/solid'
</script>

<template>
    <header class="bg-black">
        <div class="flex flex-row items-center justify-between">
            <div class="flex flex-row items-center">
                <img class="size-24 p-2" src="../assets/images/logo-AdrarClassroom.png" alt="logo adrar classroom"/>
                <p class="text-white">ADRAR ClassRoom</p>
            </div>
            <div class="flex flex-row items-center">
                <input type="search" class="w-96 rounded" placeholder="Rechercher">
                <router-link to="">
                  <MagnifyingGlassIcon class="text-white size-8 hover:text-red-adrar"/>    
                </router-link>
            </div>
            <router-link to="">
                <ArrowLeftEndOnRectangleIcon class="text-white size-10 m-5 hover:text-red-adrar"/>
            </router-link>
            

        </div>

    </header>
</template>

<style scoped></style>