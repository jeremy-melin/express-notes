import { defineStore } from 'pinia';
import { mande } from 'mande';
import type { Note } from '@/interfaces/note';

export const BASE_URL = 'http://localhost:3000';

const api = mande(BASE_URL + '/notes');

export const useNotesStore = defineStore('notes', {
    state: () => ({ notes: [] as Array<Note> | unknown}),
    getters: {
      getNotes: (state) => state.notes,
    },
    actions: {
      async retrieve() {
        try {
            const notes = await api.get();
            this.notes = notes;
        } catch(e) {
            console.error("GET error");
        }
      },
      async update(id: string) {
        try {
            await api.patch({ id });
        } catch(e) {
            console.error("GET error");
        }
      },
      async add(note: any) {
        try {
            await api.post(note);
        } catch(e) {
            console.error("GET error");
        }
      },
      async delete(id: string) {
        try {
            await api.delete(id);
        } catch(e) {
            console.error("GET error");
        }
      },
    },
})