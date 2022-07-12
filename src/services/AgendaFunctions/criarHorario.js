const Horario = require('@models/agenda/Horario');

async function criarHorario(req, res) {
    const { 
        agenda,
        inicio,
        fim,
        disponivel,
        reserva
    } = req.body;

    const horario = await Horario.create({ 
        agenda,
        inicio,
        fim,
        disponivel,
        reserva
    });

    return res.status(201).send({"horario": horario});
}

module.exports = criarHorario;


