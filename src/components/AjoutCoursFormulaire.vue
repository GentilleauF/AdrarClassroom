<script setup>
import { ref } from "vue";
import { supabase } from "../lib/supabaseClient.js";
const titre = ref("");
const contenu = ref("");
</script>

<template>
    <div class="space-y-5 flex flex-col p-3 md:p-20 md:w-[60vw]">
        <div class="flex flex-row justify-center items-center">
            <label
                class="w-[20vw] font-medium leading-6 text-gray-900"
				htmlFor="titre"
				>
                Titre du cours:
            </label>
            <input
                type="text"
                class="rounded border flex-auto border-gray-300 bg-white px-3.5 py-2 text-black sm:text-sm sm:leading-6"
                id="titre"
                name="titre"
				v-model="titre"
				required
            />
        </div>

        <div class="flex flex-row justify-center items-center">
            <label
                class="w-[20vw] font-medium leading-6 text-gray-900"
                htmlFor="img"
            >
                Image du cours :
            </label>
            <input
                type="file"
                class="min-w-0 flex-auto rounded border border-gray-300 bg-white px-3.5 py-2 text-black shadow-sm sm:text-sm sm:leading-6"
                id="img"
                name="img"
            />
        </div>

        <div class="flex flex-row justify-center items-center">
            <label
                class="w-[20vw] font-medium leading-6 text-gray-900"
                htmlFor="contenu"
            >
                Contenu du cours :
            </label>
            <textarea
				id="contenu"
                name="contenu"
                class="min-w-0 flex-auto rounded border border-gray-300 bg-white px-3.5 py-2 text-black shadow-sm sm:text-sm sm:leading-6"
                cols="30"
                rows="10"
				v-model="contenu"
				required
            ></textarea>
        </div>
        <div class="flex justify-center">
            <button
                type="submit"
                class="bg-blackBg w-48 text-white p-1 rounded"
				@click="creerCours"
            >
                Envoyer
            </button>
        </div>
    </div>
</template>

<script>
async function creerCours() {
	const { data, error } = await supabase
		.from("cours")
		.insert([{ title: titre.value, contenu: contenu.value }]);
	if (error) {
		console.log(error);
	} else {
		console.log(data);
	}
}
</script>
