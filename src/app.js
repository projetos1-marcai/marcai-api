const express = require('express');
const UsuarioRoutes = require('@routes/UsuarioRoutes');
const ServicoRoutes = require('@routes/ServicoRoutes');
const AgendaRoutes = require('@routes/AgendaRoutes');
const app  = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/usuario', UsuarioRoutes);
app.use('/servico', ServicoRoutes);
app.use('/agenda', AgendaRoutes);

module.exports = app;
