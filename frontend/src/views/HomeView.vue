<script setup lang="ts">
import { useNotesStore } from '@/stores/notes';
import TheWelcome from '../components/TheWelcome.vue';

const store = useNotesStore();

store.retrieveNotes();
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
