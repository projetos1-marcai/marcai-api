const Service = require('@models/Service');

async function listServices(req, res) {

    const services = await Service.find();

    return res.status(200).send({"services": services});
}

module.exports = listServices;
