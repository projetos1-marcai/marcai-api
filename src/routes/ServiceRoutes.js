const router = require('express').Router();
const ServiceController = require('@controllers/ServiceController');

router.get('/services', ServiceController.listServices);
router.post('/service', ServiceController.createService);

module.exports = router;
