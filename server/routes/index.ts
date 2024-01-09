import express, { Request, Response } from "express";
import * as notes from "./notes";
import cors from "cors";

const router = express.Router();

router.use(cors());

router.get('/', (req: Request, res: Response) => {
    res.send("hello from routes");
});

router.get('/notes', notes.list);
router.post('/notes', notes.create);
router.get('/notes/:id', notes.read);
router.post('/notes/:id', notes.update);
router.delete('/notes/:id', notes.deleteNote);

export default router;