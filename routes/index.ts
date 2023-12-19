import express from "express";
import * as notes from "./notes";

const router = express.Router();

router.get('/', (req, res) => {
    res.send("hello from routes");
});

router.get('/notes', notes.list);
router.get('/notes/all', notes.listAll); // via mongo

router.post('/notes', notes.create);
router.post('/notes/create', notes.createOne); // via mongo

router.get('/notes/:id', notes.read);
router.post('/notes/:id', notes.update);
router.delete('/notes/:id', notes.deleteNote);

export default router;