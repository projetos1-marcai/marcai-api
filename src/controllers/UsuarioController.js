const criarUsuario = require('../services/UsuarioFunctions/criarUsuario')

module.exports = {
    async criarUsuario(req, res) {
        return criarUsuario(req, res);
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
