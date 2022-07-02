const router = require('express').Router();
const ServiceController = require('@controllers/ServiceController');

router.get('/services', ServiceController.listServices);
router.get('/service-payment-methods', ServiceController.listPaymentMethods);
router.get('/service-categories', ServiceController.listCategories);

router.post('/service', ServiceController.createService);

module.exports = router;
