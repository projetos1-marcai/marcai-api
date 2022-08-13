const criarServico = require('../services/ServicoFunctions/criarServico');
const deletarServico = require('../services/ServicoFunctions/deletarServico');
const atualizarServico = require('../services/ServicoFunctions/atualizarServico');
const listarServicos = require('../services/ServicoFunctions/listarServicos');

const listarCategorias = require('../services/ServicoFunctions/listarCategorias');

const listarMeiosDePagamentos = require('../services/ServicoFunctions/listarMeiosDePagamentos');

const servicosPorCategoria = require('../services/ServicoFunctions/servicosPorCategoria');
const servicoPorID = require('../services/ServicoFunctions/servicoPorID');
const servicosPorSubstring = require('../services/ServicoFunctions/servicosPorSubstring');
const servicosPorCidade = require('../services/ServicoFunctions/servicosPorCidade');

const servicosPorAprovacao = require('../services/ServicoFunctions/servicosPorAprovacao');
const listarStatusServicos = require('../services/ServicoFunctions/listarStatusServicos');
const avaliaCadastroServico = require('../services/ServicoFunctions/avaliaCadastroServico');

module.exports = {
    async criarServico(req, res) {
        return criarServico(req, res);
    },

    async listarServicos(req, res) {
        return listarServicos(req, res);
    },

    async deletarServico(req, res) {
        return deletarServico(req, res);
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
    },

    async servicosPorAprovacao(req, res) {
        return servicosPorAprovacao(req, res);
    },

    async listarStatusServicos(req, res) {
        return listarStatusServicos(req, res);
    },

    async avaliaCadastroServico(req, res) {
        return avaliaCadastroServico(req, res);
    }
}
