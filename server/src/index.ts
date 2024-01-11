import express, { Express, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import { connectToDatabase } from "../services/database.service";
import routes from "../routes/index";

const app: Express = express();
const port = 3000;


app.use(morgan("dev"));
app.use(express.urlencoded({extended: true}));

connectToDatabase().then(() => {

    app.use(routes);

    app.get("/error", (req: Request, resp: Response) => {
        throw new Error("oups");
    });

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
}).catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
});






