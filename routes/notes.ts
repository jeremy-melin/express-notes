import { Request, Response } from "express";
import * as Note from "../model/notes";
import { collections } from "../server/services/database.service";

export async function list(req: Request, resp: Response) {
    let { sort } = req.query;

    sort = sort && typeof sort === 'string' ? sort.toUpperCase() : "DESC";

    if (sort !== "ASC" && sort !== "DESC") {
        return resp.status(400).send("invalid sort format");
    }

    const order = sort === "DESC" ? -1 : 1; 

    const notes = (await collections?.notes?.find({})
                    .sort({ updatedAt: order })
                    .limit(50)
                    .toArray()
                ) as any[];
    resp.status(200).json({notes});
}

export async function create(req: Request, resp: Response) {
    const { title, body } = req.body;
    if (!title || !body) {
        return resp.status(400).send("invalid post format");
    }

    const note = await Note.createNote(title, body);
    await collections?.notes?.insertOne(note);

    resp.send("OK")
}

export async function read(req: Request, resp: Response) {
    const { id } = req.params;
    const note = await collections?.notes?.find({id});
    resp.json({ note });
}

export async function update(req: Request, resp: Response) {
    const { id } = req.params;
    const { title, body } = req.body;
    if (!title && !body) {
        return resp.status(400).send("invalid post format");
    }

    await collections.notes?.updateOne({ id: id}, {title, body});
    resp.send("OK")
}

export async function deleteNote(req: Request, resp: Response) {
    const { id } = req.params;
    await collections.notes?.deleteOne({ id: id});

    resp.send("OK")
}