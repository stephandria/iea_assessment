<template>
  <main>
    <BaseAutoComplete
      v-model="chosenCountry"
      :items="countries"
      :text="chosenCountryText"
    />
  </main>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { computed, onMounted, ref } from 'vue';
  import BaseAutoComplete from '../components/BaseAutoComplete.vue';
  import { useCountryStore } from '../stores/countries';

  const contryStore = useCountryStore();

  const { getCountries } = contryStore;

  const { countries } = storeToRefs(contryStore);

  const chosenCountry = ref('');
  onMounted(async () => {
    await getCountries();
  });

  const chosenCountryText = computed(() => {
    if (!chosenCountry.value) {
      return '';
    }

    return `You have chosen ${chosenCountry.value}`;
  });
</script>
