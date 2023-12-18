import * as Note from "../model/notes.js";

export function list(req, resp) {
    let { sort } = req.query;
    sort = sort ? sort.toUpperCase() : "DESC";

    if (sort !== "ASC" && sort !== "DESC") {
        return resp.status(400).send("invalid sort format");
    }

    const notes = Note.list();
    resp.json({ notes });
}

export async function create(req, resp) {
    const { title, body } = req.body;
    if (!title || !body) {
        return resp.status(400).send("invalid post format");
    }

    const note = await Note.createNote({title, body});
    console.log({note});

    resp.send("OK")
}

export function read(req, resp) {
    const { id } = req.params;
    const note = Note.getNote(id);
    resp.json({ note });
}

export async function update(req, resp) {
    const { id } = req.params;
    const { title, body } = req.body;
    if (!title && !body) {
        return resp.status(400).send("invalid post format");
    }
    console.log(`update ${id} with ${title} & ${body}`);
    const note = await Note.updateNote(id, {title, body});
    resp.send("OK")
}

export async function deleteNote(req, resp) {
    const { id } = req.params;
    console.log(`deleting ${id}`);

    const note = await Note.deleteNote(id);
    resp.send("OK")
}