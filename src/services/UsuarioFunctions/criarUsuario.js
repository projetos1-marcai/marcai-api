const Usuario = require('@models/usuario/Usuario');
const bcrypt = require('bcrypt');

async function criarUsuario(req, res) {
    const { nome,email,telefone,senha,foto_url,bio,servicos,fornecedor } = req.body;

        const emailAlreadyExists = await Usuario.findOne({ "email": email });

        if (emailAlreadyExists) {
            return res.status(400).send({ message: "Email já cadastrado" });
        }

        try {
            const encryptedPassword = await bcrypt.hash(senha, parseInt(process.env.SALT_ROUNDS)); //encriptografia
            const user = await Usuario.create({
                nome,email,telefone,foto_url,bio,servicos,
                "senha": encryptedPassword,fornecedor
            });
            return res.status(201).send({ "user": user});
        } catch (error) {
            return res.status(422).send(error.message);
        }
}

module.exports = criarUsuario;
