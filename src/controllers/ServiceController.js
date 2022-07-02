const Service = require('@models/Service');
const ServicePaymentMethodsENUM = require('@models/ServicePaymentMethodsENUM');
const ServiceCategoryENUM = require('@models/ServiceCategoryENUM');

const bcrypt = require('bcrypt');

const createService = require('../services/ServiceFunctions/createService');
const listServices = require('../services/ServiceFunctions/listServices');

const listCategories = require('../services/ServiceFunctions/listCategories');
const listPaymentMethods = require('../services/ServiceFunctions/listPaymentMethods');

const AgendaController = require('@controllers/AgendaController');

module.exports = {
    async createService(req, res) {
        return createService(req, res);
    },

    async listServices(req, res) {
        return listServices(req, res);
    },

    async deleteService(req, res) {
        return
    },

    async viewService(req, res) {
        return
    },

    async updateService(req, res) {
        return
    },

    async listCategories(req, res) {
        return listCategories(req, res);
    },
    
    async listPaymentMethods(req, res) {
        return listPaymentMethods(req, res);
    },

    async createHorario(req, res) {
        return AgendaController.createHorario(req, res);
    }
}
