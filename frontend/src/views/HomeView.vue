<template>
  <main>
    <NoteList @get-notes="getNotes" :notes="store.notes?.notes"></NoteList>
  </main>
</template>

<script setup lang="ts">
import { useNotesStore } from '@/stores/notes';
import NoteList from '@/components/NoteList.vue';

const store = useNotesStore();

function getNotes() {
  store.retrieve();
}

</script>


