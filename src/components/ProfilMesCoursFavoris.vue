<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../lib/supabaseClient";
import { PlusIcon } from "@heroicons/vue/24/solid";

const cours = ref([]);

async function getCours() {
  const { data } = await supabase.from("cours").select().limit(1);
  cours.value = data;
}

onMounted(() => {
  getCours();
});
</script>

<template>
  <div class="">
    <h3 class="text-3xl font-bold text-green-adrar mt-20 mb-6">Mes cours Favoris</h3>
    <div class="flex flex-col justify-start items-center md:flex-row md:space-x-10">
      <a href="/" v-for="cour in cours" :key="cour.id">
        <div class="flex flex-col justify-center mb-10 p-5 items-center border">
          <img class="w-24" :src="cour.image" alt="img cours" />
          <h4>{{ cour.title }}</h4>
        </div>
      </a>
      <a href="">
        <div class="flex flex-col justify-center mb-10 p-5 items-center ">
          <div class=" flex justify-center items-center bg-slate-100 size-10 rounded-full">
            <PlusIcon class="size-6"/>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped></style>
