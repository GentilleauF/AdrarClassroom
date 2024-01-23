<script setup>
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/vue/24/solid";
import { RouterLink } from "vue-router";
import { supabase } from "../lib/supabaseClient.js";
</script>

<template>
    <header class="bg-black">
        <div class="flex flex-row items-center justify-between">
            <div class="flex flex-row items-center">
                <img
                    class="size-24 p-2"
                    src="../assets/images/logo-AdrarClassroom.png"
                    alt="logo adrar classroom"
                />
                <p class="text-white">ADRAR ClassRoom</p>
            </div>
            <nav class="text-white space-x-10 text-xl">
                <RouterLink to="" class="hover:text-red-adrar"
                    >Cours</RouterLink
                >
                <RouterLink to="/blog" class="hover:text-red-adrar"
                    >Blog</RouterLink
                >
                <RouterLink to="" class="hover:text-red-adrar"
                    >Stagiaires</RouterLink
                >
                <RouterLink to="/profil" class="hover:text-red-adrar"
                    >Mon Espace</RouterLink
                >
            </nav>
            <router-link to="">
                <ArrowLeftEndOnRectangleIcon
                    class="text-white size-10 m-5 hover:text-rose-600"
                    @click="logout"
                />
            </router-link>
        </div>
    </header>
</template>

<script>
// Logout
async function logout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.log(error);
    } else {
        console.log("ByeBye (logged out)");
    }
}
</script>
