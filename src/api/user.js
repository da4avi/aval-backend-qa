const UserController = require('../controller/user');

class UserApi {
    async criarUsuario(req, res) {
        const { nome, email, senha } = req.body;

        try {
            const user = await UserController.criarUsuario(nome, email, senha);
            return res.status(201).send(user);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async alterarUsuario(req, res) {
        const { id } = req.params;
        const { nome, email, senha } = req.body;

        try {
            const user = await UserController.alterarUsuario(Number(id), nome, email, senha);
            return res.status(200).send(user);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async deletarUsuario(req, res) {
        const { id } = req.params;

        try {
            await UserController.deletarUsuario(Number(id));
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async listarUsuario(req, res) {

        try {
            const users = await UserController.listarUsuarios();
            return res.status(200).send(users);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async logarUsuario(req, res) {
        const { email, senha } = req.body;

        try {   
            const token = await UserController.logarUsuario(email, senha);
            return res.status(200).send({token});                                                         
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async validarToken(req, res, next) {
        const token = req.headers.authorization
        try {
            await UserController.validarToken(token)
            next()
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }
}

module.exports = UserApi;