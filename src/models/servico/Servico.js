const { Schema, model } = require('mongoose');
const Endereco = require('@models/servico/Endereco').EnderecoSchema;

const ServicoSchema = new Schema({ 
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
        default: null
    },
    fornecedor: {
        type: String,
        required: true,
    },
    logo_url: {
        type: String,
        required: false,
        default: "https://img2.gratispng.com/20180523/zxg/kisspng-computer-icons-customer-service-icon-design-it-ser-ub4we-engineering-services-5b04fd02de8b46.2830610615270535709116.jpg"
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
        type: [String],
        default: []
    },
    endereco: {
        type: Endereco,
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
        required: false,
        default: ''
    },
    aprovacao: {
        type: Number,
        default: 1
    }
}, 
    {
        timestamps: true,
    }
);

module.exports = model('Servico', ServicoSchema);
