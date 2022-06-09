const User = require('@models/User');
const bcrypt = require('bcrypt');

const createUser = require('../services/UserFunctions/createUser')

module.exports = {
    async createUser(req, res) {
        return createUser(req, res);
    },

    async getUsers(req, res) {
        return
    }
}