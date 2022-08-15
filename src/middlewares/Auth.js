const jwt = require('jsonwebtoken');
const Usuario = require('@models/usuario/Usuario');
require('dotenv/config');

module.exports = {
    authorizeUser(req, res, next) {
        authorize(req, res, next, "user");
    }
}

authorize = (req, res, next, type) => {
    const authHeader = req.headers.authorization;

    if (!authHeader)
        return res.status(401).send({ error: 'Sem token irmão' });

    const parts = authHeader.split(' ');

    if (!parts.length === 2)
        return res.status(401).send({ error: 'Erro de token' });

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: 'Token mal formatado' });

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err)
            return res.status(401).send({ error: 'Token inválido' });

        const user = await Usuario.findOne({ _id: decoded.id_usuario });

        if (!user)
            return res.status(404).send({ error: 'Usuário não existe!' });

        // const token_list = user.token_list;
        // if (!token_list.includes(token)) {
        //     return res.status(401).send({ error: 'Token inválido' });
        // }

        req.id = decoded.id_usuario;
        req.user = user;
        return next();
    })
}
