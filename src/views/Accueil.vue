<script setup>
import ProfilMesDerniersCours from "../components/ProfilMesDerniersCours.vue";
import ProfilInfoStagiaire from "../components/ProfilInfoStagiaire.vue";
import SearchBar from "../components/SearchBar.vue";
import ProfilChartJs from "../components/ProfilChartJs.vue";
import Footer from "../components/Footer.vue";
import ProfilMesCoursFavoris from "../components/ProfilMesCoursFavoris.vue";
</script>

<template>
  <SearchBar />
  <ProfilInfoStagiaire />
  <section class="flex flex-col md:flex-row justify-around mt-10">
    <div>
      <ProfilMesDerniersCours />
      <ProfilMesCoursFavoris />
    </div>

    <ProfilChartJs />
  </section>
  <Footer/>
</template>

<style scoped></style>
