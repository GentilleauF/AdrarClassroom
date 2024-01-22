<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../../lib/supabaseClient";

const cours = ref([]);

async function getCours() {
  const { data } = await supabase.from("countries").select();
  cours.value = data;
}

onMounted(() => {
  getCours();
});
</script>

<template>
  <div class="">
    <h3 class="text-3xl font-bold text-green-adrar mb-6">Mes derniers cours</h3>
    <div class="flex flex-col justify-start md:flex-row md:space-x-10">
      <a href="/" v-for="cour in cours" :key="cour.id">
        <div class="flex flex-col justify-center mb-10 p-5 items-center border">
          <img class="w-24" src="../../assets/vue.png" alt="img cours" />
          <h4>{{ cour.name }}</h4>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped></style>
