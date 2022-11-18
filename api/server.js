import express from 'express';
import app from "./src/app.js";
import { routesInjector } from './src/routes/index.js';

const port = process.env.PORT || 3000

routesInjector(app)

app.listen(port, console.log(`aplicação rodando em http://localhost:${port}`))