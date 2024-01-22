<script setup>
import ProfilMesDerniersCours from "./components/ProfilMesDerniersCours.vue";
import ProfilInfoStagiaire from "./components/ProfilInfoStagiaire.vue";
import SearchBar from "./components/SearchBar.vue";
import ProfilChartJs from "./components/ProfilChartJs.vue";
import Footer from "./components/Footer.vue"
</script>

<template>
    <SearchBar/>
    <ProfilInfoStagiaire/>
  <section class="flex flex-col md:flex-row justify-around mt-10">
    <ProfilMesDerniersCours />
    <ProfilChartJs/>
  </section>
  <button class="bg-adrarGreen px-3 py-1 rounded mb-10">Mes cours favoris</button>
  <Footer/>