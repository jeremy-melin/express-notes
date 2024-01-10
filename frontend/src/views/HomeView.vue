<script setup lang="ts">
import { useNotesStore } from '@/stores/notes';

const store = useNotesStore();

function getNotes() {
  store.retrieve();
}

</script>

<template>
  <main>
    <v-btn @click="getNotes" class="my-4">Get notes</v-btn>
    <v-list lines="one" v-show="store.notes.notes">
      <v-list-item
        v-for="n in store.notes.notes"
        :key="n"
        :title="n.title"
        :subtitle="n.body"
      ></v-list-item>
    </v-list>
  </main>
</template>
