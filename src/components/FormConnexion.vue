<script setup>
import { ref } from "vue";
import { supabase } from "../lib/supabaseClient.js";
// Inputs
let email = ref("");
let password = ref("");
</script>

<template>
    <h1 class="text-center m-16 text-6xl">Bienvenue sur AdrarClassroom :)</h1>
    <div class="flex justify-center py-8">
        <!-- container (extérieur) -->
        <div class="size-1/3 border-2 border-black-adrar rounded-md">
            <!-- container -->
            <div class="flex flex-col text-center p-4 bg-blue-adrar">
                <!-- container (intérieur)-->
                <h1 class="text-3xl"><strong>Connexion</strong></h1>

                <label class="pt-4 text-xl">Adresse mail:</label>
                <div class="flex justify-center">
                    <input
                        type="email"
                        id="email"
                        v-model="email"
                        class="p-2 w-1/2 rounded-md"
                        required
                    />
                </div>

                <label class="pt-8 text-xl">Mot de passe:</label>
                <div class="flex justify-center">
                    <input
                        type="password"
                        id="password"
                        v-model="password"
                        class="p-2 w-1/2 rounded-md"
                        required
                    />
                </div>

                <a href="www.google.com" class="mt-4 mb-16 text-xl"
                    ><u>Mot de passe oublié</u></a
                >

                <div class="flex justify-center">
                    <button
                        @click="login"
                        class="border border-black-adrar focus:outline-black py-2.5 px-4 border-b-4 bg-green-adrar hover:bg-green-dark-adrar rounded-md mb-2 text-2xl p-4 w-64"
                    >
                        Valider
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Login
async function login() {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
    });
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
}

// Get Current user session
async function currentUser() {
    const localUser = await supabase.auth.getSession();
    console.log(localUser);
}

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
