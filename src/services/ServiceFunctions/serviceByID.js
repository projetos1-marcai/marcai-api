const Service = require('@models/Service');

async function serviceByID(req, res) {
    try {
        const service = await Service.find({_id: req.params.id});
        return res.status(200).send({"service": service});

    } catch (error) {
        return res.status(422).send(error.message);
    }

}

module.exports = serviceByID;
