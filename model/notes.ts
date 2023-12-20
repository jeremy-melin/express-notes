import { v4 as uuid } from "uuid";
import { Note } from "../interfaces/note";

const NOTES = new Map();

export function list(sort = 'DESC') {
    const notes = Array.from(NOTES.values());
    notes.sort((a, b ) => {
        if (sort === "ASC") {
            return a.lastEdited - b.lastEdited;
        }
        return b.lastEdited - a.lastEdited;
    });

    return { ...notes };
}

export async function createNote(title: string, body: string) {
    const id = uuid();
    const lastEdited = Date.now();
    const note: Note = {
        id,
        title,
        body,
        lastEdited
    }

    NOTES.set(id, note);
    return { ...note }; 
}

export async function updateNote(id: string, title: string, body: string) {
    if (!NOTES.has(id)) return null;
    const note = NOTES.get(id);
    note.title = title ?? note.title;
    note.body = body ?? note.body;
    note.lastEdited = Date.now();

    return { ...note };
}

export function getNote(id: string) {
    if (!NOTES.has(id)) return null;
    const note = NOTES.get(id);
    return { ...note };
}

export async function deleteNote(id: string) {
    const success = NOTES.delete(id);
    return success;
}