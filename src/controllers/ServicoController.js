const Service = require('@models/servico/Servico');
const ServicePaymentMethodsENUM = require('@models/servico/MeioDePagamentoENUM');
const ServiceCategoryENUM = require('@models/servico/CategoriaENUM');

const bcrypt = require('bcrypt');

const criarServico = require('../services/ServiceFunctions/criarServico');
const atualizarServico = require('../services/ServiceFunctions/atualizarServico');
const listarServicos = require('../services/ServiceFunctions/listarServicos');

const listarCategorias = require('../services/ServiceFunctions/listarCategorias');

const listarMeiosDePagamentos = require('../services/ServiceFunctions/listarMeiosDePagamentos');

const servicosPorCategoria = require('../services/ServiceFunctions/servicosPorCategoria');
const servicoPorID = require('../services/ServiceFunctions/servicoPorID');
const servicosPorSubstring = require('../services/ServiceFunctions/servicosPorSubstring');
const servicosPorCidade = require('../services/ServiceFunctions/servicosPorCidade');

const AgendaController = require('@controllers/AgendaController');

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
    },

    async criarHorario(req, res) {
        return AgendaController.criarHorario(req, res);
    },

    async removerHorario(req, res) {
        return AgendaController.removerHorario(req, res);
    }

}
