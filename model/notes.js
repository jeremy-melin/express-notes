import { v4 as uuid } from "uuid";
import MapStore from "../lib/mapStore.js";

const NOTES = new Map();
const store = new MapStore("notes.json");

// Note {
//    id: string
  //  title: string
   // body: string
    /// lastEdited: Date
// }

store.read().then(notes => {
    console.log("notes", notes);
    for (let [id, note] of notes) {
        NOTES.set(id, note);
    }
    console.log("NOTES", NOTES)
}).catch(err => {
    console.error(err);
})

export function list(sort) {
    const notes = Array.from(NOTES.values());
    notes.sort((a, b ) => {
        if (sort === "ASC") {
            return a.lastEdited - b.lastEdited;
        }
        return b.lastEdited - a.lastEdited;
    });

    return { ...notes };
}

export async function createNote({title, body}) {
    const id = uuid();
    const lastEdited = Date.now();
    const note = {
        id, 
        title,
        body,
        lastEdited
    }

    NOTES.set(id, note);
    await store.save(NOTES);
    return { ...note }; 
}

export async function updateNote(id, {title, body}) {
    if (!NOTES.has(id)) return null;
    const note = NOTES.get(id);
    note.title = title ?? note.title;
    note.body = body ?? note.body;
    note.lastEdited = Date.now();

    await store.save(NOTES);

    return { ...note };
}

export function getNote() {
    if (!NOTES.has(id)) return null;
    const note = NOTES.get(id);
    return { ...note };
}

export async function deleteNote(id) {
    const success = NOTES.delete(id);
    await store.save(NOTES);
    return success;
}