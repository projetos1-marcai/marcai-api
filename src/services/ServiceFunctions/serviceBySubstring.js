const Service = require('@models/Service');

async function serviceBySubstring(req, res) {
    try {
        const services = await Service.find({titulo:  { "$regex": req.params.search, "$options": "i" }});
        return res.status(200).send({"services": services});

    } catch (error) {
        return res.status(422).send(error.message);
    }
}

module.exports = serviceBySubstring;
