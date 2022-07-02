const { Schema, model } = require('mongoose');

const RatingSchema = new Schema({ 
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

module.exports = model('Rating', RatingSchema);
