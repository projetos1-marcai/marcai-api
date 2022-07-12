const { Schema, model } = require('mongoose');

const AvaliacaoSchema = new Schema({ 
    servico: {
        type: String,
        required: true,
    },
    avaliador: {
        type: String,
        required: true,
    },
    nota: {
        type: Number,
        required: true,
    },

},
    {
        timestamps: true,
    }
);

module.exports = model('Avaliacao', AvaliacaoSchema);
