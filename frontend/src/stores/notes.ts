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
      async update(params: any) {
        try {
            await api.post('/' + params.id, {title: params.title, body: params.body});
        } catch(e) {
            console.error("GET error");
        }
      },
      async add(note: {title: string, content: string}) {
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