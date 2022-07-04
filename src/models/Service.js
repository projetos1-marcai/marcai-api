const { Schema, model } = require('mongoose');
const Endereco = require('@models/ServiceAddress').AddressSchema;

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
        numero: {
            type: Number,
            required: false
        },
        rua: {
            type: String,
            required: false
        },
        bairro: {
            type: String,
            required: false
        },
        cidade_id: {
            type: Number,
            required: false
        },
        required: false,
        default: {}
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
