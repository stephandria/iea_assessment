<template>
  <v-row>
    <v-col
      class="d-flex justify-center text-h6"
      cols="12"
    >
      {{ text }}
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
      <v-autocomplete
        :model-value="modelValue"
        @update:model-value="
          (value) =>
            emit('update:modelValue', value)
        "
        :items="items"
        label="Choose a country"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  const { text, items } = defineProps<{
    modelValue: string | null;
    text?: string;
    items: string[];
  }>();

  const emit = defineEmits<{
    'update:modelValue': [value: string | null];
  }>();
</script>
