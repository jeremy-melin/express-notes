import { defineStore } from 'pinia';
import { mande } from 'mande';

export const BASE_URL = 'http://localhost:3000';

const api = mande(BASE_URL + '/notes', {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }});

export const useNotesStore = defineStore('notes', {
    state: () => ({ notes: [] }),
    getters: {
      getNotes: (state) => state.notes,
    },
    actions: {
      async retrieveNotes() {
        try {
            const notes = await api.get();
            this.notes = notes;
        } catch(e) {
            console.error("GET error");
        }
      },
    },
})