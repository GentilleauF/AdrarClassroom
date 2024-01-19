<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>

<template>
	  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <ul>
	<li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
</template>