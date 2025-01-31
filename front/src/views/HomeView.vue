<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue';
import * as countries from '../data/countries.json';

console.log(countries, 'toto');
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
