const Service = require('@models/Service');

async function serviceByCategory(req, res) {
    try {
        const services = await Service.find({categoria: req.params.categoria});
        return res.status(200).send({"services": services});

    } catch (error) {
        return res.status(422).send(error.message);
    }
}

module.exports = serviceByCategory;
