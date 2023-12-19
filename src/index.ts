import express, { Express, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import routes from "../routes/index";

const app: Express = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.urlencoded({extended: true}));


app.get("/error", (req: Request, resp: Response) => {
    throw new Error("oups");
});

app.use(routes);

app.use((req: Request, resp: Response) => {
    resp.status(404).send("Route not found");
});

app.use((err: Error, req: Request, resp: Response, next: NextFunction) => {
    console.error(err.stack);
    resp.status(500).send(err.message);
});


app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
