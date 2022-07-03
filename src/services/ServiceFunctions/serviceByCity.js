const Service = require('@models/Service');

async function serviceByCity(req, res) {
    try {
        console.log(req.params.cidade);
        const services = await Service.find({"endereco.cidade_id": req.params.cidade});
        return res.status(200).send({"services": services});

    } catch (error) {
        return res.status(422).send(error.message);
    }
}

module.exports = serviceByCity;
