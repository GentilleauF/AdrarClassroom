<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../lib/supabaseClient";

const cours = ref([]);

async function getCours() {
  const { data } = await supabase.from("cours").select();
  cours.value = data;
}

onMounted(() => {
  getCours();
});
</script>

<template>
  <div class="">
    <h3 class="text-3xl font-bold text-green-adrar mb-6">Mes derniers cours</h3>
    <div class="flex flex-col justify-start items-center md:flex-row md:space-x-10">
      <a href="/cours-detail" v-for="cour in cours" :key="cour.id">
        <div class="flex flex-col justify-center size-36 mb-10 p-5 items-center border">
          <img class="w-24" :src="cour.image" alt="img cours" />
          <h4 class="text-center">{{ cour.title }}</h4>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped></style>
