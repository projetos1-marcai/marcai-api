const User = require('@models/User');
const bcrypt = require('bcrypt');

const createUser = require('../services/UserFunctions/createUser')

module.exports = {
    async createUser(req, res) {
        return createUser(req, res);
    },

    async listUsers(req, res) {
        return
    },

    async viewUser(req, res) {
        return
    },

    async deleteUser(req, res) {
        return
    },

    async updateUser(req, res) {
        return
    }
}
