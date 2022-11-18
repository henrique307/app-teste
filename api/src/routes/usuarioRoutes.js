import { UsuarioController } from "../controllers/usuariosController.js";
import express from 'express';

const usuariosRouter = express.Router()

usuariosRouter
    .get('/usuarios', UsuarioController.get_all_usuarios)
    .get('/usuarios/:id', UsuarioController.get_usuario)
    .post('/usuarios', UsuarioController.post_usuario)

export { usuariosRouter }