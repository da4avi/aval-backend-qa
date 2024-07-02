const User = require('../model/user');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const pulo = 10
const senhaJwt = "davi"

class UserController {
    async criarUsuario(nome, email, senha) {
        const senhaCripto = await bcrypt.hash(senha, pulo)

        const user = await User.create({ nome, email, senha: senhaCripto });

        return user;    
    }

    async buscarPorId(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const user = await User.findByPk(id);

        if (!user) {
            throw new Error('Usuário não encontrado');
        }

        return user;
    }

    async alterarUsuario(id, nome, email, senha) {
        const user = await this.buscarPorId(id);

        const senhaCripto = await bcrypt.hash(senha, pulo)

        user.nome = nome;
        user.email = email;
        user.senha = senhaCripto;

        user.save();

        return user;
    }

    async deletarUsuario(id) {
        const user = await this.buscarPorId(id);

        user.destroy();
    }

    async listarUsuarios() {
        return User.findAll();
    }

    async logarUsuario(email, senha) {
        const user = await User.findOne({ where: { email }});

        const senhaVal = await bcrypt.compare(senha, user.senha);

        if (!senhaVal) {
            throw new Error('Email ou senha inválidos');
        }

        return jwt.sign({ id: user.id }, senhaJwt, { expiresIn: '1h' });
    }

    async validarToken(token) {
            await jwt.verify(token, senhaJwt);
    }
}

module.exports = new UserController();