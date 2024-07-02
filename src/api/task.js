const TaskController = require('../controller/task');

class TaskApi {
    async criarTask(req, res) {
        const { titulo, conteudo, status, projetoId } = req.body;

        try {
            const task = await TaskController.criarTask(titulo, conteudo, status, projetoId);
            return res.status(201).send(task);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async alterarTask(req, res) {
        const { id } = req.params;
        const { titulo, conteudo, status, projetoId } = req.body;

        try {
            const task = await TaskController.alterarTask(Number(id), titulo, conteudo, status, projetoId);
            return res.status(200).send(task);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async deletarTask(req, res) {
        const { id } = req.params;

        try {
            await TaskController.deletarTask(Number(id));
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async listarTasks(req, res) {

        try {
            const tasks = await TaskController.listarTasks();
            return res.status(200).send(tasks);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }
}

module.exports = TaskApi;