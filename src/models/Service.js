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
    cnpj: {
        type: String,
        required: false,
    },
    fornecedor: {
        type: String,
        required: true,
    },
    logo_url: {
        type: String,
        required: false,
    },
    disponivel: {
        type: Boolean,
        default: true
    },
    presencial: {
        type: Boolean,
        required: true,
    },
    valor: {
        type: Number,
        required: true,
    },
    avaliacoes: {
        type: [String]
    },
    endereco: {
        type: String,
        required: false
    },
    formas_pagamento: {
        type: [Number],
        required: true
    },
    categoria: {
        type: Number,
        required: true
    },
    agenda: {
        type: String,
        required: true
    }
}, 
    {
        timestamps: true,
    }
);

module.exports = model('Service', ServiceSchema);
