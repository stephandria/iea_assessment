import { defineStore } from 'pinia';
import { ref } from 'vue';
import { fetchCountries } from '../api/countryApi';

export const useCountryStore = defineStore(
  'countries',
  () => {
    const countries = ref<string[]>([]);

    const getCountries = async () => {
      countries.value = await fetchCountries();
    };

    return {
      countries,
      getCountries,
    };
  },
);
