import mongoose from 'mongoose'

const usuarioSchema = new mongoose.Schema(
    {
        id: {type:String},
        nome: {type:String, required:true},
        email: {type:String, required:true},
        senha: {type:String, required:true},
    }
)

const Usuarios = mongoose.model("usuarios", usuarioSchema)

export { Usuarios }