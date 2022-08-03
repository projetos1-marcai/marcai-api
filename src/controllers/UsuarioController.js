const criarUsuario = require('../services/UsuarioFunctions/criarUsuario');
const usuarioPorID = require('../services/UsuarioFunctions/usuarioPorID');
const listarUsuarios = require('../services/UsuarioFunctions/listarUsuarios');

module.exports = {
    async criarUsuario(req, res) {
        return criarUsuario(req, res);
    },

    async listarUsuarios(req, res) {
        return listarUsuarios(req, res);
    },

    async usuarioPorID(req, res) {
        return usuarioPorID(req, res);
    },

    async deleteUser(req, res) {
        return
    },

    async updateUser(req, res) {
        return
    }
}
