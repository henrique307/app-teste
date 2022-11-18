import express from "express";
import { db } from "./config/mongoose-connection.js";
import { routesInjector } from "./routes/index.js";

db
    .on("error", console.log.bind(console,"deu erro na conexão"))
    .once("open",() => {console.log("conexão com o banco de dados feita com sucesso")});

const app = express();

// routesInjector(app);

export default app