const { Schema, model } = require('mongoose');

const HorarySchema = new Schema({ 
    agenda: {
        type: String,
        required: true,
    },
    inicio: {
        type: Date,
        required: true
    },
    fim: {
        type: Date,
        required: true
    },
    disponivel: {
        type: Boolean,
        required: false,
        default: true
    },
    reserva: {
        type: String,
        required: false,
        default: null
    },
},
    {
        timestamps: true,
    }
);

module.exports = model('Horary', HorarySchema);
