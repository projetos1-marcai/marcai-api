const Service = require('@models/Service');
const ServicePaymentMethodsENUM = require('@models/ServicePaymentMethodsENUM');
const ServiceCategoryENUM = require('@models/ServiceCategoryENUM');

const bcrypt = require('bcrypt');

const createService = require('../services/ServiceFunctions/createService');
const listServices = require('../services/ServiceFunctions/listServices');

const listCategories = require('../services/ServiceFunctions/listCategories');

const listPaymentMethods = require('../services/ServiceFunctions/listPaymentMethods');

const serviceByCategory = require('../services/ServiceFunctions/serviceByCategory');
const serviceByID = require('../services/ServiceFunctions/serviceByID');
const serviceBySubstring = require('../services/ServiceFunctions/serviceBySubstring');

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

    async updateService(req, res) {
        return
    },

    async serviceByID(req, res) {
        return serviceByID(req, res);
    },

    async serviceByCategory(req, res) {
        return serviceByCategory(req, res);
    },

    async serviceBySubstring(req, res) {
        return serviceBySubstring(req, res);
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
