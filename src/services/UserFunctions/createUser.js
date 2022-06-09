const User = require('@models/User');
const bcrypt = require('bcrypt');

async function createUser(req, res) {
    const { name, password, email } = req.body;

        const emailAlreadyExists = await User.findOne({ "email": email });

        if (emailAlreadyExists) {
            return res.status(400).send({ message: "Email já cadastrado" });
        }

        try {
            const encryptedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS)); //encriptografia
            const user = await User.create({
                name,
                "password": encryptedPassword,
                email,
            });
            

            return res.status(201).send({ "user": user});
        } catch (error) {
            return res.status(422).send(error.message);
        }
}

module.exports = createUser;