<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'
import {RouterView} from 'vue-router'

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
	<RouterView/>
</template>