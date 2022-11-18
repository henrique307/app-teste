import { Usuarios } from "../models/usuario.js"

class UsuarioController {

    static get_all_usuarios(req, res) {
        Usuarios.find((err, result) => {
                res.status(200).send(result)
        })
    }

    static get_usuario(req, res) {
        Usuarios.findById(req.params.id, (err, result) => {
            if(err) {
                res.status(400).send("ERRO: usuario não pôde ser encontrado")
            } else {
                res.status(200).send(result)
            }
        })
    }

    static post_usuario(req, res) {
        let novoUsuario = new Usuarios(req.body)

        novoUsuario.save((err) => {
            if (err) {
                res.status(500).send("ERRO: usuario não pode ser criado")
            } else {
                res.status(200).send(`usuario criado com sucesso`)
            }
        })
    }
    
}

export { UsuarioController }