const { Schema, model } = require('mongoose');

const AddressSchema = new Schema({ 
    servico: {
        type: String,
        required: true,
    },
    numero: {
        type: String,
        required: false,
    },
    rua: {
        type: String,
        required: false,
    },
    bairro: {
        type: String,
        required: false,
    },
    cidade: {
        type: String,
        required: false,
    },
    estado: {
        type: String,
        required: false,
    },
},
    {
        timestamps: true,
    }
);

module.exports = model('Address', AddressSchema);
