const User = require('../model/user');
const UserController = require('../controller/user');
const ProjectController = require('../controller/project');

class Middleware {
    
    async validarUsuario(req, res, next) {
        const {nome, email, senha} = req.body;
        const emailValido = await User.findAll({where: {email: email}});
    
        if (!nome || !email || !senha) {
            return res.status(400).json({
                error: "Insira os dados corretamente."
            })
        } else if (typeof nome !== 'string' || typeof email !== 'string' || typeof senha !== 'string') {
            return res.status(400).json({
                error: "Insira os dados corretamente."
            })
        } else if (emailValido.length > 0) {
            return res.status(400).json({
                error: "Insira os dados corretamente."
            })
        }
        next();
    }

    async validarProject(req, res, next) {
        const {titulo, conteudo, autorId} = req.body;
        if (!titulo || !conteudo || !autorId) {
            return res.status(400).json({
                error: "Insira os dados corretamente."
            })
        } else if (typeof titulo !== 'string' || typeof conteudo !== 'string' || typeof autorId !== 'number') {
            return res.status(400).json({
                error: "Insira os dados corretamente."
            })
        } 
        const userId = await UserController.buscarPorId(autorId);
        if(!userId) {
            return res.status(404).send({ error: "Insira um ID existente." });
        }
        next();
    }

    async validarTask(req, res, next) {
        const {titulo, conteudo, status, projetoId} = req.body;
        if (!titulo || !conteudo || !status || !projetoId) {
            return res.status(400).json({
                error: "Insira os dados corretamente."
            })
        } else if (typeof titulo !== 'string' || typeof conteudo !== 'string' || typeof status !== 'string' || typeof projetoId !== 'number') {
            return res.status(400).json({
                error: "Insira os dados corretamente."
            })
        } 
        const projectId = await ProjectController.buscarPorId(projetoId);
        if(!projectId) {
            return res.status(404).send({ error: "Insira um ID existente." });
        }
        next();
    }
    
    async validarUserId(req, res, next) {
        const {id} = req.params;
        if (!id || isNaN(id)) {
            return res.status(400).json({
                error: "Insira os dados corretamente."
            })
        }
        const userId= await UserController.buscarPorId(id);
        if(!userId) {
            return res.status(404).send({ error: "Insira um ID existente." });
        }
        next();
    }

    async validarProjectId(req, res, next) {
        const {id} = req.params;
        if (!id || isNaN(id)) {
            return res.status(400).json({
                error: "Insira os dados corretamente."
            })
        }
        const ProjectId= await ProjectController.buscarPorId(id);
        if(!ProjectId) {
            return res.status(404).send({ error: "Insira um ID existente." });
        }
        next();
    }

    async validarTaskId(req, res, next) {
        const {id} = req.params;
        if (!id || isNaN(id)) {
            return res.status(400).json({
                error: "Insira os dados corretamente."
            })
        }
        const TaskId= await TaskController.buscarPorId(id);
        if(!TaskId) {
            return res.status(404).send({ error: "Insira um ID existente." });
        }
        next();
    }

    async validarLogin(req, res, next) {
        const {email, senha} = req.body;
    
        if (!email || !senha) {
            return res.status(400).json({
                error: "Insira os dados corretamente."
            })
        } else if (typeof email !== 'string' || typeof senha !== 'string') {
            return res.status(400).json({
                error: "Insira os dados corretamente."
            })
        } 
        next();
    }
}

module.exports = Middleware;