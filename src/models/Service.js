const { Schema, model } = require('mongoose');

const ServiceSchema = new Schema({ 
    titulo: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    prestador: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
        match: [
            /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/,
            'Formato de email inválido'
        ],
        lowercase: true,
    },
    telefone: {
        type: String,
        required: false,
    },}, 
    {
        timestamps: true,
    }
);

module.exports = model('Service', ServiceSchema);
