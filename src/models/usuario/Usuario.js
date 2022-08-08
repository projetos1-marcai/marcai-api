const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: [/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/, 'Formato de email inválido'],
        lowercase: true,
        unique: true
    },
    telefone: {
        type: String,
        required: true,
        match: [/\(([0-9]{2}|0{1}((x|[0-9]){2}[0-9]{2}))\)\s*[0-9]{3,5}[- ]*[0-9]{4}/, 'Formato de telefone inválido'], // (xx) xxxxx xxxx
        lowercase: true,
        unique: true
    },
    senha: {
        type: String,
        required: true,
    },
    foto_url: {
        type: String,
        required: false,
    },
    bio: {
        type: String,
        required: false,
    },
    servicos: {
        type: [String],
        required: false,
    },
    fornecedor: {
        type: Boolean,
        required: false,
        default: false
    }
},
    {
        timestamps: true,
    });

module.exports = model('Usuario', UsuarioSchema);
