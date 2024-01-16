<template>
    <div>
        <v-btn @click="$emit('getNotes')" class="my-4">Get notes</v-btn>

        <v-list lines="one" v-show="notes">
            <v-list-item
                v-for="note in notes"
                :key="note.id"
                :title="note.title"
                :subtitle="note.body"
                @click="currentNote = note"
            ></v-list-item>
        </v-list>

        <NoteForm 
            v-if="currentNote.title"
            @update:submit="patchNote"
            v-model:title="currentNote.title" 
            v-model:body="currentNote.body" 
            class="my-4">
        </NoteForm>
    </div>
</template>

<script lang="ts">
import type { Note } from '@/interfaces/note';
import type { PropType } from 'vue';
import { defineComponent } from 'vue';
import NoteForm from '@/components/NoteForm.vue';

export default defineComponent({
    components: { NoteForm },
    emits: ['patchNote', 'getNotes'],
    props: {
        notes: [] as PropType<Array<Note>>
    },
    data() {
        return { currentNote: {id: '', title: '', body: '', lastEdited: 0} };
    },
    methods: {
        patchNote() {
            this.$emit('patchNote', {id: this.currentNote.id, title: this.currentNote.title, body: this.currentNote.body});
        }
    }
})
</script>
