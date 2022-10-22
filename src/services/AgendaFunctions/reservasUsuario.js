const Reserva = require('@models/agenda/Reserva').Reserva;

async function reservaPorID(req, res) {
    try {
        let id_usuario = req.user._id.toString()
        let reservas = await Reserva.find({usuario: id_usuario});
        
        return res.status(200).send({"reservas": reservas});
    } catch (error) {
        console.log(error);
        return res.status(422).send({"error":error});
    }
}

module.exports = reservaPorID;
