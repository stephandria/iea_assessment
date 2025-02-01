import { defineStore } from 'pinia';
import countriesData from './data/countries.json';

export const useCountryStore = defineStore(
  'countries',
  () => {
    const countries = Object.values(
      countriesData,
    );

    return {
      countries,
    };
  },
);
