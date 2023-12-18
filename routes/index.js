import express from "express";
import * as notes from "./notes.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.send("hello from routes");
});

// basic CRUD
router.get('/notes', notes.list);
router.post('/notes', notes.create);
router.get('/notes/:id', notes.read);
router.post('/notes/:id', notes.update);
router.delete('/notes/:id', notes.deleteNote);


export default router;
