const { Schema, model } = require('mongoose');

const HorarySchema = new Schema({ 
    agenda: {
        type: String,
        required: true,
    },
    inicio: {
        type: Date,
        required:true
    },
    fim: {
        type: Date,
        required:true
    },
    disponivel: {
        type: Boolean,
        required:true
    },
    reserva: {
        type: String,
        required:true
    },
},
    {
        timestamps: true,
    }
);

module.exports = model('Horary', HorarySchema);
