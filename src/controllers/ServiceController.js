const Service = require('@models/Service');
const bcrypt = require('bcrypt');

const createService = require('../services/ServiceFunctions/createService');
const listServices = require('../services/ServiceFunctions/listServices');

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
    }
}
