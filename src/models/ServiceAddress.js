const { Schema, model } = require('mongoose');

const AddressSchema = new Schema({ 
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
    "Address" : model('Address', AddressSchema),
    AddressSchema
}
