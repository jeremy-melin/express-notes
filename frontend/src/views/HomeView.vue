<script setup lang="ts">
import { useNotesStore } from '@/stores/notes';
import TheWelcome from '../components/TheWelcome.vue';

const store = useNotesStore();

function getNotes() {
  store.retrieveNotes();
}

</script>

<template>
  <main>
    <TheWelcome />
    <button @click="getNotes">GET NOTES</button>
  </main>
</template>
