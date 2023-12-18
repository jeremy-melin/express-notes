import express from "express";
import morgan from "morgan";
import routes from "./routes/index.js";

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.urlencoded({extended: true}));


app.get("/error", (req, reps) => {
    throw new Error("oups");
});

app.use(routes);


app.use((req, resp) => {
    resp.status(404).send("Route not found");
});

app.use((err, req, resp, next) => {
    console.error(err.stack);
    resp.status(500).send(err.message);
});


app.listen(port, (req, resp) => {
    console.log(`app listening on port ${port}`);
});
