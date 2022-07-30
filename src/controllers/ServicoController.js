const criarServico = require('../services/ServicoFunctions/criarServico');
const atualizarServico = require('../services/ServicoFunctions/atualizarServico');
const listarServicos = require('../services/ServicoFunctions/listarServicos');

const listarCategorias = require('../services/ServicoFunctions/listarCategorias');

const listarMeiosDePagamentos = require('../services/ServicoFunctions/listarMeiosDePagamentos');

const servicosPorCategoria = require('../services/ServicoFunctions/servicosPorCategoria');
const servicoPorID = require('../services/ServicoFunctions/servicoPorID');
const servicosPorSubstring = require('../services/ServicoFunctions/servicosPorSubstring');
const servicosPorCidade = require('../services/ServicoFunctions/servicosPorCidade');

module.exports = {
    async criarServico(req, res) {
        return criarServico(req, res);
    },

    async listarServicos(req, res) {
        return listarServicos(req, res);
    },

    async deleteService(req, res) {
        return
    },

    async atualizarServico(req, res) {
        return atualizarServico(req, res);
    },

    async servicoPorID(req, res) {
        return servicoPorID(req, res);
    },

    async servicosPorCidade(req, res) {
        return servicosPorCidade(req, res);
    },

    async servicosPorCategoria(req, res) {
        return servicosPorCategoria(req, res);
    },

    async servicosPorSubstring(req, res) {
        return servicosPorSubstring(req, res);
    },

    async listarCategorias(req, res) {
        return listarCategorias(req, res);
    },
    
    async listarMeiosDePagamentos(req, res) {
        return listarMeiosDePagamentos(req, res);
    }
}
