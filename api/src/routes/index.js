import {usuariosRouter} from './usuarioRoutes.js'
import express from "express"


function routesInjector(app) {
    app.use(
        express.json(),
        usuariosRouter
    )
}

export { routesInjector }