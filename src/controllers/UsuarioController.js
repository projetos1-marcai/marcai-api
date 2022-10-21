const criarUsuario = require('../services/UsuarioFunctions/criarUsuario');
const usuarioPorID = require('../services/UsuarioFunctions/usuarioPorID');
const listarUsuarios = require('../services/UsuarioFunctions/listarUsuarios');
const listarFornecedores = require('../services/UsuarioFunctions/listarFornecedores');
const loginUsuario = require('../services/UsuarioFunctions/loginUsuario')
const setAdmin = require('../services/UsuarioFunctions/setAdmin');
const removerUsuario = require('../services/UsuarioFunctions/removerUsuario');

module.exports = {
    async criarUsuario(req, res) {
        return criarUsuario(req, res);
    },

    async listarUsuarios(req, res) {
        return listarUsuarios(req, res);
    },

    async listarFornecedores(req, res) {
        return listarFornecedores(req, res);
    },

    async usuarioPorID(req, res) {
        return usuarioPorID(req, res);
    },

    async removerUsuario(req, res) {
        return removerUsuario(req, res);
    },

    async updateUser(req, res) {
        return
    },

    async login(req, res) {
        return loginUsuario(req, res);
    },

    async setAdmin(req, res) {
        return setAdmin(req, res);
    }
}
