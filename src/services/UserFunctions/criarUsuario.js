const User = require('@models/usuario/User');
const bcrypt = require('bcrypt');

async function criarUsuario(req, res) {
    const { nome,email,telefone,senha,foto_url,bio,servicos } = req.body;

        const emailAlreadyExists = await User.findOne({ "email": email });

        if (emailAlreadyExists) {
            return res.status(400).send({ message: "Email já cadastrado" });
        }

        try {
            const encryptedPassword = await bcrypt.hash(senha, parseInt(process.env.SALT_ROUNDS)); //encriptografia
            const user = await User.create({
                nome,email,telefone,foto_url,bio,servicos,
                "senha": encryptedPassword,
            });
            return res.status(201).send({ "user": user});
        } catch (error) {
            return res.status(422).send(error.message);
        }
}

module.exports = criarUsuario;
