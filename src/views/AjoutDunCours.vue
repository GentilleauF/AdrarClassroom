<script setup>
import AjoutCoursUpload from "../components/AjoutCoursUpload.vue";
import AjoutCoursFormulaire from "../components/AjoutCoursFormulaire.vue";
import HeaderAdmin from "../components/HeaderAdmin.vue";
import FooterAdmin from "../components/FooterAdmin.vue";
</script>

<template>
  <HeaderAdmin/>
  <AjoutCoursFormulaire />
  <div class="flex w-[80vw] h-0.5 bg-gray-600"></div>
  <AjoutCoursUpload />
  <FooterAdmin/>
</template>
