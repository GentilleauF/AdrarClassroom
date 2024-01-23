<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../lib/supabaseClient";
import HeaderAdmin from "../components/HeaderAdmin.vue";
import FooterAdmin from "../components/FooterAdmin.vue";

const name = ref("");
const firstname = ref("");
const mail = ref("");
const session = ref("");
const sessions = ref([]);

// Get the sessions from supabase
async function submitForm(e) {
    e.preventDefault();
    const { error } = await supabase.from("stagiaires").insert([
        {
            name: name.value,
            firstname: firstname.value,
            mail: mail.value,
            session: session.value,
        },
    ]);
}

// Get the sessions from supabase
async function getSession() {
    const { data } = await supabase.from("session").select();
    sessions.value = data;
}

onMounted(() => {
    getSession();
});
</script>

<template>
    <HeaderAdmin />
    <div class="flex flex-col items-center h-screen">
        <h2 class="text-center mt-6 font-semibold text-3xl text-red-500">
            Création de compte stagiaire
        </h2>
        <form class="space-y-5 flex flex-col p-3 md:p-20 md:w-[60vw]" action="">
            <div class="flex flex-row justify-center items-center">
                <label
                    class="w-[20vw] text-sm font-medium text-gray-700"
                    htmlFor="name"
                >
                    Nom du stagiaire :
                </label>
                <input
                    v-model="name"
                    type="text"
                    required
                    class="rounded border flex-auto border-gray-300 bg-white px-3.5 py-2 text-black sm:text-sm sm:leading-6"
                    id="name"
                />
            </div>
            <div class="flex flex-row justify-center items-center">
                <label
                    class="w-[20vw] text-sm font-medium text-gray-700"
                    htmlFor="firstname"
                >
                    Prénom du stagiaire :
                </label>
                <input
                    v-model="firstname"
                    type="text"
                    required
                    class="rounded border flex-auto border-gray-300 bg-white px-3.5 py-2 text-black sm:text-sm sm:leading-6"
                    id="firstname"
                />
            </div>
            <div class="flex flex-row justify-center items-center">
                <label
                    class="w-[20vw] text-sm font-medium text-gray-700"
                    htmlFor="mail"
                >
                    Mail:
                </label>
                <input
                    v-model="mail"
                    type="mail"
                    required
                    class="rounded border flex-auto border-gray-300 bg-white px-3.5 py-2 text-black sm:text-sm sm:leading-6"
                    id="mail"
                />
            </div>
            <div class="flex bg-white">
                <label
                    for="session"
                    class="w-[20vw] text-sm font-medium text-gray-700"
                    >Choisissez une session :</label
                >
                <select
                    v-model="session"
                    id="session"
                    name="session"
                    class="mt-1 flex-auto p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                >
                    <option
                        v-for="session in sessions"
                        :key="session.id"
                        :value="session.id"
                    >
                        {{ session.session }}
                    </option>
                </select>
            </div>
            <div class="flex justify-center">
                <button
                    @click="submitForm"
                    type="submit"
                    class="bg-blackBg w-48 mt-10 text-white p-1 rounded"
                >
                    Créer le compte
                </button>
            </div>
        </form>
    </div>
    <FooterAdmin/>
</template>
