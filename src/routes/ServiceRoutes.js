const router = require('express').Router();
const ServiceController = require('@controllers/ServiceController');

router.get('/services', ServiceController.listServices);

router.post('/service', ServiceController.createService);

router.get('/service-payment-methods', ServiceController.listPaymentMethods);
router.get('/service-categories', ServiceController.listCategories);

router.post('/horario', ServiceController.createHorario)

router.get('/service/categoria/:categoria', ServiceController.serviceByCategory)
router.get('/service/search/:search', ServiceController.serviceBySubstring)
router.get('/service/id/:id', ServiceController.serviceByID)

module.exports = router;
