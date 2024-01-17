<template>
  <main>
    <NoteList @get-notes="getNotes" @patch-note="patchNote" @new-note="showForm = true" @deleteNote="deleteNote" :notes="store.notes?.notes"></NoteList>
    <NoteForm v-if="showForm" @update:submit="newNote" v-model:title="model.title" v-model:body="model.body"></NoteForm>
  </main>
</template>

<script lang="ts">
import { useNotesStore } from '@/stores/notes';
import NoteList from '@/components/NoteList.vue';
import NoteForm from '@/components/NoteForm.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {NoteList, NoteForm},
  setup() {
    const store = useNotesStore();
    return { store }
  },
  data() {
    return { showForm: false, model: {title: '', body: ''}}
  },
  methods: {
    getNotes() {
      this.store.retrieve();
    },
    patchNote(params: any) {
      this.store.update(params);
    },
    newNote(note: {title: string, content: string}) {
      this.store.add(note);
    },
    deleteNote(id: string) {
      this.store.delete(id);
    }
  }
});
</script>


