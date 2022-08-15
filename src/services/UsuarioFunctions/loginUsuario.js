const HTTP_CODE_OK = 200;
const HTTP_CODE_CREATED = 201;
const HTTP_CODE_BAD_REQUEST = 400;
const HTTP_CODE_UNAUTHORIZED = 401;
const HTTP_CODE_NOT_FOUND = 404;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Usuario = require('@models/usuario/Usuario');

async function loginUsuario(req, res) {
    const { email, senha } = req.body;

    if (email === undefined ||
        senha === undefined) return res.status(HTTP_CODE_BAD_REQUEST).json({ message: 'Preencha todos os campos.' });

    let usuario = await Usuario.findOne({ email });

    if (!usuario) {
        return res.status(HTTP_CODE_UNAUTHORIZED).json({ message: 'E-mail não cadastrado' });
    } else {

        const match = await bcrypt.compare(senha, usuario.senha);

        if (match) {
            let id_usuario = usuario._id;
            const token = jwt.sign({ id_usuario }, process.env.JWT_SECRET, {
                expiresIn: 60 * 60 * 24 // expires in 24 hours
            });

            // let new_token_list = usuario.token_list;
            // new_token_list.push(token);
            // usuario = await Usuario.findByIdAndUpdate(usuario._id, {
            //     token_list: new_token_list
            // });

            let userDTO = {
                id_usuario: usuario._id,
                nome: usuario.nome,
                email: usuario.email,
                telefone: usuario.telefone,
                foto_url: usuario.foto_url,
                bio: usuario.bio,
                servicos: usuario.servicos,
                fornecedor: usuario.fornecedor,
                admin: usuario.admin,
            }

            let response = {
                auth: true,
                token: `Bearer ` + token,
                // admin: usuario.admin,

                // name: usuario.name,
                // urlUser: usuario.urlUser
                usuario: userDTO
            }

            return res.status(HTTP_CODE_OK).json(response);
        } else {
            return res.status(HTTP_CODE_UNAUTHORIZED).json({ message: 'Senha inválida'});
        }
    }
}

module.exports = loginUsuario;