const { Schema, model } = require('mongoose');

const EnderecoSchema = new Schema({ 
    numero: {
        type: String,
        required: false,
        default: null
    },
    rua: {
        type: String,
        required: false,
        default: null
    },
    bairro: {
        type: String,
        required: false,
        default: null
    },
    cidade_id: {
        type: String,
        required: false,
        default: null
    }
},
    {
        timestamps: true,
    }
);

module.exports = {
    "Endereco" : model('Endereco', EnderecoSchema),
    EnderecoSchema
}
