<template>
  <div>
    <q-input
      v-model="text"
      label="INT"
      maxlength="2"
      outlined
      counter
      class="clear-arrows"
      hide-bottom-space
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const text = ref('0')
console.log(text)
</script>

<style scoped>
</style>
