<script setup lang="ts">
  import { computed, ref } from 'vue';
  import BaseAutoComplete from '../components/BaseAutoComplete.vue';
  import { useCountryStore } from '../stores/countries';

  const { countries } = useCountryStore();

  const chosenCountry = ref('');

  const chosenCountryText = computed(() => {
    if (!chosenCountry.value) {
      return '';
    }

    return `You have chosen ${chosenCountry.value}`;
  });
</script>

<template>
  <main>
    <BaseAutoComplete
      v-model="chosenCountry"
      :items="countries"
      :text="chosenCountryText"
    />
  </main>
</template>
