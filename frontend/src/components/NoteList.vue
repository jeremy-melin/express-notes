<template>
    <div>
        <div class="my-4 d-flex justify-space-between">
            <div>
                <v-btn @click="$emit('getNotes')">Get notes</v-btn>
                <v-btn @click="$emit('newNote')" class="ml-4">New note</v-btn>
            </div>
            <v-btn @click="$emit('deleteNote', currentNote.id)" :disabled="!currentNote.id" class="ml-4">Delete note</v-btn>
        </div>

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
            v-model:title="model.title" 
            v-model:body="model.body" 
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
    emits: ['patchNote', 'getNotes', 'newNote', 'deleteNote'],
    props: {
        notes: [] as PropType<Array<Note>>
    },
    data() {
        return {
            currentNote: {id: '', title: '', body: '', lastEdited: 0},
            model: {title: '', body: ''}
        };
    },
    methods: {
        patchNote() {
            this.$emit('patchNote', {id: this.currentNote.id, title: this.currentNote.title, body: this.currentNote.body});
        }
    }
})
</script>
